import express from "express";

import {
  getDataController,
  postDataController,
  postBannerController,
  getBannerController,
} from "../Controller/RouteController.js";

const router = express.Router();

router.post("/banner", postBannerController);
router.get("/banner", getBannerController);

router.get("/getData", getDataController);
router.post("/postData", postDataController);

export default router;
