import { MigrationInterface, QueryRunner } from "typeorm";

export class UserAndProductCreation1706938450404 implements MigrationInterface {
    name = 'UserAndProductCreation1706938450404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(150) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(50) NOT NULL`);
    }

}
