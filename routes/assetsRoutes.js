const express = require("express")
const { getAllAssets, createAnAsset, getAnAsset, removeAsset } = require("../controllers/asetsCcontrollers")

const router = express()

router.route("/").get(getAllAssets).post(createAnAsset)
router.route("/:model").get(getAnAsset).delete(removeAsset)

module.exports =router