const router = require("express").Router();
const userRoutes = require("./userRoutes");
const pageRoutes = require("./pageRoutes");

// API Routes
router.use("/users", userRoutes);
router.use("/page", pageRoutes);

//test route , api/test
router.get("/test", (req, res) => {
  console.log("test route");
  res.send({ successful: true });
});

router.get("/page/pages", async (req, res) => {
  console.log("here");
  const myArray = ["gabe", "gregg"];
  try {
    const stuff = await myArray;
    res.send({ stuff: stuff });
  } catch (e) {
    console.error({ e });
  }
});

module.exports = router;
