import LinkDao from "../dao/mongo/link.dao.js";
import config from "../config/config.js";
import { generateRandomCode } from "../utils/generateRandomCode.js";
const { API_URL } = config;
const linkDAO = new LinkDao();

export const sliceUrl = async (urlData, owner) => {
  const { originalLink, description, customUrl } = urlData;
  let shortLink = "";
  try {
    if (customUrl) {
      const isCustomUrlTaken = await linkDAO.findOne(customUrl);
      if (isCustomUrlTaken) throw new Error("Custom URL already used");
      shortLink = customUrl;
    } else {
      let randomCode = generateRandomCode();

      const isRandomCodeTaken = await linkDAO.findOne(randomCode);

      while (isRandomCodeTaken) {
        randomCode = generateRandomCode();
        isRandomCodeTaken = await linkDAO.findOne(randomCode);
      }

      shortLink = randomCode;
    }

    const shorten = await linkDAO.create({
      originalLink,
      shortLink,
      description: description || "No description",
      owner,
    });

    return {
      status: "success",
      data: shorten,
      message: "Url shortened correctly",
    };
  } catch (error) {
    error.from = error.from || "link service";
    throw error;
  }
};

export const getLinks = async (owner) => {
  try {
    const linkList = await linkDAO.find(owner);
    return {
      status: "success",
      data: linkList,
      message: "Data retrieved correctly",
    };
  } catch (error) {
    error.status = error.status || 500;
    error.from = error.from || "link service";
    throw error;
  }
};

export const getLink = async (link) => {
  try {
    const shorten = await linkDAO.findOne(link);
    if (!shorten) throw new Error("Non-existent link");
    const clicked = await linkDAO.findByIdAndUpdate(shorten._id, {
      $inc: { clickCount: 1 },
    });

    return {
      status: "success",
      data: clicked,
      message: "data retieved successfully",
    };
  } catch (error) {
    error.status = error.status || 500;
    error.from = error.from || "SERVICE";
    throw error;
  }
};

export const removeLink = async (linkID) => {
  try {
    const deleted = await linkDAO.findByIdAndDelete(linkID);
    return {
      status: "success",
      data: deleted,
      message: "Link deleted successfully",
    };
  } catch (error) {
    error.status = error.status || 500;
    error.from = error.from || "SERVICE";
    throw error;
  }
};
