import { Device, ProductPackage } from '../user.entity'
import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    last_name: string;
    @IsNotEmpty()
    device: Device;
    @IsNotEmpty()
    is_active: boolean;
    @IsNotEmpty()
    is_logged: boolean;
    @IsNotEmpty()
    created_at: Date;
    @IsNotEmpty()
    last_visit: Date; 
    @IsNotEmpty()
    product_package: ProductPackage;
    configuration_menu: string;
}