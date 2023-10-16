import { Device, ProductPackage } from '../models/user.entity'

export type CreateUserDto =  {
    name?: string;
    last_name?: string;
    device?: Device;
    is_active?: boolean;
    is_logged?: boolean;
    created_at?: Date;
    last_visit?: Date; 
    product_package?: ProductPackage;
    configuration_menu?: string;
}