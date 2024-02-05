import { CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user_entities";
import { PurchaseOrdersItems } from "./purchasse_order_items_entities";


@Entity()
export class PurchaseOrders{

    @PrimaryGeneratedColumn("uuid")
    id:string 

    @OneToOne(() => Users,  {onDelete: "CASCADE"})
    @JoinColumn({name: "user_id"})
    user: Users | string

    @CreateDateColumn()
    date: Date

    @OneToMany(() => PurchaseOrdersItems, purchaseOrdersItems => purchaseOrdersItems.purchase_order)
    purchaseOrdersItems: PurchaseOrdersItems[]

   
}