import axios from "axios";
import { API_BASE_URL } from "../constants/ApiConstant";

export const $api = axios.create({
  baseURL: API_BASE_URL,
});
