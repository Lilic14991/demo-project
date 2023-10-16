import { UUID } from 'crypto';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


export enum Device {
    Android = 'android',
    Ios = 'ios',
  }

export enum ProductPackage {
    Basic = 'basic',
    Premium = 'premium'
}

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: UUID;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @Column({ type: 'enum', enum: Device, default: Device.Android })
    device: Device;

    @Column()
    is_active: boolean;

    @Column()
    is_logged: boolean;

    @Column()
    created_at: Date;

    @Column()
    last_visit: Date;

    @Column({type: 'enum', enum: ProductPackage, default: ProductPackage.Basic})
    product_package: ProductPackage;

    @Column()
    configuration_menu: string
}

