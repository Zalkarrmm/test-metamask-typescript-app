import axios from "axios";
import { BASE_URL } from "./constants";
import { RequestFuncProps } from "../types/types";

// import axios from
export const requestFunc = async ({ url, type} : RequestFuncProps) => {
  try {
    return await axios.request({
      method: type,
      baseURL: BASE_URL,
      url,
      headers: {
        // Authorization: here i usually do auth
        "Content-Type": "application/json",
      }
     });
  }catch (error) {
    console.error(error)
    throw error
  }
}