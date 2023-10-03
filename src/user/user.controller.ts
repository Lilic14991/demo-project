import { Controller, Body, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UUID } from 'crypto';

@Controller('api/user')
export class UserController {
    constructor(
        private readonly userService: UserService) {}

    @Post()
    crete(@Body() dto: CreateUserDto) {
        
        return this.userService.create(dto);
    }

    @Get()
    findAll() {
        
        return this.userService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: UUID, @Body() dto: CreateUserDto) {
        return this.userService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: UUID) {
        return this.userService.delete(id);
    }
}
