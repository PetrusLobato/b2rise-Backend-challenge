import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigrationTable1709061616735 implements MigrationInterface {
    name = 'MyMigrationTable1709061616735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "image" character varying(190) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "image" character varying(200) NOT NULL`);
    }

}
