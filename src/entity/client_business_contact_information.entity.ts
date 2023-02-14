/**
 * 
 Table: client_business_contact_information
Columns:
id bigint(20) AI PK 
bus_corp_coop varchar(25) 
date_DTI_reg date 
date_SEC_reg date 
date_CDA_reg date 
date_DOLE_reg date 
bus_cont_mother_comp varchar(250) 
bus_cont_trade_name varchar(200) 
bus_cont_ipo_reg varchar(60) 
bus_cont_info_region_id bigint(20) 
bus_cont_info_province_id bigint(20) 
bus_cont_info_city_id bigint(20) 
bus_cont_info_district varchar(30) 
bus_cont_info_barangay_id bigint(20) 
bus_cont_info_zipcode varchar(10) 
bus_cont_info_house varchar(200) 
bus_cont_info_landline_number varchar(20) 
bus_cont_info_fax_number varchar(20) 
bus_cont_mobile_num varchar(50) 
bus_cont_e_commerce_account varchar(25) 
bus_cont_email_address varchar(100) 
bus_cont_website varchar(200) 
bus_cont_thirdparty varchar(100) 
bus_cont_agencies varchar(100) 
bus_cont_agencies_date date 
bus_cont_social_media_account varchar(60) 
bus_same_as_client_address tinyint(1) 
entry_ref_num_id bigint(20) 
bus_same_as_client_contact tinyint(1) 
bus_cont_date_created datetime(6) 
bus_cont_date_updated datetime(6)
 */

import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";

@Entity({ name: "client_business_contact_information" })
export class BusinessContactInfo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bus_corp_coop: string;

    @Column()
    date_DTI_reg: Date;

    @Column()
    date_SEC_reg: Date;

    @Column()
    date_CDA_reg: Date;

    @Column()
    date_DOLE_reg: Date;

    @Column()
    bus_cont_mother_comp: string;

    @Column()
    bus_cont_trade_name: string;

    @Column()
    bus_cont_ipo_reg: string;

    @Column()
    bus_cont_info_region_id: number;

    @Column()
    bus_cont_info_province_id: number;

    @Column()
    bus_cont_info_city_id: number;

    @Column()
    bus_cont_info_district: string;

    @Column()
    bus_cont_info_barangay_id: number;

    @Column()
    bus_cont_info_zipcode: string;

    @Column()
    bus_cont_info_house: string;

    @Column()
    bus_cont_info_landline_number: string;

    @Column()
    bus_cont_info_fax_number: string;

    @Column()
    bus_cont_mobile_num: string;

    @Column()
    bus_cont_e_commerce_account: string;

    @Column()
    bus_cont_email_address: string;

    @Column()
    bus_cont_website: string;

    @Column()
    bus_cont_thirdparty: string;

    @Column()
    bus_cont_agencies: string;

    @Column()
    bus_cont_agencies_date: Date;

    @Column()
    bus_cont_social_media_account: string;

    @Column()
    bus_same_as_client_address: number;

    @ManyToOne(() => Client)
    @JoinColumn({ name: "entry_ref_num_id" })
    client: Client;

    @Column()
    bus_same_as_client_contact: number;

    @Column()
    bus_cont_date_created: Date;

    @Column()
    bus_cont_date_updated: Date;
}
