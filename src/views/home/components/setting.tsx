import {
  useState,
  useImperativeHandle,
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../../store/useUserStore";
export interface SettingProps {}
export interface SettingRef {
  open: () => void;
}

const InnerSetting: ForwardRefRenderFunction<SettingRef, SettingProps> = (
  _,
  ref
) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { setUserInfo } = useUserStore();

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (!name) {
      navigate("/login");
    }
  }, []);

  const open = () => {
    setShow(true);
  };
  const close = () => {
    setShow(false);
  };

  useImperativeHandle(ref, () => {
    return { open };
  });
  if (show) {
    return (
      <div className=" border rounded-md bg-gray-200 text-[12px] px-[16px] py-[10px] w-[120px]">
        <div
          className=" pb-[5px] border-b border-gray-700"
          onClick={() => {
            close();
            navigate("/profile", { state: { a: 1 } });
          }}
        >
          edit profile
        </div>
        <div
          className=" pt-[5px]"
          onClick={() => {
            close();
            setUserInfo?.({});
            localStorage.removeItem("name");
            navigate("/login");
          }}
        >
          logout
        </div>
      </div>
    );
  }
};

const Setting = forwardRef(InnerSetting);

export default Setting;
