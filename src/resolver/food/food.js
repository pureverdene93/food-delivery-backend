import express from "express";
import { put } from "./put.js";
import { deleted } from "./delete.js";
import { post } from "./post.js";
import { get } from "./get.js";
import { foodPatch } from "./food-patch.js";
import { getFoodById } from "./getFoodById.js";
import { getFoodByFoodId } from "./getFoodByFoodId.js";

export const router = express.Router();
router.get(`/`, get);
router.post(`/`, post);
router.put(`/`, put);
router.delete(`/:id`, deleted);
router.patch(`/:id`, foodPatch);
router.get(`/category-id/:id`, getFoodById);
router.get(`/:foodId`, getFoodByFoodId);
