import React from "react";
import { Button } from "antd";
import useRedictHook from "../../hooks/useRedictHook";

const Test: React.FC = () => {
  useRedictHook();

  return (
    <div className=" h-[100vh]">
      <div className=" text-white">selecttest</div>
      <br />
      <Button>按钮</Button>
    </div>
  );
};

export default Test;
