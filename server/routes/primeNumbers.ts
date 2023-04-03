import express, { Request, Response } from "express";
const router = express.Router();

import  {
  medianOfPrimes
} from "../controllers/primeNumbers"

import  {
  medianPrimeReqValidation
} from "../validator/primeNumbers"

router.get(
  '/prime/median/:maxNum',
  medianPrimeReqValidation,
  (req: Request, res: Response) => res.send(medianOfPrimes(Number(req.params.maxNum)))
);

module.exports = router;