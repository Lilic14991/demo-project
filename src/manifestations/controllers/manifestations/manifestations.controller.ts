import { Controller, Get, Post, Req, Res, Body, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateManifestationDto } from '../../dtos/create-manifestation.dto';
import { ManifestationsService } from 'src/manifestations/services/manifestations/manifestations.service';


@Controller('manifestations')
export class ManifestationsController {
    constructor(private readonly manifestationsService: ManifestationsService) {}
    @Get()
    getManifestations() {
        return this.manifestationsService.getAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createManifestation(@Body() dto: CreateManifestationDto) {

        return this.manifestationsService.create(dto);
    }

    @Get(':id')
    async getByIdManfistation(@Param('id', ParseIntPipe)  id: number) {
        return await this.manifestationsService.getById(id);
    }
}
