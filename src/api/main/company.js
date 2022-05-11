import mainCaller from "./mainCaller";
import HTTPMethods from "../HTTPMethods";

export class Company {
  static endpoint = "/companies";

  static get(params) {
    return mainCaller(this.endpoint, HTTPMethods.GET, null, null, params);
  }
  static getProduct(id, params) {
    return mainCaller(
      `${this.endpoint}/${id}/products`,
      HTTPMethods.GET,
      null,
      null,
      params
    );
  }
  static create(data) {
    return mainCaller(this.endpoint, HTTPMethods.POST, data);
  }

  static update(id, data, method = HTTPMethods.PATCH) {
    return mainCaller(`${this.endpoint}/${id}`, method, data);
  }

  static delete(id) {
    return mainCaller(`${this.endpoint}/${id}`, HTTPMethods.DELETE);
  }
  static getOne(id) {
    return mainCaller(`${this.endpoint}/${id}`, HTTPMethods.GET);
  }
}
