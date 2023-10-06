import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Categories } from 'src/categories/categories.entity';

@Entity()
export class Manifestations {

    @Column()
    @PrimaryGeneratedColumn()
    id: number;

    
    @Column()
    category_id: number;

    @ManyToOne(() => Categories, categories => categories.manifestations)
    @JoinColumn({name: 'category_id'})
    categories: Categories;

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

    @IsNotEmpty()
    @Column()
    place: string;

    @Column()
    intro: string;

    @Column()
    intro2: string;

    @Column()
    introExpanded: boolean;

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