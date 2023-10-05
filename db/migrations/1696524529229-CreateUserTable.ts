import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1696524529229 implements MigrationInterface {
  name = 'CreateUserTable1696524529229';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`device\` enum ('android', 'ios') NOT NULL DEFAULT 'android', \`is_active\` tinyint NOT NULL, \`is_logged\` tinyint NOT NULL, \`created_at\` datetime NOT NULL, \`last_visit\` datetime NOT NULL, \`product_package\` enum ('basic', 'premium') NOT NULL DEFAULT 'basic', \`configuration_menu\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
