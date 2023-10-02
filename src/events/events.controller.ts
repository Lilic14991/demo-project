import { Controller, Get, HttpCode, Param, Res, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/events')
export class EventsController {
    @Get()
    @HttpCode(200)
    findAll(@Req() request: Request): object {
        const event = {
            title: "event1",
            desc: "description-1",
            maxMembers: 100
        }
        const e = request.headers;
        console.log(e);
        return e;
    }

    @Get(':id')
    findOne(@Param('id') id: number): string {
        return `this action returns a #${id} event`;
    }

    
    
}


