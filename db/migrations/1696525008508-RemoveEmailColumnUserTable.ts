import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveEmailColumnUserTable1696525008508 implements MigrationInterface {
    name = 'RemoveEmailColumnUserTable1696525008508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`email\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`email\` varchar(255) NOT NULL`);
    }

}
