// import { Axios } from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function View() {
  const [empdata, setEmpdata] = useState([]);

  const { id } = useParams();
  console.log(id);
  // C:\Users\Dell-Pc\Desktop\infynno\react\formapi\src\component\Home.js

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
      //   console.log(data.data);
      setEmpdata(data.data);
    };

    fetchdata();
  }, []);

  return (
    <>
      {/* <h1>lnaskn</h1> */}

      <section
        className="vh-100"
        //    style="background-color: #f4f5f7;"
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div
                className="card mb-3"
                // style="border-radius: .5rem;"
              >
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    //   style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;"
                  >
                    <img
                      src={empdata?.first_name && empdata.avatar}
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
                    <h5>{empdata?.first_name && empdata.first_name}</h5>
                    <p>Web Designer</p>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      {/* <hr className="mt-0 mb-4"> */}
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">
                            {empdata?.first_name && empdata.email}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>last_nmae</h6>
                          <p className="text-muted">
                            {empdata?.first_name && empdata.last_name}
                          </p>
                        </div>
                      </div>
                      <h6>Projects</h6>
                      {/* <hr className="mt-0 mb-4"> */}
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Recent</h6>
                          <p className="text-muted">Lorem ipsum</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Most Viewed</h6>
                          <p className="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
