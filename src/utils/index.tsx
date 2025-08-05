import dayjs from "dayjs";

// 是否为空
export const isEmpty = (val: any) => {
  if (
    !val.length ||
    !Object.keys(val).length ||
    val === undefined ||
    val === null
  ) {
    return true;
  }
  return false;
};

export const formatTime = (time: string) => {
  return dayjs(time).format("YYYY:MM:DD");
};
