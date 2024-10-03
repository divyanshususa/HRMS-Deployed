const express = require("express");
const EmpSchema = require("../Schemas/employee");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const jwtkey = process.env.JWT_KEY;
const frontend = process.env.FRONTEND_URL || "http://localhost:5173";

passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize user ID into the session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await EmpSchema.findById(id);
    done(null, user); // Deserialize user from the session
  } catch (error) {
    done(error);
  }
});

// Configure the Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, // Use environment variable
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Use environment variable
      callbackURL: `${process.env.BACKEND_URL}/auth/google/callback`, // Use environment variable for backend URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const normalizedEmail = profile.emails[0].value.toLowerCase();
        const user = await EmpSchema.findOne({ email: normalizedEmail });

        if (!user) {
          // Handle the case where the user does not exist
          console.log("User not found");
          return done(null, false, { message: "User not found" });
        }
        done(null, user); // Pass the user to the next middleware
      } catch (error) {
        done(error);
      }
    }
  )
);

// Start Google authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth 2.0 callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }), // Redirect on failure
  (req, res) => {
    const token = jwt.sign({ userId: req.user._id }, jwtkey, {
      expiresIn: "24h", // Token expiration time
    });
    res.status(200).json({ token, user: req.user });
  }
);

// Success route
router.get("/login/success", async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.status(200).json(req.user);
  } catch (error) {
    console.error("Error in login success route:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
