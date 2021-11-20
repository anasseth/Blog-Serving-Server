const Checkout = require("../../Models/Checkout/Checkout-Model");

const getAllCheckout = (req, res, next) => {
  Checkout.find({}).then((product) => {
    res.json(product);
  });
};

const newCheckout = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  if (body.question == undefined) {
    return res.status(400).json({ error: "content missing" });
  }
  const CheckoutObject = new Checkout({
    uniqueOrderNumber: body.uniqueOrderNumber,
    trackingID: body.trackingID,
    first_name: body.first_name,
    last_name: body.last_name,
    email_address: body.email_address,
    mobile: body.mobile,
    company_name: body.company_name,
    address_line_one: body.address_line_one,
    address_line_two: body.address_line_two,
    city: body.city,
    postcode: body.postcode,
    country: body.country,
    regionOrState: body.regionOrState,
    orderNotes: body.orderNotes,
  });

  console.log(body);
  console.log(CheckoutObject);

  CheckoutObject.save().then((saveCheckout) => {
    res.json(saveCheckout);
  });
};

const deleteOneCheckout = (req, res, next) => {
    Checkout.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};

module.exports = {
  getAllCheckout,
  newCheckout,
  deleteOneCheckout,
};
