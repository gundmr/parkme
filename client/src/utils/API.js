import axios from "axios";

export default {
    getMap: function(q) {
        //gets google map
        return axios.get("/api/google", { params: { q: "title:" + q } });
      },
      // Gets all saved parking spaces
      getRentalParkingStall: function() {
        return axios.get("/api/rentals");
      },
      // Saves an book to the database
      saveRentalParkingStall: function(bookData) {
        return axios.post("/api/rentals", bookData);
      }
};