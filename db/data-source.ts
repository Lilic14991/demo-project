import { DataSource, DataSourceOptions } from 'typeorm';    
import { config } from 'dotenv';

config();


export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{ .ts,.js}'],
    migrations: ['dist/db/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations_TypeORM',
    synchronize: true
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;