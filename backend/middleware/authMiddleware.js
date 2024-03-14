const EmployeeSchemas = require("../Schemas/employee");

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        // console.log(decoded);
        const user = await EmployeeSchemas.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorized token expired,Please Login again");
    }
  } else {
    throw new Error("THere is no token attached to header");
  }
});

// const isAdmin = asyncHandler(async (req, res, next) => {
//   const { email } = req.user;
//   const adminUser = await EmployeeSchemas.findOne({ email });

//   if (adminUser.role !== "admin") {
//     throw new Error("Your are not an admin");
//   } else {
//     next();
//   }
// });

module.exports = { authMiddleware, isAdmin };
