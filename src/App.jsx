import { useEffect, useState } from "react";

import Bg from "./components/Bg";
import PreLoader from "./components/PreLoader";

function App() {
    const [load, updateLoad] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="App">
                <PreLoader load={load} />
                <Bg />
            </div>
        </>
    );
}

export default App;
