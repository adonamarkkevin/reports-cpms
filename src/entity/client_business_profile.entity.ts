import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";

@Entity({ name: "client_business_profile" })
export class BusinessProfile extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    busprof_year: string;

    @Column()
    busprof_busown: string;

    @Column()
    busprof_primary: string;

    @Column()
    busprof_secondary: string;

    @Column()
    busprof_prio_clust: string;

    @OneToOne(() => Client, (client) => client.client_business_profile)
    @JoinColumn({ name: "entry_ref_num_id" })
    client: Client;

    @Column()
    busprof_industry_clust: string;

    @Column()
    busprof_division_id: string;

    @Column()
    busprof_group_id: string;

    @Column()
    busprof_section_id: string;

    @Column({ name: "date_added" })
    dateAdded: Date;

    @Column({ name: "busprof_cluster" })
    cluster: boolean;

    @Column({ name: "date_updated" })
    dateUpdated: Date;

    @Column()
    busprof_franchise: string;

    @Column()
    marker: string;
}
