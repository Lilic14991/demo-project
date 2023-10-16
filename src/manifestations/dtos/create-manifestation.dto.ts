import { IsNotEmpty } from 'class-validator';

export class CreateManifestationDto {
    @IsNotEmpty()
    title: string;
    category_id: number;
    photo: string;
    eventDate: Date;
    timestamp: Date;
    eventFrom: Date;
    eventTo: Date;
    place: string;
    contact: string;
    intro: string;
    intro2: string;
    introExpanded: boolean;
    x: number;
    y: number;
}