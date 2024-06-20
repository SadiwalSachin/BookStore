import { Router } from "express";
import { getBookData } from "../controller/book.controller.js";

const router = Router()

router.route("/").get(getBookData)

export default router