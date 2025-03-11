import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

const messageRoutes = express.Router();

messageRoutes.get("/users", protectRoute, getUsersForSidebar);

export default messageRoutes;