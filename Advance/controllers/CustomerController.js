const CustomerModel = require("../models").Customer;
const OrderModel = require("../models").Order;

const Order = CustomerModel.hasOne(OrderModel);

// CREATE NEW CUSTOMER ROUTE
module.exports.create = (req, res) => {
  const customer = {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    age: req.body.age,
  };
  CustomerModel.create(customer)
    .then((response) => {
      console.log(response);
      res.status(200).json({
        message: "User Created Sucessfully",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: error ? error.errors[0].message : "Internal Server Error",
      });
    });
};

// READ ALL CUSTOMER ROUTE
module.exports.readAll = async (req, res) => {
  try {
    const allUsers = await CustomerModel.findAll({
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      include: Order
    });
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({
      error: error ? error.errors[0].message : "Internal Server Error",
    });
  }
};

// READ SPECIFIC CUSTOMER FROM ROUTE PARAMS
module.exports.read = async (req, res) => {
  try {
    const user = await CustomerModel.findAll({
      attributes: {
        where: {
          id: req.params.id,
        },
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: error ? error.errors[0].message : "Internal Server Error",
    });
  }
};

// UPDATE SPECIFIC CUSTOMER FROM ROUTE PARAMS
module.exports.update = async (req, res) => {
  try {
    const user = await CustomerModel.update(
      { name: req.body.name },
      {
        where: {
          id: req.params.id,
        },
        exclude: ["password", "createdAt", "updatedAt"],
      }
    );
    res.status(200).json("Customer Name Updated Sucessfully");
  } catch (error) {
    res.status(500).json({
      error: error ? error.errors[0].message : "Internal Server Error",
    });
  }
};

// DELETE SPECIFIC CUSTOMER FROM ROUTE PARAMS
module.exports.delete = async (req, res) => {
  try {
    const user = await CustomerModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Customer Deleted Sucessfully" });
  } catch (error) {
    res.status(500).json({
      error: error ? error.errors[0].message : "Internal Server Error",
    });
  }
};
