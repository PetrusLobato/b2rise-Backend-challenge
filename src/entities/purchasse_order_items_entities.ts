import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Products } from "./products_entities";
import { PurchaseOrders } from "./purchasse_orders_entities";


@Entity()
export class PurchaseOrdersItems{

    
    @OneToOne(() => PurchaseOrders) 
    purcchase_order: PurchaseOrders

    @OneToOne(() => Products) @JoinColumn()
    product: Products

    @Column()
    quantity: number

    @Column({type: 'decimal', precision: 15, scale: 2})
    price:number

}