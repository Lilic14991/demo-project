import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UUID } from 'crypto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
         private readonly userRepository: Repository<User>) {}

    async create(dto: CreateUserDto) {
        const user = this.userRepository.create(dto)

        return await this.userRepository.save(user);
    }

    async getById(id: UUID): Promise <User | null> {
        return await this.userRepository.findOneBy({id});
    }

    async findAll() {
        return await this.userRepository.find();
    }

    async update(id: UUID, dto: CreateUserDto) {
        const user = await this.userRepository.findOne({where: {id}});
        
        if(!user) {
            throw new NotFoundException(`User with id: ${id} not found`)
        }

        Object.assign(user, dto)
        return await this.userRepository.save(user);
    }

    async delete(id: UUID) {
        return await this.userRepository.delete(id);
    }
}
