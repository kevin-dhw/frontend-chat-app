import React, { useState } from "react";
import classNames from "classnames";
import _ from "lodash";
import { data } from "./data";
import "./style.css";

const tempData = _.cloneDeep(data);

const Cart: React.FC = () => {
  const [curData, setCurData] = useState(
    tempData.length > 10 ? tempData.splice(0, 10) : tempData
  );
  const [showHide, setShowHide] = useState(false);

  const togglePopup = () => {
    setCurData(data);
    console.log(curData, "curData");
    setShowHide(true);
  };

  return (
    <div>
      <button
        onClick={togglePopup}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:shadow-[1px_1px_10px_1px_#000]"
      >
        <div className=" hidden hover:block">234455</div>
        1233
      </button>
      <div
        className={classNames(
          " h-[100px] bg-red-200 cursor-pointer",
          " transition-all ease-in-out duration-500 delay-100 hover:bg-pink-700 hover:scale-90 hover:shadow-[1px_1px_10px_1px_#000]"
        )}
      >
        12
      </div>
      {/* {showHide && (
        <div className=" fixed top-0 bottom-0 left-0 right-0 flex flex-col from-right-to-left">
          <div
            className=" h-[300px] w-full bg-white opacity-70"
            onClick={() => setShowHide(false)}
          >
            11
          </div>
          <div className=" bg-black flex-1 rounded-md"></div>
        </div>
      )} */}
    </div>
  );
};

export default Cart;
