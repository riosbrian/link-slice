import { Schema, model } from "mongoose";

const linkSchema = new Schema({
  originalLink: { type: String, required: [true, "Link is required"] },
  shortLink: { type: String, required: true },
  description: { type: String, default: "No description" },
  clickCount: { type: Number, default: 0 },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const LinkModel = model("links", linkSchema);
export default LinkModel;
