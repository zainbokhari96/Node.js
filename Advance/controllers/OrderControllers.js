const Model = require("../models");
const OrderModel = Model.Order;

// Declare Relation For Foreign Keys
const Customer = OrderModel.belongsTo(Model.Customer);

// CREATE NEW ORDER ROUTE
module.exports.create = (req, res) => {
  console.log(req.body.id);
  const order = {
    trackId: Math.floor(Math.random() * 100),
    CustomerId: req.body.id,
  };
  OrderModel.create(order, { include: [Customer] })
    .then((response) => {
      console.log(response);
      res.status(200).json({
        message: "Order Created Sucessfully",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: error ? error.errors[0].message : "Internal Server Error",
      });
    });
};

// READ ALL ORDER ROUTE
module.exports.readAll = async (req, res) => {
  try {
    const allUsers = await OrderModel.findAll({
      attributes: ["trackId"],
      include: Customer,
      // include: [
      //   {
      //     model: Customer,
      //     attributes: ["name", "email"],
      //   },
      // ],
    });
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({
      error: error ? error.errors[0].message : "Internal Server Error",
    });
  }
};

// READ SPECIFIC ORDER FROM ROUTE PARAMS
module.exports.read = async (req, res) => {
  try {
    const user = await OrderModel.findOne({
      attributes: {
        where: {
          id: req.params.id,
        },
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: error ? error.errors[0].message : "Internal Server Error",
    });
  }
};

// UPDATE SPECIFIC ORDER FROM ROUTE PARAMS
module.exports.update = async (req, res) => {
  try {
    const user = await OrderModel.update(
      { trackId: req.body.trackId },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json("Order ID Updated Sucessfully");
  } catch (error) {
    res.status(500).json({
      error: error ? error.errors[0].message : "Internal Server Error",
    });
  }
};

// DELETE SPECIFIC ORDER FROM ROUTE PARAMS
module.exports.delete = async (req, res) => {
  try {
    const user = await OrderModel.destroy({
      where: {
        trackId: req.params.id,
      },
    });
    res.status(200).json({ message: "Order Deleted Sucessfully" });
  } catch (error) {
    res.status(500).json({
      error: error ? error.errors[0].message : "Internal Server Error",
    });
  }
};
