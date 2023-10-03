import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

export class UserService {
    constructor(
        @InjectRepository(User)
         private readonly userRepository: Repository<User>) {}

    async create(dto: CreateUserDto) {
        const user = this.userRepository.create(dto)

        return await this.userRepository.save(user);
    }
}
