/**
 * 
Table: client_asset_size
Columns:
id bigint(20) AI PK 
year varchar(5) 
asset_size_range varchar(50) 
asset_size_classification varchar(50) 
financial_struc_id bigint(20) 
date date
 */

import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { FinancialStruc } from "./client_business_financial_struc";

@Entity({ name: "client_asset_size" })
export class AssetSize extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: string;

    @Column()
    asset_size_range: string;

    @Column()
    asset_size_classification: string;

    @Column()
    date: Date;

    @ManyToOne(() => FinancialStruc)
    @JoinColumn({ name: "financial_struc_id" })
    financial_struc: FinancialStruc;
}
