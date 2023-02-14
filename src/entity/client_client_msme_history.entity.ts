import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";

@Entity({ name: "client_client_msme_history" })
export class ClientMsmeHistory extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    msme_classification: string;

    @Column()
    date_updated: Date;

    @ManyToOne(() => Client)
    @JoinColumn({ name: "client_id" })
    client: Client;

    @Column()
    date_ended: Date;

    @Column()
    date_started: Date;
}
