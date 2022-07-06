import { FaAngleDown } from "react-icons/fa";

export function ButtonCenter() {
  return (
    <>
      <div className="center-btn">
        <button
          style={{
            // color: "wheat",
            backgroundColor: " #5E47A1",
            borderRadius: "20px",
          }}
        >
          <span
            className="center-btn-text"
            style={{
              backgroundColor: " #5E47A1",
              borderRadius: "20px",
            }}
          >
            Show More <FaAngleDown />
          </span>
        </button>
      </div>
    </>
  );
}
