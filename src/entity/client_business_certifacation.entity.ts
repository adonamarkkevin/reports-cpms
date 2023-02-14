import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";

@Entity({ name: "client_business_registrations_certification" })
export class BusinessRegistrationsCertification extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 300 })
    bus_name: string;

    @Column({ type: "varchar", length: 30 })
    bus_bir_num: string;

    @Column({ type: "varchar", length: 15 })
    bus_FDA_registered: string;

    @Column({ type: "varchar", length: 40 })
    bus_FDA_reg_number: string;

    @Column({ type: "date" })
    bus_FDA_granted_date: Date;

    @Column({ type: "date" })
    bus_FDA_exp_date: Date;

    @Column({ type: "tinyint", width: 1 })
    bus_BMBE_registered: boolean;

    @Column({ type: "varchar", length: 60 })
    bus_BMBE_reg_number: string;

    @Column({ type: "date" })
    bus_BMBE_granted_date: Date;

    @Column({ type: "date" })
    bus_BMBE_exp_date: Date;

    @OneToOne(
        () => Client,
        (client) => client.client_business_registrations_certification,
    )
    @JoinColumn({ name: "entry_ref_num_id" })
    client: Client;

    @Column({ type: "varchar", length: 60 })
    bus_regist_number: string;

    @Column({ type: "varchar", length: 100 })
    bus_bus_permit: string;

    @Column({ type: "date" })
    bus_expiration_date: Date;

    @Column({ type: "date" })
    bus_agencies_exp_date: Date;

    @Column({ type: "varchar", length: 20 })
    bus_agencies_regist_num: string;

    @Column({ type: "varchar", length: 20 })
    bus_agencies: string;

    @Column({ type: "varchar", length: 15 })
    bus_FDA_status: string;

    @Column({ type: "varchar", length: 15 })
    bus_bmbe_status: string;

    @Column({ type: "datetime", precision: 6 })
    bus_reg_date_updated: Date;

    @Column({ type: "varchar", length: 10 })
    marker: string;
}
