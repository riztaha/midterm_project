// const express = require("express");
const queries = require("../db/queries/queries");
// const router = express.Router();

const getAllMenuItems = () => {
  const promise = new Promise((resolve, reject) => {
    // console.log("in getAllMenuItems");
    //Grabbing the function from queries.js
    queries
      .getAllMenuItems()
      // db.query(queryString)
      .then((data) => {
        // console.log("in getAllMenuItems");
        // console.log(data);
        // res.json({ menu_items });
        resolve(data);
      })
      .catch((err) => {
        console.log("query error", err.stack);
        reject(err.stack);
      });
  });
  return promise;
};
exports.getAllMenuItems = getAllMenuItems;
