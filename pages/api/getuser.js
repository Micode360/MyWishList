import base from "../../connection/dbconnect";
import { User } from "../../models/User";
base();

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      const user = await User.findOne({ username: "user" });
      if (user) {
        let userList = user.list.map((user) => {

          let list = {
            id: user._id,
            category: user.category,
            description: user.description,
            title: user.title,
            visibility: user.visibility,
            date: user.date,
            attachment: {
              public_id: user.attachment.public_id,
              secure_url: user.attachment.secure_url,
              format: user.attachment.format,
            },
          };
          return list;
        });
        let userResponse = {
          id: user._id,
          username: user.username,
          list: userList,
        };
        res.status(200).json(userResponse);
      }
    } catch (e) {
      res.status(401).json(e.response);
    }
  }
};

export default handler;
