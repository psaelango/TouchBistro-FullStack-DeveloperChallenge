import { Request, Response, NextFunction, RequestHandler } from "express";
import { validationResult, param } from "express-validator";

const MIN_PRIME_VALUE = 2;
const MAX_PRIME_VALUE = 1000000; // Prime Before Million - 999983

const medianPrimeErrMessage = `Provide a number between ${MIN_PRIME_VALUE} and ${MAX_PRIME_VALUE}`;

const validationErrorHandler: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}

export const medianPrimeReqValidation = [
  param('maxNum', medianPrimeErrMessage).exists().isInt({min: MIN_PRIME_VALUE, max: MAX_PRIME_VALUE}),
  (req: Request, res: Response, next: NextFunction) => validationErrorHandler(req, res, next)
]