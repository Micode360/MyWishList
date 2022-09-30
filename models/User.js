import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    list: [
      {
        title: {
          type: String,
          required: true,
          maxlength: [35, "Title should be lesser than 35 charaters"],
        },
        category: {
          type: String,
          required: false,
        },
        description: {
          type: String,
          required: true,
        },
        visibility: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        attachment: {
          asset_id: {
            type: String,
            required: false,
          },
          public_id: {
            type: String,
            required: false,
          },
          version_id: {
            type: String,
            required: false,
          },
          format: {
            type: String,
            required: false,
          },
          resource_type: {
            type: String,
            required: false,
          },
          created_at: {
            type: String,
            required: false,
          },
          etag: {
            type: String,
            required: false,
          },
          url: {
            type: String,
            required: false,
          },
          secure_url: {
            type: String,
            required: false,
          },
          original_filename: {
            type: String,
            required: false,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
