import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Manifestations {

    @Column()
    @PrimaryGeneratedColumn()
    manifestation_id: number;
    @Column()
    category_id: number;
    @Column()
    @IsNotEmpty()
    title: string; 
    @Column()
    contact: string;
    @Column()
    eventDate: Date;
    @Column()
    eventFrom: Date;
    @Column()
    eventTo: Date;
    @Column()
    intro: string;
    @Column()
    intro2: string;
    @Column()
    introExpended: string;
    @Column()
    photo: string;
    @IsNotEmpty()
    @Column()
    timestamp: Date;
    @Column()
    @IsNotEmpty()
    x: number;
    @Column()
    @IsNotEmpty()
    y: number;

}