import React, { useRef } from "react";
import Logo from "../../assets/react.svg";
import useUserStore from "../../store/useUserStore";
import classNames from "classnames";
import Setting, { SettingRef } from "./components/setting";
import useRedictHook from "../../hooks/useRedictHook";

const Home: React.FC = () => {
  const { user, changeUser } = useUserStore();
  const settingRef = useRef<SettingRef>(null);
  useRedictHook();

  return (
    <div className=" flex w-full h-screen">
      <div className=" w-[70%] h-[80%] m-auto border rounded-lg flex p-[20px]">
        <div className=" w-[220px] border-r  pr-[20px] flex flex-col">
          <div className=" flex">
            <div className=" flex-1 ">quickchat</div>
            <div className=" relative">
              <div
                onClick={() => {
                  settingRef.current?.open();
                }}
              >
                setting
              </div>
              <div className=" absolute top-[24px] right-[00px]">
                <Setting ref={settingRef} />
              </div>
            </div>
          </div>
          <div className=" py-[20px] ">
            <input className=" w-full outline-none border border-gray-400 px-[10px] py-[3px] rounded-lg"></input>
          </div>
          <div className=" h-[calc(100%-96px)] overflow-auto">
            <div className="">
              {user.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      changeUser(index);
                    }}
                    key={index}
                    className={classNames(
                      " flex items-center gap-2 border rounded-lg px-[16px] py-[6px] mt-[16px] text-[12px]",
                      item.selected && " bg-gray-400 text-white"
                    )}
                  >
                    <div>
                      <img className=" w-[30px] h-[30px]" src={Logo}></img>
                    </div>
                    <div>
                      <div>{item.name}</div>
                      <div>{item.state}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" flex-1">2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Home;
