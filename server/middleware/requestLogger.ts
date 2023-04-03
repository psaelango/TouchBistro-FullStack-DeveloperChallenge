import { RequestHandler } from "express";

export const requestLogger: RequestHandler = (req, res, next) => {
  console.log("RECV <<<", req.method, req.url, req.body);
  res.on("finish", () => {
      console.log("SEND >>>", res.statusCode);
  });
  next();
};
