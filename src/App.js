// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { View } from "./component/View";
import { useState } from "react";
import { Edit } from "./component/Edit";

function App() {
  const [edit, seteditdata] = useState({});
  // const

  return (
    // <h1>nasn</h1>
    // </div>

    <Routes>
      <Route path="/" element={<Home {...{ edit, seteditdata }} />} />
      <Route path="/user/:id" element={<View />} />
      <Route path="edit" element={<Edit {...{ edit, seteditdata }} />} />

      <Route path="*" element={<>404</>} />
    </Routes>
  );
}

export default App;
