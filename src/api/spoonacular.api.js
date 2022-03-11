/** @format */

import axios from "axios";

const BASE_URL = "https://api.spoonacular.com/food/products";

const SPOONACULAR_API_KEY = process.env.apiKey;

/** Tea Time API Class.
 *
 * Static class tying together methods used to get/send to to the API. No
 * frontend stuff here, no any API-aware stuff elsewhere in the frontend.
 *
 */

class SpoonacularApi {
  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;
    const headers = {};
    const params = { ...data, apiKey: SPOONACULAR_API_KEY };
    console.debug("API Call:", url, headers, params, method);

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
    if (query === undefined || query === "") query = "tea";
    if (!query.includes("tea")) query += " tea";
    const data = { query, number: 2, addProductInformation: true };
    const res = await this.request("search", data, "get");
    return res;
  }
}

export default SpoonacularApi;
