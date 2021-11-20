const Cart = require("../../Models/Cart/Cart-Model");

const getAllCart = (req, res, next) => {
  Cart.find({}).then((product) => {
    res.json(product);
  });
};

const newCart = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  if (body.question == undefined) {
    return res.status(400).json({ error: "content missing" });
  }
  const cartObject = new Cart({
    question: body.question,
    answer: body.answer,
    uniqueOrderNumber: body.uniqueOrderNumber,
    trackingID: body.trackingID,
    checkout: body.checkout,
    totalCost: body.totalCost,
    couponApplied: body.couponApplied,
    couponCode: body.couponCode,
    orderDate: body.orderDate,
    expectedDelivery: body.expectedDelivery,
    orderTime: body.orderTime,
    orderStatus: body.orderStatus,
    paymentType: body.paymentType,
    creditCardType: body.creditCardType,
    items: [],
  });

  for (var i = 0; i < body.items.length; i++) {
    var itemObject = {
      productName: body.productName,
      quantity: body.quantity,
      price: body.price,
      category: body.category,
    };
    cartObject.items.push(itemObject);
  }

  console.log(body);
  console.log(cartObject);

  cartObject.save().then((saveCart) => {
    res.json(saveCart);
  });
};

//DELETE '/tea/:name'
const deleteOneCart = (req, res, next) => {
    Cart.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};

//export controller functions
module.exports = {
  getAllCart,
  newCart,
  deleteOneCart,
};
