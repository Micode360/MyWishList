import base from "../../connection/dbconnect";
import formidable from "formidable";
import cloudinary from "cloudinary";
import { User } from "../../models/User";

base();
export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const handler = (req, res) => {
  const { method } = req;

  if (method === "POST") {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) return res.json({ err: err });

      try {
        let imageResponse = Object.hasOwn(fields, "file")
          ? ""
          : await cloudinary.uploader.upload(files.file.filepath, {
              folder: "wishlist",
            });

        const user = await User.findOne({ username: "user" });
        let listObj = {
          title: fields.title,
          category: fields.category === "" ? "others" : fields.category,
          description: fields.description,
          visibility: fields.visibility,
          date: Date.now(),
          attachment:
            imageResponse === ""
              ? {
                  asset_id: "none",
                  public_id: "none",
                  version_id: "none",
                  format: "none",
                  resource_type: "none",
                  created_at: "none",
                  etag: "none",
                  url: "none",
                  secure_url: "none",
                  original_filename: "none",
                }
              : {
                  asset_id: imageResponse.asset_id,
                  public_id: imageResponse.public_id,
                  version_id: imageResponse.version_id,
                  format: imageResponse.format,
                  resource_type: imageResponse.resource_type,
                  created_at: imageResponse.created_at,
                  etag: imageResponse.etag,
                  url: imageResponse.url,
                  secure_url: imageResponse.secure_url,
                  original_filename: imageResponse.original_filename,
                },
        };

        if (!user) {
          await User.create({
            username: "user",
            list: [listObj],
          });
          response(200, "Your Wishlist has beeen created successfully");
        } else {
          User.updateOne(
            { _id: user._id },
            { $push: { list: listObj } },
            (err, data) => {
              if (err) res.json(err);
              response(200, "Your Wishlist has beeen created successfully");
            }
          );
        }
      } catch (error) {
        response(400, error.response);
      }
    });
  }

  const response = (status, response) => {
    res.status(status).json({
      message: response,
    });
  };
};

export default handler;
