/** @format */

import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** Tea Time API Class.
 *
 * Static class tying together methods used to get/send to to the API. No
 * frontend stuff here, no any API-aware stuff elsewhere in the frontend.
 *
 */

class TeaTimeApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${TeaTimeApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // ************** AUTH ROUTES  ******************

  /** Get token for login from username, password. */
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Signup for site. */
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  // ************** TEA ROUTES  ******************

  /** Get list of myTeas  */
  static async getMyTeas() {
    let res = await this.request("teas/", {
      is_my_tea: true,
      is_on_wish_list: false,
    });
    return res.myTeaArr;
  }

  /** Get wishList of teas  */
  static async getWishList() {
    let res = await this.request("teas/", {
      is_my_tea: false,
      is_on_wish_list: true,
    });
    return res.myTeaArr;
  }

  /** create new Tea in DB (myTea or WishList) */
  static async createNewTea(data) {
    let res = await this.request("teas/new", data, "post");
    return res;
  }

  /** edit a tea in the DB */
  static async editTea(teaId, data) {
    let res = await this.request(`teas/${teaId}`, data, "patch");
    return res;
  }

  /** delete a tea from the DB */
  static async deleteTea(teaId) {
    let res = await this.request(`teas/${teaId}`, {}, "delete");
    return res;
  }

  // ************** SAVED TEA ROUTES  ******************

  /** move a tea from Wish List to My Teas */
  static async moveFromWishListToMyTeas(teaId) {
    let res = await this.request(`saved/teas/switch/${teaId}`, {}, "patch");
    return res;
  }

  /** remove tea from WishList or MyTeas */
  static async deleteSavedTea(teaId) {
    let res = await this.request(`saved/teas/delete/${teaId}, {}, "delete`);
    return res;
  }
}

// for testing, put token ("testuser" / "password" on class)
TeaTimeApi.token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
