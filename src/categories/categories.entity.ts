import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Manifestations } from 'src/manifestations/manifestations.entity';

@Entity()
export class Categories {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    c_key: string;

    @IsNotEmpty()
    @Column()
    name: string;

    @OneToMany(() => Manifestations, manifestations => manifestations.categories)
    manifestations: Manifestations[];
}