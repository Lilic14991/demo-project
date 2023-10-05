import { Controller, Get, Post, Req, Res, Body, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateManifestationDto } from '../../dtos/create-manifestation.dto';
import { ManifestationsService } from 'src/manifestations/services/manifestations/manifestations.service';


@Controller('manifestations')
export class ManifestationsController {
    constructor(private readonly manifestationsService: ManifestationsService) {}
    @Get()
    getManifestations(@Query('sortAsc', ParseBoolPipe) sortAsc: boolean) {
        console.log(sortAsc);
        return { name: 'Lav Fest', date: '2023-10-15', length: 7 };
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createManifestation(@Body() dto: CreateManifestationDto) {

        return this.manifestationsService.create(dto);
    }

    @Get(':id')
    getByIdManfistation(@Param('id', ParseIntPipe)  id: number) {
        console.log(id);
        return {id};
    }
}
