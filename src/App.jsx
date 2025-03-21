import { useEffect, useState } from "react";

import Bg from "./components/Bg";
import PreLoader from "./components/PreLoader";

function App() {
  const [load, updateLoad] = useState(true);

  return (
    <>
      <div className="App">
        {/* <PreLoader load={load} /> */}
        <Bg setLoad={updateLoad} />
      </div>
    </>
  );
}

export default App;
