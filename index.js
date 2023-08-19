const dummyjson = require ("dummy-json");
const express = require("express");
const app = express();

const flight = `{
  "departureAirport": "{{city}}",
  "arrivalAirport": "{{city}}",
  "departureDate": "{{date '2023-06-01T09:00' '2023-10-30T17:30' 'YYYY-MM-DD[T]HH:mm'}}",
  "returnDate": "{{date '2023-10-01T09:00' '2024-02-30T17:30' 'YYYY-MM-DD[T]HH:mm'}}",
  "price": "{{int 0 9999 '0.00'}}"
}`;

app.get("/api/flight", function (req, res) {
  res.set("Content-Type", "application/json");
  res.status(200).send(dummyjson.parse(flight));
});

app.listen(3000,()=>{console.log(`Mock Data Server is running`)});