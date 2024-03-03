const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const mongoSanitize = require("express-mongo-sanitize"); //mongoSanitize is a module that sanitizes user-supplied data to prevent MongoDB Operator Injection.
const User = require("./models/users");
const express = require("express");
const Response = require("./domain/response");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
//connection mongoose
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/weather-users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });
// Api
const HttpStatus = {
  OK: { code: 200, status: "OK" },
  CREATED: { code: 201, status: "CREATED" },
  NO_CONTENT: { code: 204, status: "NO_CONTENT" },
  BAD_REQUEST: { code: 400, status: "BAD_REQUEST" },
  NOT_FOUND: { code: 404, status: "NOT_FOUND" },
  INTERNAL_SERVER_ERROR: { code: 500, status: "INTERNAL_SERVER_ERROR" },
};

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/adduser", async (req, res) => {
  let { username, password, email, country, city } = req.body;
  console.log(req.body);

  country = country.value;
  city = city.value;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      username,
      email,
      country,
      city,
      password: hashedPassword,
    });
    console.log("users", user);
    await user.save();

    res
      .status(HttpStatus.OK.code)
      .send(
        new Response(
          HttpStatus.OK.code,
          HttpStatus.OK.status,
          "send users",
          username
        )
      );
  } catch (err) {
    console.error(err);
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
      .send(
        new Response(
          HttpStatus.INTERNAL_SERVER_ERROR.code,
          HttpStatus.INTERNAL_SERVER_ERROR.status,
          "Failed to save user",
          err.message
        )
      );
  }
});
app.post("/getuser", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  console.log(user);
  if (!user) {
    res.status(HttpStatus.NOT_FOUND.code).send(
      JSON.stringify(
        new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, {
          passwordError: "user not Found",
        })
      )
    );
  }
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(HttpStatus.NOT_FOUND.code).send(
      JSON.stringify(
        new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, {
          passwordError: "password wrong",
        })
      )
    );
  }
  res.status(HttpStatus.OK.code).send(
    JSON.stringify(
      new Response(HttpStatus.OK.code, HttpStatus.OK.status, "send users", {
        username: user.username,
      })
    )
  );
});
app.post("/update-info", async (req, res) => {
  try {
    const { username, password, email, address } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.findOne({ username });
    await User.findByIdAndUpdate(user._id, { hashedPassword, email, address });
    res.status(HttpStatus.OK.code).send(
      new Response(HttpStatus.OK.code, HttpStatus.OK.status, "send users", {
        user,
      })
    );
  } catch (err) {
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
      .send(
        new Response(
          HttpStatus.INTERNAL_SERVER_ERROR.code,
          HttpStatus.INTERNAL_SERVER_ERROR.status,
          "Failed to update user",
          err.message
        )
      );
  }
});
const port = 2500;
app.listen(port, () => {
  console.log(`server open on port ${port}`);
});
