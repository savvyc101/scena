import * as React from "react";
import { styled } from "react-css-styled";
import { prefix } from "../../utils/utils";
import { Text } from "./inputs/Text";
import { useStoreStateValue } from "@scena/react-store";
import { $layerManager, $selectedFlattenLayers } from "../../stores/stores";
import { useAction } from "../../hooks/useAction";

const FontTabElement = styled("div", `
{
    color: var(--scena-editor-color-text);
    font-size: 12px;
    padding: 0px 5px;
}

.scena-font-row {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.scena-font-label {
    width: 80px;
    font-weight: bold;
    font-size: 11px;
    margin-right: 10px;
}

.scena-font-input {
    flex: 1;
}

.scena-font-select {
    width: 100%;
    padding: 4px;
    border: 1px solid var(--scena-editor-color-divider);
    background: var(--scena-editor-color-background-tool);
    color: var(--scena-editor-color-text);
    font-size: 11px;
    border-radius: 2px;
}

.scena-font-color-box {
    width: 30px;
    height: 25px;
    border: 1px solid var(--scena-editor-color-divider);
    cursor: pointer;
    border-radius: 2px;
}
`);

const FONT_FAMILIES = [
    "Arial, sans-serif",
    "Helvetica, sans-serif",
    "Times New Roman, serif",
    "Georgia, serif",
    "Courier New, monospace",
    "Verdana, sans-serif",
    "Comic Sans MS, cursive",
    "Impact, sans-serif",
    "Trebuchet MS, sans-serif",
    "Palatino, serif",
];

const FONT_WEIGHTS = [
    { value: "normal", label: "Normal" },
    { value: "bold", label: "Bold" },
    { value: "100", label: "100" },
    { value: "200", label: "200" },
    { value: "300", label: "300" },
    { value: "400", label: "400" },
    { value: "500", label: "500" },
    { value: "600", label: "600" },
    { value: "700", label: "700" },
    { value: "800", label: "800" },
    { value: "900", label: "900" },
];

export default function FontTab() {
    const layerManager = useStoreStateValue($layerManager);
    const selectedFlattenLayers = useStoreStateValue($selectedFlattenLayers);
    const selectedLayer = selectedFlattenLayers[0];
    
    const action = useAction(["font"]);
    
    if (!selectedLayer) {
        return <FontTabElement>
            <div style={{ padding: "10px", textAlign: "center", color: "var(--scena-editor-color-text)" }}>
                Select a text element to edit font properties
            </div>
        </FontTabElement>;
    }

    const layerFrame = layerManager.getFrame(selectedLayer);
    const fontSize = layerFrame?.get("fontSize") || layerFrame?.get("font-size") || "16px";
    const fontFamily = layerFrame?.get("fontFamily") || layerFrame?.get("font-family") || "Arial, sans-serif";
    const fontWeight = layerFrame?.get("fontWeight") || layerFrame?.get("font-weight") || "normal";
    const color = layerFrame?.get("color") || "#000000";
    const textAlign = layerFrame?.get("textAlign") || layerFrame?.get("text-align") || "left";

    return <FontTabElement>
        <div className={prefix("font-row")}>
            <div className={prefix("font-label")}>Font Family:</div>
            <div className={prefix("font-input")}>
                <select 
                    className={prefix("font-select")}
                    value={fontFamily}
                    onChange={(e) => {
                        action.set("fontFamily", e.target.value);
                    }}
                >
                    {FONT_FAMILIES.map(font => (
                        <option key={font} value={font}>{font.split(',')[0]}</option>
                    ))}
                </select>
            </div>
        </div>
        
        <div className={prefix("font-row")}>
            <div className={prefix("font-label")}>Font Size:</div>
            <div className={prefix("font-input")}>
                <Text 
                    defaultValue={fontSize.toString().replace('px', '')}
                    onChangeValue={(value) => {
                        action.set("fontSize", `${value}px`);
                    }}
                />
            </div>
        </div>
        
        <div className={prefix("font-row")}>
            <div className={prefix("font-label")}>Font Weight:</div>
            <div className={prefix("font-input")}>
                <select 
                    className={prefix("font-select")}
                    value={fontWeight}
                    onChange={(e) => {
                        action.set("fontWeight", e.target.value);
                    }}
                >
                    {FONT_WEIGHTS.map(weight => (
                        <option key={weight.value} value={weight.value}>{weight.label}</option>
                    ))}
                </select>
            </div>
        </div>
        
        <div className={prefix("font-row")}>
            <div className={prefix("font-label")}>Color:</div>
            <div className={prefix("font-input")}>
                <div 
                    className={prefix("font-color-box")}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                        // Color picker functionality would go here
                        const newColor = prompt("Enter color (hex):", color);
                        if (newColor) {
                            action.set("color", newColor);
                        }
                    }}
                />
            </div>
        </div>
        
        <div className={prefix("font-row")}>
            <div className={prefix("font-label")}>Text Align:</div>
            <div className={prefix("font-input")}>
                <select 
                    className={prefix("font-select")}
                    value={textAlign}
                    onChange={(e) => {
                        action.set("textAlign", e.target.value);
                    }}
                >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                </select>
            </div>
        </div>
    </FontTabElement>;
}