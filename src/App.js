import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { View } from "./component/View";
import { useEffect, useState } from "react";
import { Edit } from "./component/Edit";
import axios from "axios";

function App() {
  const [edit, seteditdata] = useState({});
  const [apidata, setapidata] = useState([]);
  const [update, setupdate] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      const { data, status } = await axios.get("https://reqres.in/api/users");
      console.log(status);
      if (status === 200) {
        // setEmpdata(data.data);
        setapidata(data.data);
        setupdate(true);
      }
    };
    if (apidata.length == 0) {
      fetchdata();
    }
  }, []);

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

      <Route
        path="add"
        element={
          <Edit
            {...{ edit, seteditdata, apidata, setapidata, update, setupdate }}
          />
        }
      />
      <Route path="*" element={<>404</>} />
      <Route path="/error" element={<>404</>} />
    </Routes>
  );
}

export default App;
