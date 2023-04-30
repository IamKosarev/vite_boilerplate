import axios from "axios";
import { mapArrayToString } from "../mapArrayToString/mapArrayToString.js";


export const getData = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const userIds = res.data.map(user => user.id);
    return mapArrayToString(userIds);
  } catch (e) {
    console.log(e);
  }
};