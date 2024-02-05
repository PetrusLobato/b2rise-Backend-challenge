import { hashSync } from "bcryptjs";
import { BeforeInsert, Column, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PurchaseOrders } from "./purchasse_orders_entities";



@Entity()
export class Users{

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({length:100, nullable:false})
    email:string

    @Column({length:50, nullable:false})
    username:string

    @Column({length:150, nullable:false})
    password:string
    @BeforeInsert()
    hashPassword(){ this.password = hashSync(this.password, 10)}

    @Column({length:50, nullable:false})
    first_name:string

    @Column({length:50, nullable:false})
    last_name:string

    @OneToOne(()=> PurchaseOrders)
    purchaseOrders: PurchaseOrders





}