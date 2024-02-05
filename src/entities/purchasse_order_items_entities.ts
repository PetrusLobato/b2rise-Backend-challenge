import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./products_entities";
import { PurchaseOrders } from "./purchasse_orders_entities";


@Entity()
export class PurchaseOrdersItems{

    @PrimaryGeneratedColumn("uuid")
    id:string

    @OneToOne(() => Products) 
    @JoinColumn({name: "product_id"})
    product: Products
    
    @ManyToOne(() => PurchaseOrders, purchaseOrders => purchaseOrders.purchaseOrdersItems)
    @JoinColumn({name: "purchase_order_id"})
    purchase_order: PurchaseOrders


    @Column()
    quantity: number

    @Column({type: 'decimal', precision: 15, scale: 2})
    price:number

}