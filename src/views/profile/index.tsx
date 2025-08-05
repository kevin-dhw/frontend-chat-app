import React from "react";
import Logo from "../../assets/react.svg";
import { useLocation } from "react-router-dom";
import { Button } from "antd";

const Profile: React.FC = () => {
  const { state } = useLocation();
  console.log(state, "state");

  return (
    <div className=" flex h-screen w-screen">
      <div className=" m-auto h-[400px] w-[600px] border rounded-xl flex py-[40px] px-[20px] gap-4">
        <div className=" flex-1">
          <div>upload profile image</div>
          <input
            type="input"
            className=" outline-none border rounded-md mt-[20px] px-[10px] py-[4px]"
          ></input>
          <div>
            <input
              height={100}
              className=" outline-none border rounded-md mt-[20px] px-[10px] py-[4px]"
            ></input>
          </div>
          <div className=" flex mt-[20px]">
            <Button>save</Button>
          </div>
        </div>
        <div className=" flex">
          <img className=" m-auto" width={100} height={100} src={Logo}></img>
        </div>
      </div>
    </div>
  );
};

export default Profile;
