import React from "react";
import Usestate from "./components/useState-useEffect-uselayoutEffect/useState";
import Useeffect from "./components/useState-useEffect-uselayoutEffect/useEffect";
import Uselayouteffect from "./components/useState-useEffect-uselayoutEffect/uselayoutEffect";

import UseRef from "./components/useRef-useMemo-useCallback/useRef";
import UseMemo from "./components/useRef-useMemo-useCallback/useMemo";
import UseCallback from "./components/useRef-useMemo-useCallback/useCallback";
import Use from "./components/usestate/Usestate";
import Hooks from "./components/bgChanger-CounterApp"
import SmallApp from "./components/SmallReactApp"
import Examples from "./components/Examples"
import Render from "./components/ConditionalRendering"
import Event from "./components/Event"

const App = () => {
  return (
    <div>
      <Usestate />
      <Useeffect />
      <Uselayouteffect />
      <UseRef />
      <UseMemo />
      <UseCallback />
      <Use />
      <Hooks />
      <SmallApp />
      <Event />
      <Render />
      <SmallApp />
      <Examples />
    </div>
  );
};

export default App;
