import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export function Edit({
  edit,
  setedit,
  apidata,
  setapidata,
  update,
  setupdate,
}) {
  const [formdata, setformdata] = useState({});
  let navigate = useNavigate();
  function handlechange(e) {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  }

  async function submitdata(e) {
    if (
      formdata.first_name == "" ||
      formdata.last_name == "" ||
      formdata.email == ""
    ) {
    } else {
      const newdata = apidata.map((data) => {
        if (data.id == edit.id) {
          return formdata;
        } else {
          return data;
        }
      });

      setapidata(newdata);
      setupdate(true);
      // navigator
      console.log("new data", newdata);
      navigate("/");
    }
  }

  useEffect(() => {
    setformdata(edit);
  }, []);

  return (
    <>
      <div className="container rounded bg-white mt-5 mb-5 k">
        <div className="row">
          <div className="col border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src={formdata.avatar}
                alt="/"
              />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div className="col border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                {/* <div className="col-md-6"><label className="h6">Name</label><input type="text" className="form-control" placeholder="first name" value=""></div> */}
                <div className="col-md-8">
                  <h6
                    className={
                      formdata?.first_name == ""
                        ? "d-block text-danger"
                        : "d-none"
                    }
                  >
                    please enter first Name
                  </h6>
                  <label className="h6">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formdata.first_name}
                    placeholder="surname"
                    onChange={handlechange}
                    name="first_name"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-8">
                  <h6
                    className={
                      formdata?.last_name == ""
                        ? "d-block text-danger"
                        : "d-none"
                    }
                  >
                    Please Enter Last Name
                  </h6>

                  <label className="h6">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formdata.last_name}
                    onChange={handlechange}
                    placeholder="surname"
                    name="last_name"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-8">
                  <h6
                    className={
                      formdata?.email == "" ? "d-block text-danger" : "d-none"
                    }
                  >
                    please enter last email
                  </h6>

                  <h1 className="h6">Email</h1>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    value={formdata.email}
                    onChange={handlechange}
                    // onChange={}
                    name="email"
                  />
                </div>
              </div>
              {/* <div className="row mt-3">
                <div className="col-md-6">
                  <label className="h6">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
                    value={formdata.email}
                  />
                </div>
              </div> */}
              <div className="mt-5 text-center d-flex justify-content-start">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={() => submitdata()}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div>
</div> */}
    </>
  );
}
