/** @format */

import axios from "axios";

const BASE_URL = "https://api.spoonacular.com/food/products";

const SPOONACULAR_AUTH_TOKEN = "##############";

/** Tea Time API Class.
 *
 * Static class tying together methods used to get/send to to the API. No
 * frontend stuff here, no any API-aware stuff elsewhere in the frontend.
 *
 */

class SpoonacularApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { apiKey: `${SPOONACULAR_AUTH_TOKEN}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API Routes

  /** get details on individual product */
  static async getIndividualTeaData(spoonacularProductId) {
    const res = await this.request(`${spoonacularProductId}`);
    return res;
  }

  /** search all teas, include a 'query' */
  static async searchAllTeas(query) {
    if (query.indexOf("tea") === -1) return "must include the word 'tea'";
    const data = { query, number: 30, addProductionInformation: true };
    const res = await this.request("search", data, "get");
    return res;
  }
}

modules.export = SpoonacularApi;
