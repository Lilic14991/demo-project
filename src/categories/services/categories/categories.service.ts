import { Injectable, Param, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from 'src/categories/categories.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Categories)
        private readonly categoriesRepository:
        Repository<Categories>) {}
        
        async getAll() {
            return await this.categoriesRepository.find();
        }

        async getById(@Param('id') id: number): Promise<Categories | null> {
            return await this.categoriesRepository.findOneBy({id});
        }


}
