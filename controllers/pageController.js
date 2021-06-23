const db = require("../models/User");
const stream = require("stream");
const privateRoute = require("../middleware/privateRoute");

// Defining methods for the pageController
module.exports = {
  findIdPage: async (req, res) => {
    const { id } = req.params;
    const userId = req.session.user;

    try {
      const user = await db
        .findOne({ _id: userId, "pages._id": id }, { "pages.$": 1 })
        .exec();
      const page = user.pages[0];
      const html = page.html;
      res.send(html);
    } catch (err) {
      console.log(err);
      res.status(404);
    }
  },

  findAllPages: async (req, res) => {
    const id = req.session.user;
    try {
      const user = await db.findOne({ _id: id }, { "pages.html": 0 });
      res.send(user.pages);
    } catch (err) {
      console.log(err);
      res.status(404);
    }
  },

  download: async (req, res) => {
    const { id } = req.params;
    const userId = req.session.user;

    try {
      const user = await db
        .findOne({ _id: userId, "pages._id": id }, { "pages.$": 1 })
        .exec();

      const page = user.pages[0];
      const html = page.html;
      const name = page.name;
      const fileContents = Buffer.from(html);
      const readStream = new stream.PassThrough();

      readStream.end(fileContents);

      res.set("Content-disposition", "attachment; filename=" + `${name}.html`);
      res.set("Content-Type", "text/plain");

      readStream.pipe(res);
    } catch (err) {
      console.log(err);
      res.status(401);
    }
  },
  updateOne:
    (privateRoute,
    async (req, res) => {
      const { name, thumbnail, html } = req.body;
      const page = { name, thumbnail, html };
      const id = req.session.user;
      try {
        await db.updateOne(
          { _id: id },
          {
            $push: {
              pages: page,
            },
          }
        );
        res.sendStatus(201);
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }
    }),
};
