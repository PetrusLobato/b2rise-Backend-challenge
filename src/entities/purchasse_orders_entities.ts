import { CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user_entities";


@Entity()
export class PurchaseOrders{

    @PrimaryGeneratedColumn("uuid")
    id:string

    @OneToOne(() => Users) @JoinColumn()
    user: Users

    @CreateDateColumn()
    date: Date


}