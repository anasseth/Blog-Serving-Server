const Cart = require("../../Models/Cart/Cart-Model");

const getAllCart = (req, res, next) => {
  Cart.find({}).then((product) => {
    res.json(product);
  });
};

const newCart = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  if (body.uniqueOrderNumber == undefined) {
    return res.status(400).json({ error: "content missing" });
  }
  const cartObject = new Cart({
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
      productName: body.items[i].productName,
      quantity: body.items[i].quantity,
      price: body.items[i].price,
      category: body.items[i].category,
      pillType: {
        power: body.items[i].pillType.power,
        quantity: body.items[i].pillType.quantity,
        price_per_pills: body.items[i].pillType.price_per_pills,
        our_price: body.items[i].pillType.our_price,
      },
    };
    cartObject.items.push(itemObject);
  }

  console.log(body);
  console.log(cartObject);

  cartObject.save().then((saveCart) => {
    res.json(saveCart);
  });
};

const deleteOneCart = (req, res, next) => {
  Cart.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};


const updateCart = (request, response, next) => {
  const body = request.body;

  const updatedCart = {
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
  };

  if(body.items != null && body.items != undefined && body.items.length > 0){
    for (var i = 0; i < body.items.length; i++) {
      var itemObject = {
        productName: body.items[i].productName,
        quantity: body.items[i].quantity,
        price: body.items[i].price,
        category: body.items[i].category,
        pillType: {
          power: body.items[i].pillType.power,
          quantity: body.items[i].pillType.quantity,
          price_per_pills: body.items[i].pillType.price_per_pills,
          our_price: body.items[i].pillType.our_price,
        },
      };
    }
    updatedCart.items.push(itemObject);
  }

  Cart.findByIdAndUpdate(request.params.id, updatedCart, { new: true })
    .then((CartObject) => {
      response.json(CartObject);
    })
    .catch((error) => next(error));
};


//export controller functions
module.exports = {
  getAllCart,
  newCart,
  deleteOneCart,
  updateCart
};
