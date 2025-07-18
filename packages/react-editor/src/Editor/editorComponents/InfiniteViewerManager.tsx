import * as React from "react";
import InfiniteViewer from "react-infinite-viewer";
import { useStoreStateSetValue, useStoreStateValue, useStoreValue } from "@scena/react-store";
import { $space } from "../stores/keys";
import {
    $actionManager, $horizontalGuides, $layerManager, $moveable,
    $scrollPos,
    $selectedLayers, $selecto, $verticalGuides, $zoom, $selectedTool, $editor,
} from "../stores/stores";
import { prefix } from "../utils/utils";
import { createLayer } from "../managers/LayerManager";

export interface InfiniteViewerManagerProps {
    children: React.ReactNode;
}
export const InfiniteViewerManager = React.forwardRef<InfiniteViewer, InfiniteViewerManagerProps>((props, ref) => {
    const selectoRef = useStoreStateValue($selecto);
    const moveableRef = useStoreStateValue($moveable);
    const horizontalGuidesRef = useStoreStateValue($horizontalGuides);
    const verticalGuidesRef = useStoreStateValue($verticalGuides);
    const actionManager = useStoreStateValue($actionManager);
    const layerManager = useStoreStateValue($layerManager);
    const selectedLayersStore = useStoreValue($selectedLayers);
    const selectedTool = useStoreStateValue($selectedTool);
    const editorRef = useStoreStateValue($editor);

    const isSpace = useStoreStateValue($space);
    const zoom = useStoreStateValue($zoom);
    const setZoom = useStoreStateSetValue($zoom);
    const setScrollPos = useStoreStateSetValue($scrollPos);

    return <InfiniteViewer
        ref={ref}
        className={prefix("viewer", isSpace ? "viewer-move" : "")}
        usePinch={true}
        useAutoZoom={true}
        useWheelScroll={true}
        useForceWheel={true}
        useMouseDrag={isSpace}
        useResizeObserver={true}
        wheelContainer={".scena-canvas"}
        pinchThreshold={50}
        maxPinchWheel={3}
        onDragStart={e => {
            const target = e.inputEvent.target;
            const flatted = layerManager.toFlattenElement(selectedLayersStore.value);

            actionManager.act("blur");

            if (
                target.nodeName === "A"
                || moveableRef.current!.isMoveableElement(target)
                || moveableRef.current!.isDragging()
                || flatted.some(t => t === target || t.contains(target))
            ) {
                e.stop();
            }
        }}
        onDragEnd={e => {
            if (!e.isDrag) {
                // Check if text tool is selected and clicked on empty space
                if (selectedTool === "text" && !e.inputEvent.target.closest('.scena-element')) {
                    const infiniteViewer = ref as React.MutableRefObject<InfiniteViewer>;
                    const viewportElement = infiniteViewer.current!.getViewport();
                    const { left, top } = viewportElement.getBoundingClientRect();
                    const currentZoom = zoom;
                    const { clientX, clientY } = e.inputEvent;
                    const offsetPosition = [
                        (clientX - left) / currentZoom,
                        (clientY - top) / currentZoom,
                    ];
                    
                    // Create a new text layer
                    const newTextLayer = createLayer({
                        title: "Text",
                        style: {
                            position: "absolute",
                            left: `${offsetPosition[0]}px`,
                            top: `${offsetPosition[1]}px`,
                            fontSize: "16px",
                            fontFamily: "Arial, sans-serif",
                            color: "#000000",
                            cursor: "text",
                            minWidth: "100px",
                            minHeight: "20px",
                        },
                        jsx: <div 
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            style={{
                                outline: 'none',
                                cursor: 'text',
                            }}
                        >
                            Click to edit text
                        </div>,
                    });
                    
                    // Add the new text layer to the editor
                    const currentLayers = layerManager.layers;
                    editorRef.current!.changeLayers([...currentLayers, newTextLayer]);
                    
                    // Select the new text layer
                    setTimeout(() => {
                        editorRef.current!.setSelectedLayers([newTextLayer]);
                    }, 100);
                } else {
                    selectoRef.current!.clickTarget(e.inputEvent);
                }
            }
        }}
        onAbortPinch={e => {
            selectoRef.current!.triggerDragStart(e.inputEvent);
        }}
        onScroll={e => {
            const horizontalGuides = horizontalGuidesRef.current!;
            const verticalGuides = verticalGuidesRef.current!;

            if (horizontalGuides && verticalGuides) {
                horizontalGuides.scroll(e.scrollLeft, e.zoomX);
                horizontalGuides.scrollGuides(e.scrollTop, e.zoomY);

                verticalGuides.scroll(e.scrollTop, e.zoomX);
                verticalGuides.scrollGuides(e.scrollLeft, e.zoomY);
            }
            setScrollPos([e.scrollLeft, e.scrollTop]);
            setZoom(e.zoomX);
        }}
        onPinch={e => {
            if (moveableRef.current!.isDragging()) {
                return;
            }
            setZoom(e.zoom);
        }}
    >{props.children}</InfiniteViewer>;
});

InfiniteViewerManager.displayName = "InfiniteViewerManager";


