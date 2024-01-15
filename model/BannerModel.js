import mongoose from "mongoose";

const BannerSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const BannerModel = mongoose.model("Banner", BannerSchema);
export default BannerModel;
