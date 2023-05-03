import React, { useState } from "react";
import top_arrow from "../assets/images/png/top_arrow.png"

function BackToTop() {
  const [movetoTop, setMovetoTop] = useState(false);
  const move = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setMovetoTop(true);
    } else {
      setMovetoTop(false);
    }
  });
  return (
    <>
      <div>
        {movetoTop ? (
          <button
            onClick={move}
            className="btn btn_top position-fixed bottom-0 end-0 mb-4 me-4 fc_white top_arrow"
          >
            <img src={top_arrow} alt="" className=" w-100 " />
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default BackToTop;
