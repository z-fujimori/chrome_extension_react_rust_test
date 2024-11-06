import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import * as wasm from "wasm-game-of-life";
import { Universe } from "wasm-game-of-life";

wasm.greet();

const Popup: React.FC = () => {

    const pre = document.getElementById("game-of-life-canvas");
    const universe = Universe.new();
    const [uni, setUni] = useState(universe.render());

    const renderLoop = () => {
        setUni(universe.render());
        universe.tick();

        requestAnimationFrame(renderLoop);
    };

    requestAnimationFrame(renderLoop);

    return (
        <div>
            <pre id="">{ uni }</pre>
            <script src="./bootstrap.js"></script>
        </div>
    );
};

ReactDOM.render(<Popup />, document.getElementById("root"));
