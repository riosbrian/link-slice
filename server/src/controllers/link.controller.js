import * as LinkService from "../services/link.service.js";

const URL_PATTERN = new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i);

export const sliceLink = async (req, res, next) => {
  const user = req.user;
  const linkData = req.body;
  try {
    if (!user) throw new Error("No user is logged in");
    const isValidUrl = URL_PATTERN.test(linkData.originalLink);
    if (!isValidUrl) throw new Error("Invalid url");
    const shorten = await LinkService.sliceUrl(linkData, user._id);
    res.status(201).json(shorten);
  } catch (error) {
    error.from = error.from || "link controller";
    next(error);
  }
};

export const getAllLinks = async (req, res, next) => {
  const user = req.user;
  try {
    if (!user) throw new Error("No user is logged in");
    const linkList = await LinkService.getLinks(user._id);
    res.status(200).json(linkList);
  } catch (error) {
    error.from = error.from || "link controller";
    next(error);
  }
};

export const deleteLink = async (req, res, next) => {
  const { linkID } = req.params;
  const user = req.user;
  try {
    if (!user) throw new Error("No user is logged in");
    const deleted = await LinkService.removeLink(linkID);
    return res.status(200).json(deleted);
  } catch (error) {
    error.from = error.from || "CONTROLLER";
    next(error);
  }
};

export const redirectLink = async (req, res, next) => {
  const { link } = req.params;
  try {
    const shortenedLink = await LinkService.getLink(link);
    res.redirect(shortenedLink.data.originalLink);
  } catch (error) {
    error.from = error.from || "CONTROLLER";
    next(error);
  }
};
