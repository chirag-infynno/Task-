import {
  FaGlobe,
  FaAngleDown,
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
export function Footer() {
  return (
    // <>
    <div className="footer-start">
      {/* d */}
      <div className="footer-div">
        <div className="footer-nav">
          <div className="footer-btn">
            <button
              style={{
                backgroundColor: "#362F33",
              }}
            >
              {" "}
              <span className="footer-btn-text">
                <FaGlobe /> English
                <FaAngleDown />
              </span>
            </button>
          </div>
          <div className="navigation">
            <div className="navigation-title">
              <span className="navigation-title-text">navigation</span>
            </div>
            <div className="navigation-body">
              <span className="navigation-body-text">Home</span>
              <span className="navigation-body-text">FAQ</span>
              <span className="navigation-body-text">Investor Relations</span>
              <span className="navigation-body-text">Jobs</span>
              <span className="navigation-body-text">About Us</span>
              <span className="navigation-body-text">Help Centre</span>
              {/* <span className="navigation-body-text">Jobs</span> */}
            </div>
          </div>
          <div className="navigation">
            <div className="navigation-title">
              <span className="navigation-title-text">legal</span>
            </div>
            <div className="navigation-body">
              <span className="navigation-body-text">Privacy Policy</span>
              <span className="navigation-body-text">Terms of Service</span>
              <span className="navigation-body-text">Cookie Preferences</span>
              <span className="navigation-body-text">
                Corporate Information
              </span>

              {/* <span className="navigation-body-text">Jobs</span> */}
            </div>
          </div>{" "}
          <div className="navigation">
            <div className="navigation-title">
              <span className="navigation-title-text">TALK TO US</span>
            </div>
            <div className="navigation-body">
              <span className="navigation-body-text">support@ercom.com</span>
              <span className="navigation-body-text">+66 2399 1145</span>
              {/* <span className="navigation-body-text">Home</span>
              <span className="navigation-body-text">FAQ</span>
              <span className="navigation-body-text">Investor Relations</span>
              <span className="navigation-body-text">Jobs</span>
              <span className="navigation-body-text">About Us</span>
              <span className="navigation-body-text">Help Centre</span> */}
              {/* <span className="navigation-body-text">Jobs</span> */}
            </div>
          </div>{" "}
          <div className="navigation">
            <div className="navigation-title">
              <span className="navigation-title-text">Follow us</span>
            </div>
            <div className="navigation-body">
              <div className="footer-text-icons">
                <div>
                  <FaLinkedinIn
                    style={{
                      color: "white",
                    }}
                  />{" "}
                </div>
                <div>
                  <FaFacebook
                    style={{
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <FaTwitter
                    style={{
                      color: "white",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div>/</div> */}
        </div>
        <div className="footer-bootm-text">
          <span>© 2022 Dramatic. All Rights Reserved.</span>
        </div>
      </div>
    </div>

    // <h1 style={{bavck}}></h1>
    // </>
  );
}
