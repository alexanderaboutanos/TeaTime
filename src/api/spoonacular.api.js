/** @format */

import axios from "axios";

const BASE_URL = "https://api.spoonacular.com/food/products";

const SPOONACULAR_API_KEY = process.env.apiKey;
// const SPOONACULAR_API_KEY = "d75e0892d04a44c98b0bd3a78ec5ae28";

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

  /** ************** HELPER FUNCTIONS *********************** */

  // filter to remove excess data from Spoonacular API
  static filterTeas(arr) {
    // remove non-teas
    const filter1 = arr.products.filter((i) => {
      return i.aisle === "Tea and Coffee";
    });
    // remove unecessary keys
    const filter2 = filter1.map((t) => {
      return {
        id: t.id,
        title: t.title,
        brand: t.brand,
        description: t.description,
        img_url: t.image,
      };
    });
    return filter2;
  }

  // *****************  Individual API Routes *******************

  /** get details on individual product */
  static async getIndividualTeaData(spoonacularProductId) {
    const res = await this.request(`${spoonacularProductId}`);
    return res;
  }

  /** search all teas, include a 'query' */
  static async searchAllTeas(query) {
    console.debug("API, searchAllTeas, query: ", query);
    if (query === undefined || query === "") query = "tea";
    else if (!query.includes("tea")) query += " tea";
    const data = { query, number: 8, addProductInformation: true };
    const res = await this.request("search", data, "get");
    const filteredResponse = this.filterTeas(res);
    return filteredResponse;
  }
}

export default SpoonacularApi;
