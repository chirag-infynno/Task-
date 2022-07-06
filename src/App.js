import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./component/nav";
import { LeftMenu } from "./component/LeftMenu";
import { BackGroundImage } from "./component/BackGroundImage";

function App() {
  const myStyle = {};
  return (
    <>
      <Nav />

      <BackGroundImage />
      <LeftMenu />
    </>
  );
}

export default App;
