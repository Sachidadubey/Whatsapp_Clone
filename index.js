const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));




main()
  .then((res) => {
    console.log("everything is okk");
  })

  .catch(console.log("something gets wrong"));

  async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// let chat1 = new chat({
//   from: "neha",
//   to: "priya",
//   msg: "send me your exam sheet",
//   created_at: new Date()
// })
// chat1.save().then((res) => {
//   console.log(res);
// })
//   .catch((err) => {
//     console.log(err);
//   });

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("chats.ejs", { chats });
});




app.get("/", (req, res) => {
  res.send("port working well");
});

// new addd 
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// inserting 
app.post("/chats", async (req, res) => {
  const { from, to, msg } = req.body;
  const newChat = new Chat({
    from,
    to,
    msg,
    created_at: new Date()
  });
  await newChat.save();
  res.redirect("/chats");
});
// edit 
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

//update
app.post("/chats/:id/update", async (req, res) => {
  let { id } = req.params;
  let { from, to, msg } = req.body;
  await Chat.findByIdAndUpdate(id, { from, to, msg });
  res.redirect("/chats");
});
// delete
app.get("/chats/:id/delete", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});








app.listen(8080, () => {
  console.log("app is listening on 8080");
})
