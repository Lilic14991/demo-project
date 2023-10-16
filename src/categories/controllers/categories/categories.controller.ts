import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from '../../services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Get()
    getCategories() {
        return this.categoriesService.getAll();
    }

    @Get(':id')
    getCategoryById(@Param('id') id: number) {
        return this.categoriesService.getById(id);
    }
}
