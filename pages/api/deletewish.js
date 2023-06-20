import base from "../../connection/dbconnect";
import { User } from "../../models/User";
import cloudinary from "cloudinary";
base();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const handler = async (req, res) => {
  const { method } = req;

  if (method === "POST") {
    let body = req.body;

    if (body.imgid !== "none") {
      await cloudinary.uploader.destroy(body.imgid);
    }

    await User.updateOne(
      { _id: body.user_id },
      { $pull: { list: { _id: body.id } } }
    ).then(() => {
      res
        .status(200)
        .json({ message: "Your wish has been deleted successfully" });
    });
  }
};

export default handler;
