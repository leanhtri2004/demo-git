import { fetchUser } from "../utils/fetchLocalStorage";

const userInfo = fetchUser();
export const initialState = {
   // user: null
   user:userInfo,
};
