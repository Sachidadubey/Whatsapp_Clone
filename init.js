const mongoose = require("mongoose");
const Chat = require("./models/chat");


main()
  .then((res) => {
  console.log(res);
})
  .catch((err) => {
    console.log("something getss wrong");
  });

  async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheet",
    created_at: new Date()
  },
  {
    from: "priya",
    to: "neha",
    msg: "I'll send it tonight",
    created_at: new Date()
  },
  {
    from: "rahul",
    to: "amit",
    msg: "Are you coming to class?",
    created_at: new Date()
  },
  {
    from: "amit",
    to: "rahul",
    msg: "No, I’m sick today",
    created_at: new Date()
  },
  {
    from: "neha",
    to: "priya",
    msg: "Don’t forget please",
    created_at: new Date()
  },
  {
    from: "priya",
    to: "neha",
    msg: "Sure, I won’t",
    created_at: new Date()
  }
];
Chat.insertMany(allChats);