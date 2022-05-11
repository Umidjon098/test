import axios from "axios";
import { getToken } from "../../util";
import HTTPMethods from "../HTTPMethods";
export const mainUrl = "https://api.uracashback.uz";

export default function mainCaller(
  path,
  method = HTTPMethods.GET,
  data,
  headers,
  params
) {
  const _headers = {
    Accept: "application/json; charset=utf-8",
    Authorization: "Bearer " + getToken(),
    ...headers,
  };
  const options = {
    method,
    url: mainUrl + path,
    params: params,
  };

  if (data) {
    options.data = data;
    if (data instanceof FormData) {
      _headers["Content-type"] = "multipart/form-data";
    } else {
      _headers["Content-type"] = "application/json; charset=utf-8";
    }
  }

  options.headers = _headers;

  return axios(options).then((r) => r.data);
}
