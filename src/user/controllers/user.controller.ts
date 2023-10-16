import { Controller, 
         Body, 
         Post, 
         Get, 
         Put, 
         Param, 
         Delete, 
         UsePipes, 
         ValidationPipe, 
         Query, 
         Req, 
         Res, 
         HttpException, 
         HttpStatus } 
from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UUID } from 'crypto';
import { Request, Response } from 'express';

@Controller('api/user')
export class UserController {
    constructor(
        private readonly userService: UserService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    crete(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }

    @Get(':id')
    async getUserById(
        @Param('id') id: UUID,
        @Res() res: Response,
    ) {
        const user = await this.userService.getById(id);

        if(!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
        if(user.id !== id) { 
            throw new HttpException(`${user.id} is not valid uuid`, HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return res.status(200).send(user);
    }

    @Get()
    async getAll() {
        try {
            return await this.userService.findAll();
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'INTERNAL_SERVER_ERROR'
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }

    @Put(':id')
    async update(@Param('id') id: UUID, @Body() dto: CreateUserDto) {
        return await this.userService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: UUID) {
        return await this.userService.delete(id);
    }
}
