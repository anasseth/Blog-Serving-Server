const express = require("express");

const router = express.Router();

const authenticationController = require("../../Controllers/SecuringAPI/Secure-Controller");

router.post("/", authenticationController.getToken);
router.post("/createrole", authenticationController.createRole);

module.exports = router;
