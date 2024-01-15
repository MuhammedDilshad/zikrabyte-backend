import BannerModel from "../model/BannerModel.js";
import ListModel from "../model/ListModel.js";

export const getDataController = async (req, res) => {
  try {
    const response = await ListModel.find();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
  }
};

export const postDataController = async (req, res) => {
  try {
    const newpost = await ListModel(req.body);
    newpost.save();
    res.status(201).json(newpost);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const postBannerController = async (req, res) => {
  try {
    const newPost = new BannerModel(req.body);

    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getBannerController = async (req, res) => {
  try {
    const post = await BannerModel.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
