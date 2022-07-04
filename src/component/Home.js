// import { Axios } from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

export function Home({
  editdata,
  seteditdata,
  update,
  apidata,
  setapidata,
  setupdate,
}) {
  console.log("home update", update);
  const [empdata, setEmpdata] = useState([]);
  function removeelement(id) {
    const newarray = apidata.filter((data, index) => {
      if (index !== id) {
        return data;
      }
    });

    console.log(newarray);

    // const newarray1 = apidata.filter((data) => {
    //   if (data.id !== id) {
    //     return data;
    //   }
    // });

    setapidata(newarray);
    console.log();
    // setEmpdata(newarray);
  }

  useEffect(() => {}, []);

  return (
    <>
      <div className="container ">
        <h1 className="text-center"> Table Data</h1>
      </div>

      <div className="container d-flex justify-content-end">
        {/* <h1 className="text-center"> Table Data</h1> */}
        <Link
          to={`/add`}
          // onClick={() => {
          //   seteditdata({ ...data });
          // }}
          className="btn btn-success btn-block"
        >
          Add Data
        </Link>
      </div>

      <div className="container">
        <table className="table table-striped border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Profile Image</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {apidata?.map((data, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src={data.avatar} height={"40px"}></img>
                  </td>
                  <td>{data.email}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-block"
                      onClick={() => {
                        console.log(data.id);
                        removeelement(index);
                      }}
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                  <td>
                    {/* name login */}
                    {/* organization */}
                    <Link
                      to={`/edit/${index}`}
                      onClick={() => {
                        // seteditdata({ ...data });
                      }}
                      className="btn btn-success btn-block"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/user/${index}`}
                      className="btn btn-primary btn-block"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
