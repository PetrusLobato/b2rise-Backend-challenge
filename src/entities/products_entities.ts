import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Products{

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({length:30, nullable:false})
    title:string

    @Column({type: 'decimal', precision: 11, scale: 2})
    price:number

    @Column({length:100})
    description:string

    @Column({length:50, nullable:false})
    category:string

    @Column({length:190 })
    image:string


}