import mongoose from "mongoose";

const ListSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  productTitle: {
    type: String,
    required: true,
  },
  productContent: {
    type: String,
  },
});

const ListModel = mongoose.model("List", ListSchema);
export default ListModel;
