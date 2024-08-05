import express from "express";
import {
  createListing,
  getListingsByUserId,
  deleteListing,
  updateListing,
  getListingById,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.get("/listings/:id", verifyToken, getListingsByUserId);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListingById);

export default router;
