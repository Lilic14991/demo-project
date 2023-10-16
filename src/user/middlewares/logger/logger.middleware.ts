import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from 'logs/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) {}
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const requestData = {
        method: req.method,
        url: req.originalUrl,
        status: res.statusCode,
        body: req.body,
        query: req.query,
        params: req.params
      };
      
      this.logger.log('User Request: ', requestData);
    
      next();
    } catch (error) {
        const trace = error.stack;
        this.logger.error('User Error Request: ', trace);
    }
  }
}
