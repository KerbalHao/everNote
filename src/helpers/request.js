/*
 * @Date: 2021-03-17 20:54:49
 * @LastEditors: KerbalHao
 * @FilePath: \ever-note\src\helpers\request.js
 */
import axios from "axios";
import { Message } from "element-ui";

let baseUrl = {
  development: "/",
  production: "http://note-server.hunger-valley.com"
};
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? baseUrl.development
    : baseUrl.production;
console.log(process.env.NODE_ENV);

export default function request(url, type = "GET", data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,

      validateStatus(status) {
        return (status >= 200 && status < 300) || status === 400;
      }
    };

    if (type.toLowerCase() === "get") {
      option.params = data;
    } else {
      option.data = data;
    }

    axios(option)
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          Message.error(res.data.msg);
          reject(res.data);
        }
      })
      .catch((err) => {
        Message.error(err.data.msg);
        console.warn("网络异常");
      });
  });
}
