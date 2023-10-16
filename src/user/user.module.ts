import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './models/user.entity'
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { ValidateUserMiddleware } from './middlewares/validate/validate-user.middleware';
import { LoggerService } from 'logs/logger.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService, LoggerService]
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({
                path: '*',
                method: RequestMethod.ALL
            });
        consumer
            .apply(ValidateUserMiddleware)
            .forRoutes({
                path: 'categories/:id',
                method: RequestMethod.GET
            },
            {
                path: 'manifestations',
                method: RequestMethod.GET
            }
        );
    }
}