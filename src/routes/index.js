const productsRouter = require("./products");
const authRouter = require("./auth");
const uploadRouter = require("./upload");
const sendEmailRouter = require("./sendemail");
const cartRouter = require("./cart");
const orderRouter = require("./order");

function route(app) {
  // order
  app.use("/order", orderRouter);

  // cart
  app.use("/cart", cartRouter);

  // send email
  app.use("/send-email", sendEmailRouter);

  // upload
  app.use("/upload", uploadRouter);

  // signin-signup for authenticate
  app.use("/auth", authRouter);

  // main
  app.use("/products", productsRouter);

  // home
  app.get("/", (req, res, next) => {
    return res.status(200).json({
      message: "Server is OK - pham le song tuan -haha!",
    });
  });
}

module.exports = route;
