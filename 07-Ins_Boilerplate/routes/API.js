import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=" + query + ":keyes&key=";
const APIKEY = "dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL + APIKEY);
  }
};