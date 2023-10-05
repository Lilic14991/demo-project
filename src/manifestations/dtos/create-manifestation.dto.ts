import { IsNotEmpty } from 'class-validator';

export class CreateManifestationDto {
    @IsNotEmpty()
    title: string;
    categoryId: number;
    photo: string;
    eventDate: Date;
    timestamp: Date;
    eventFrom: Date;
    eventTo: Date;
    place: string;
    contact: string;
    intro: string;
    intro2: string;
    introExpanded: [string];
    x: number;
    y: number;
}