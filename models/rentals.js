const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    user: { type: [String], required: true },
    parkingLocation: { type: String, required: true },
    //available: boolean
});

const Rentals = mongoose.model("Parking", rentalSchema);

module.exports = Rentals;