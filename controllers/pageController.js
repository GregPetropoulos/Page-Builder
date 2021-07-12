const db = require("../models/User");
const privateRoute = require("../middleware/privateRoute");
const fs = require('fs');
const path = require('path');
const appDir = path.dirname(require.main.filename);

// Defining methods for the pageController
module.exports = {

  // TODO: Needs work
  findIdPage: async (req, res) => {
    const { id } = req.params;
    const userId = req.session.user;
    try {
      const user = await db
        .findOne({ _id: userId, "pages._id": id }, { "pages.$": 1 })
        .exec();
      console.log(user);
      
      if (!user) {
        res.status(404).send({ error: `page id ${id} not found`})
        return
      }

      const page = user.pages[0];
      const html = page.html;
      res.send(html);
    } catch (err) {
      console.log(err);
      res.status(404);
    }
  },

  findAllPages: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      const user = await db.findOne({ _id: id },{ pages: true });
      res.send(user);
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
      fs.writeFile(`${name}.html`, html, function (err) {
        if (err) throw err;
        var filePath = path.join(appDir, `${name}.html`);
        res.setHeader('Content-Disposition', 'attachment; filename=' + `${name}.html`);
        res.setHeader('Content-Type', 'text/plain');
        res.download(filePath, `${name}.html`)
      });
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

  deletePage: async (req, res) => {
    const { id, userId } = req.params
      try {
        await db.updateOne(
          { _id: userId },
          {
            $pull: {
              pages:{ _id: id},
            },
          }
        );
        res.sendStatus(200);
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }
  }
};
