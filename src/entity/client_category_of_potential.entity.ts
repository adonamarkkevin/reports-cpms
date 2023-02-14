import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";

@Entity({ name: "client_category_of_potential" })
export class ClientCategoryOfPotential extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;

    @Column()
    date_updated: Date;

    @OneToOne(() => Client)
    @JoinColumn({ name: "client_id" })
    client: Client;
}
