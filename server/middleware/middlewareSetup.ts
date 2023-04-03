
import { Express, Request, Response } from "express";
import { errorLogger, errorResponder } from "./errorHandler";
import { requestLogger } from "./requestLogger";

export const setupMiddleware = (server: Express)=>{  
  server.use(requestLogger);
  server.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Touch Bistro API');
  });
  server.use('/api', [
    require('../routes/primeNumbers')
  ]);
  server.use(errorLogger);
  server.use(errorResponder);
}