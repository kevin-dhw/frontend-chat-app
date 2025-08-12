import React, { useState } from "react";
import _ from "lodash";
import { data } from "./data";
import "./style.css";

const tempData = _.cloneDeep(data);

const Cart: React.FC = () => {
  const [curData, setCurData] = useState(
    tempData.length > 10 ? tempData.splice(0, 10) : tempData
  );
  console.log(curData, "curData");

  const togglePopup = () => {
    setCurData(data);
    console.log(data, "curData");
  };

  return (
    <div>
      <button
        onClick={togglePopup}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        1233
      </button>
    </div>
  );
};

export default Cart;
