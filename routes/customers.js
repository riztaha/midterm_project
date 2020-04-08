const queries = require("../db/queries/queries");

// Function to get all customers
const getCustomers = function () {
  const promise = new Promise((resolve, reject) => {
    console.log("in getCustomers");
    //Grabbing the function from queries.js
    queries
      .getCustomers()
      // db.query(queryString)
      .then((data) => {
        console.log("in deep getCustomers");
        console.log(data);
        // res.json({ menu_items });
        resolve(data);
      })
      .catch((err) => {
        console.error("query error", err.stack);
        reject(err.stack);
      });
  });
  return promise;
};
exports.getCustomers = getCustomers;

// Function to place customer's information into db
const placeCustomerInfo = function (customer) {
  const promise = new Promise((resolve, reject) => {
    // console.log("in getAllMenuItems");
    //Grabbing the function from queries.js
    queries
      .getCustomerOrder(customer)
      // db.query(queryString)
      .then((data) => {
        // console.log("in getAllMenuItems");
        // console.log(data);
        // res.json({ menu_items });
        resolve(data);
      })
      .catch((err) => {
        console.error("query error", err.stack);
        reject(err.stack);
      });
  });
  return promise;
};
exports.placeCustomerInfo = placeCustomerInfo;

let customer = {
  first_name: "first Name",
  last_name: "last Name",
  email: "Email@email.com",
  phone: "+12912959",
  street: "21 brooklen st.",
  city: "toronto",
  province: "ON",
  country: "Canada",
  postal_code: "L5w0gw",
  credit_card: "12314512512521",
  credit_card_exp: "0120",
};

// console.log(getCustomers());
placeCustomerInfo(customer);