const getAllProduct = (req, res, next) => {
    res.json({message: "GET all Product"});
};

//POST '/tea'
const newProduct = (req, res, next) => {
    res.json({message: "POST new Product"});
};

//DELETE '/tea'
const deleteAllProduct = (req, res, next) => {
    res.json({message: "DELETE all Product"});
};

//GET '/tea/:name'
const getOneProduct = (req, res, next) => {
    res.json({message: "GET 1 Product"});
};

//POST '/tea/:name'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 Product comment"});
};

//DELETE '/tea/:name'
const deleteOneProduct = (req, res, next) => {
    res.json({message: "DELETE 1 Product"});
};

//export controller functions
module.exports = {
    getAllProduct, 
    newProduct,
    deleteAllProduct,
    getOneProduct,
    newComment,
    deleteOneProduct
};