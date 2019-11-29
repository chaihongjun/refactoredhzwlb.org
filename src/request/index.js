/*
 * @Author: ChaiHongJun
 * @Date: 2019-11-25 14:42:42
 * @LastEditTime: 2019-11-28 11:52:00
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import axios from "axios";

export function Request(config) {
  const instance = axios.create({
    method: "get",
    baseURL: "http://192.168.0.222:7300/mock/5ddb933eb7f02e2ea33aca08/api/",
    timeout: 3000
  });

  return instance(config);
}
