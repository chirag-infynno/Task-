import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { View } from "./component/View";
import { useState } from "react";
import { Edit } from "./component/Edit";

function App() {
  const [edit, seteditdata] = useState({});
  const [apidata, setapidata] = useState([]);
  const [update, setupdate] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            {...{ edit, seteditdata, apidata, setapidata, update, setupdate }}
          />
        }
      />
      <Route
        path="/user/:id"
        element={<View {...{ setapidata, update, apidata }} />}
      />
      <Route
        path="edit/:id"
        element={
          <Edit
            {...{ edit, seteditdata, apidata, setapidata, update, setupdate }}
          />
        }
      />

      <Route path="*" element={<>404</>} />
    </Routes>
  );
}

export default App;
