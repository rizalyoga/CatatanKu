import { setCookie } from "cookies-next";

export const setUserId = (id: string) => {
  setCookie("userId", id);
};
