import React, { useState } from "react";
import "./style.css";

const Cart: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  return (
    <div>
      <button
        onClick={togglePopup}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {isPopupVisible ? "Close Popup" : "Open Popup"}
      </button>
      {isPopupVisible && (
        <div className=" animate-slide-in fixed top-0 left-0 right-0 bottom-0 bg-gray-300 flex ">
          <div className=" w-[100px] opacity-50">123</div>
          <div className=" bg-white flex-1">345</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
