import base from "../../connection/dbconnect";
import { User } from "../../models/User";
base();


const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    
    try {
        const user = await User.findOne({ username: "user" });
        if(user) {
            res.status(200).json(user);
        }
    }catch(e) {
        res.status(401).json(e.response);
    }

 };
};

export default handler;
