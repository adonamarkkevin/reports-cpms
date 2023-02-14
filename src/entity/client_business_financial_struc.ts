/**
 *
Table: client_business_financial_struc
Columns:
id bigint(20) AI PK 
busfin_capyear_class varchar(20) 
busfin_capstruct varchar(20) 
busfin_paid_cap varchar(20) 
busfin_auth_cap varchar(20) 
busfin_subs_cap varchar(20) 
busfin_inicap varchar(50) 
busfin_paidyear_class varchar(25) 
busfin_asset_sizeclass varchar(25) 
busfin_asset_range varchar(30) 
busfin_sales_year varchar(5) 
busfin_domestic varchar(20) 
busfin_export varchar(20) 
entry_ref_num_id bigint(20) 
busfin_total varchar(20) 
bisfin_iniyear varchar(5) 
busfin_date_updated datetime(6) 
marker varchar(10)
 */

import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";
import { AssetSize } from "./client_asset.entity";
import { CapitalStructure } from "./client_capital_structure.entity";
import { SalesHistory } from "./client_sales_history.entity";

@Entity({ name: "client_business_financial_struc" })
export class FinancialStruc extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    busfin_capyear_class: string;

    @Column()
    busfin_capstruct: string;

    @Column()
    busfin_paid_cap: string;

    @Column()
    busfin_auth_cap: string;

    @Column()
    busfin_subs_cap: string;

    @Column()
    busfin_inicap: string;

    @Column()
    busfin_paidyear_class: string;

    @Column()
    busfin_asset_sizeclass: string;

    @Column()
    busfin_asset_range: string;

    @Column()
    busfin_sales_year: string;

    @Column()
    busfin_domestic: string;

    @Column()
    busfin_export: string;

    @ManyToOne(() => Client)
    @JoinColumn({ name: "entry_ref_num_id" })
    client: Client;

    @Column()
    busfin_total: string;

    @Column()
    bisfin_iniyear: string;

    @Column()
    busfin_date_updated: Date;

    @Column()
    marker: string;

    @OneToMany(() => AssetSize, (asset) => asset.financial_struc, {
        eager: true,
    })
    asset_size: AssetSize[];

    @OneToMany(() => CapitalStructure, (cap) => cap.financial_struc, {
        eager: true,
    })
    client_capital_structure: CapitalStructure[];

    @OneToMany(() => SalesHistory, (sales) => sales.financial_struc, {
        eager: true,
    })
    client_sales_history: SalesHistory[];
}
