import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Products } from "./products_entities";
import { PurchaseOrders } from "./purchasse_orders_entities";


@Entity()
export class PurchaseOrdersItems{

    @OneToOne(() => Products) 
    @JoinColumn()
    product: Products
    
    @ManyToOne(() => PurchaseOrders, purchaseOrders => purchaseOrders.purchaseOrdersItems)
    @JoinColumn()
    purchase_order: PurchaseOrders


    @Column()
    quantity: number

    @Column({type: 'decimal', precision: 15, scale: 2})
    price:number

}