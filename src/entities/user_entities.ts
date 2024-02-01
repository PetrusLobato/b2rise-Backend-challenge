import { hashSync } from "bcryptjs";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Users{

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({length:100, nullable:false})
    email:string

    @Column({length:50, nullable:false})
    username:string

    @Column({length:50, nullable:false})
    password:string

    @Column({length:50, nullable:false})
    first_name:string

    @Column({length:50, nullable:false})
    last_name:string

    @BeforeInsert()
    hashPassword(){ this.password = hashSync(this.password, 10)}


}