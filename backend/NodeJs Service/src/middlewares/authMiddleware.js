import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/initialConfig.js";

// Middleware to validate JWT tokens
export default function auth(req, res, next) {
  // Extract the token from the Authorization header if present
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // Extract the token from the header
  const token = authHeader.replace("Bearer ", "");

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.userId; // Attach the user ID to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // Respond with an error if the token is invalid
    res.status(401).json({ message: "Token is not valid" });
  }
}
