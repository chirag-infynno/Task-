import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./component/nav";
import { LeftMenu } from "./component/LeftMenu";
import { BackGroundImage } from "./component/BackGroundImage";
import { MustWatch } from "./component/Mustwatch";

function App() {
  return (
    <>
      <Nav />
      <BackGroundImage />
      <LeftMenu />
      <MustWatch />
    </>
  );
}

export default App;
