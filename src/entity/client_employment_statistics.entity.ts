import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";

@Entity({ name: "client_employment_statistics" })
export class ClientEmploymentStatistics extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Client)
    @JoinColumn({ name: "entry_ref_num_id" })
    client: Client;

    @Column()
    empstat_full_abled_male: string;

    @Column()
    empstat_full_emp_male: string;

    @Column()
    empstat_full_indigen_male: string;

    @Column()
    empstat_full_pwd_male: string;

    @Column()
    empstat_full_senior_male: string;

    @Column()
    empstat_part_abled_male: string;

    @Column()
    empstat_part_emp_male: string;

    @Column()
    empstat_part_indigen_male: string;

    @Column()
    empstat_part_pwd_male: string;

    @Column()
    empstat_part_senior_male: string;

    @Column()
    emp_stats_year: string;

    @Column()
    empstat_full_abled_female: string;

    @Column()
    empstat_full_emp_female: string;

    @Column()
    empstat_full_indigen_female: string;

    @Column()
    empstat_full_pwd_female: string;

    @Column()
    empstat_full_senior_female: string;

    @Column()
    empstat_part_abled_female: string;

    @Column()
    empstat_part_emp_female: string;

    @Column()
    empstat_part_indigen_female: string;

    @Column()
    empstat_part_pwd_female: string;

    @Column()
    empstat_part_senior_female: string;

    @Column()
    emp_stats_date: Date;

    @Column()
    emp_date_updated: Date;

    @Column()
    marker: string;
}
