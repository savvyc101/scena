/* eslint-disable max-len */
import * as React from "react";
import "./App.css";
import { ScenaProps } from "../Editor/types";
import Editor, { makeScenaFunctionComponent } from "../Editor";
import { 
    Logo, 
    NavMenu, 
    NavButton, 
    Navbar, 
    HeroBadge, 
    HeroTitle, 
    HeroDescription, 
    HeroButton,
    BackgroundElement1,
    BackgroundElement2,
    BackgroundGradient1,
    BackgroundGradient2
} from "../Editor/defaultComponents/HeroSection";

class App extends React.Component {
    public editor = React.createRef<Editor>();
    public render() {
        return <div className="app">
            <Editor
                ref={this.editor}
                // debug={false}
            />
        </div>;
    }
    public componentDidMount() {
        (window as any).a = this;
        this.editor.current!.appendJSXs([
            // Background elements
            {
                jsx: <BackgroundGradient1 />,
                name: "Background Gradient 1",
                frame: {
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    width: "480px",
                    height: "480px",
                    "z-index": "-2",
                },
            },
            {
                jsx: <BackgroundGradient2 />,
                name: "Background Gradient 2",
                frame: {
                    position: "absolute",
                    right: "0px",
                    bottom: "0px",
                    width: "480px",
                    height: "480px",
                    "z-index": "-2",
                },
            },
            {
                jsx: <BackgroundElement1 />,
                name: "Background Element 1",
                frame: {
                    position: "absolute",
                    right: "0px",
                    top: "0px",
                    width: "480px",
                    height: "480px",
                    "z-index": "-1",
                },
            },
            {
                jsx: <BackgroundElement2 />,
                name: "Background Element 2",
                frame: {
                    position: "absolute",
                    left: "0px",
                    bottom: "0px",
                    width: "480px",
                    height: "480px",
                    "z-index": "-1",
                },
            },
            // Navbar
            {
                jsx: <Navbar />,
                name: "Navigation Bar",
                frame: {
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    width: "100%",
                    height: "96px",
                    "z-index": "10",
                },
            },
            // Hero content
            {
                jsx: <HeroBadge />,
                name: "Hero Badge",
                frame: {
                    position: "absolute",
                    left: "50%",
                    top: "180px",
                    width: "200px",
                    height: "32px",
                    "transform": "translateX(-50%)",
                    "text-align": "center",
                },
            },
            {
                jsx: <HeroTitle />,
                name: "Hero Title",
                frame: {
                    position: "absolute",
                    left: "50%",
                    top: "240px",
                    width: "800px",
                    height: "200px",
                    "transform": "translateX(-50%)",
                    "text-align": "center",
                    "font-size": "48px",
                    "font-weight": "700",
                    "line-height": "1.1",
                },
            },
            {
                jsx: <HeroDescription />,
                name: "Hero Description",
                frame: {
                    position: "absolute",
                    left: "50%",
                    top: "460px",
                    width: "600px",
                    height: "80px",
                    "transform": "translateX(-50%)",
                    "text-align": "center",
                    "font-size": "16px",
                    "line-height": "1.6",
                },
            },
            {
                jsx: <HeroButton />,
                name: "Hero Button",
                frame: {
                    position: "absolute",
                    left: "50%",
                    top: "560px",
                    width: "140px",
                    height: "48px",
                    "transform": "translateX(-50%)",
                },
            },
        ], true).then(targets => {
            this.editor.current!.setSelectedTargets([targets[2]], true);
        });
    }
}

export default App;
