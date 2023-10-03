import { Device, ProductPackage } from '../user.entity'

export class CreateUserDto {
    name: string;
    last_name: string;
    device: Device.Android;
    is_active: boolean;
    is_logged: boolean;
    created_at: Date;
    last_visit: Date; 
    product_package: ProductPackage.Basic;
    configuration_menu: string
}