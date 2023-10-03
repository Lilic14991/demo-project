import { Controller, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService) {}

    @Post()
    crete(@Body() dto: CreateUserDto) {
        
        return this.userService.create(dto);
    }
}
