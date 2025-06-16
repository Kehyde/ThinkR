import { Router } from "express";
import userController from "../controllers/userController.js";
import { catchErrors } from "../handlers/errorHandlers.js";
import noteController from "../controllers/noteController.js";
import authController from "../controllers/authController.js";

console.log("authController.login is", typeof authController.login);

export const router = Router();

//Route for home page after login
router.get("/", authController.isLoggedIn, noteController.viewNotes);

//Routes for adding notes
router.get(
  "/add",
  authController.isLoggedIn,
  catchErrors(noteController.addNote)
);
router.post(
  "/add",
  authController.isLoggedIn,
  catchErrors(noteController.createNote)
);

//Routes for editing notes
router.get(
  "/notes/:id/edit",
  authController.isLoggedIn,
  catchErrors(noteController.editNote)
);
router.post(
  "/notes/:id/edit",
  authController.isLoggedIn,
  catchErrors(noteController.updateNote)
);

//Routes for deleting notes
router.delete(
  "/notes/:id",
  authController.isLoggedIn,
  catchErrors(noteController.deleteNote)
);

//Router for registration
router.get("/register", userController.showRegisterForm);
router.post("/register", userController.register);

//Router for login
router.get("/login", userController.loginForm);
router.post("/login", authController.login);
