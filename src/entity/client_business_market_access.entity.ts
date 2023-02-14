import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";

@Entity({ name: "client_business_market_access" })
export class ClientBusinessMarketAccess extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Client)
    @JoinColumn({ name: "entry_ref_num_id" })
    client: Client;

    @Column()
    bus_market_date_updated: Date;

    @Column()
    marker: string;
}
