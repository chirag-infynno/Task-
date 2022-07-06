// import logo from "./logo.svg";
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
      <MustWatch {...{ MustWatch: true, api: "upcoming" }} />
      <MustWatch {...{ RECOMMENDED: true, api: "634649/similar" }} />
      <MustWatch {...{ BOLLYWOOD: true, api: "top_rated" }} />
      <MustWatch {...{ slick: true, api: "top_rated", BOLLYWOOD: true }} />
    </>
  );
}

export default App;
