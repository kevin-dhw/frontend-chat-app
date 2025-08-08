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

// check if one propery of this object is empty

export const isProperyEmpry = (obj: Record<string, any>) => {
  let flag = true;
  for (let k in obj) {
    if (!obj[k]) {
      flag = false;
    }
  }
  return flag;
};

export const formatTime = (time: string) => {
  return dayjs(time).format("YYYY:MM:DD");
};
