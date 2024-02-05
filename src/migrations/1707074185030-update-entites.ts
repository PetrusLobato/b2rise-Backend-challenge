import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntites1707074185030 implements MigrationInterface {
    name = 'UpdateEntites1707074185030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "deleteAt"`);
        await queryRunner.query(`ALTER TABLE "purchase_orders_items" DROP COLUMN "deleteAt"`);
        await queryRunner.query(`ALTER TABLE "purchase_orders" DROP COLUMN "deleteAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchase_orders" ADD "deleteAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "purchase_orders_items" ADD "deleteAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "products" ADD "deleteAt" TIMESTAMP`);
    }

}
