const db = require("../models/User");
const stream = require("stream");
const privateRoute = require("../middleware/privateRoute");
var fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);

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
    const id = req.session.user;
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
      // const fileContents = Buffer.from(html);
      // const readStream = new stream.PassThrough();
      // console.log('fileContents', fileContents)
      // console.log('name', name)
      // readStream.end(fileContents);
      
      // res.set("Content-disposition", "attachment; filename=" + `${name}.html`);
      // res.set("Content-Type", "text/plain");
      // fs.unlink(`${name}.html`)
      fs.appendFile(`${name}.html`, html, function (err) {
        if (err) throw err;
        console.log('Saved!');
        var filePath = path.join(appDir, `${name}.html`);
        res.setHeader('Content-Disposition', 'attachment; filename=' + `${name}.html`);
        // res.setHeader('Content-Transfer-Encoding', 'binary');
        res.setHeader('Content-Type', 'text/plain');

        // res.sendFile(path.join(appDir, `${name}.html`))
        res.download(filePath, `${name}.html`)
        console.log('downloaded')
        // res.attachment(`${name}.html`);
        // res.end('Downloaded', 'UTF-8')
      });
      
      // return readStream.pipe(res);
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
      console.log('PAGE TO SAVE', page)

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

// From line 27
// , { "pages.html": 0 }
