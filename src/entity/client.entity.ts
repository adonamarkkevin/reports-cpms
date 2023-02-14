import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Barangay } from "./client_barangay.entity";
import { BusinessRegistrationsCertification } from "./client_business_certifacation.entity";
import { BusinessContactInfo } from "./client_business_contact_information.entity";
import { FinancialStruc } from "./client_business_financial_struc";
import { ClientBusinessMarketAccess } from "./client_business_market_access.entity";
import { BusinessOwnerProfile } from "./client_business_owner_profile.entity";
import { BusinessProfile } from "./client_business_profile.entity";
import { ClientCategoryOfPotential } from "./client_category_of_potential.entity";
import { City } from "./client_city.entity";
import { ClientMsmeHistory } from "./client_client_msme_history.entity";
import { ClientEmploymentStatistics } from "./client_employment_statistics.entity";
import { Province } from "./client_province.entity";
import { Region } from "./client_region.entity";

@Entity({ name: "client_client" })
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_id_no: string;

    @Column()
    client_fname: string;

    @Column()
    client_mname: string;

    @Column()
    client_lname: string;

    @Column()
    client_suffix: string;

    @Column()
    client_position: string;

    @Column()
    client_birthday: Date;

    @Column()
    client_age: number;

    @Column()
    client_sex: string;

    @Column()
    client_civil_status: string;

    @Column()
    client_social_class: string;

    @Column()
    client_diff_abled_type: string;

    @Column()
    client_district: string;

    @Column()
    client_status: string;

    @Column()
    client_dateCreated: Date;

    @Column()
    client_house: string;

    @Column()
    client_msme_class: string;

    @Column()
    client_landline_number: string;

    @Column()
    client_fax_number: string;

    @Column()
    client_mobile_number: string;

    @Column()
    client_email_address: string;

    @Column()
    client_social_media: string;

    @Column()
    client_social_media_account: string;

    @Column()
    client_website: string;

    @Column()
    client_e_commerce: string;

    @Column()
    client_specific_msme_program: string;

    @Column()
    client_categ_entrep: string;

    @Column()
    client_createdby: string;

    @Column()
    client_fullname: string;

    @ManyToOne(() => Barangay, { eager: true })
    @JoinColumn({ name: "client_barangay_id" })
    client_barangay: Barangay;

    @ManyToOne(() => City, { eager: true })
    @JoinColumn({ name: "client_cityMunicipality_id" })
    client_cityMunicipality: City;

    @ManyToOne(() => Province, { eager: true })
    @JoinColumn({ name: "client_province_id" })
    client_province: Province;

    @ManyToOne(() => Region, { eager: true })
    @JoinColumn({ name: "client_region_id" })
    client_region: Region;

    @Column()
    client_zip_code: string;

    @Column()
    client_old_id_num: string;

    @Column()
    client_e_com_account: string;

    @Column()
    client_no_mname: string;

    @Column()
    client_dti_konek_id: string;

    @Column()
    client_philsys: string;

    @Column()
    client_lvlone_type: string;

    @Column()
    client_has_ecommerce: number;

    @Column()
    client_is_indigeneous: number;

    @Column()
    client_is_senior: number;

    @Column()
    client_designation: string;

    @Column()
    client_date_updated: Date;

    @Column()
    digitization: string;

    @OneToMany(() => FinancialStruc, (fin) => fin.client, {
        eager: true,
    })
    financial_struc: FinancialStruc[];

    @OneToOne(() => BusinessRegistrationsCertification, (brc) => brc.client, {
        eager: true,
    })
    client_business_registrations_certification: BusinessRegistrationsCertification[];

    @OneToMany(() => BusinessOwnerProfile, (bop) => bop.client, {
        eager: true,
    })
    client_business_owner_profile: BusinessOwnerProfile[];

    @OneToMany(() => BusinessContactInfo, (contact) => contact.client, {
        eager: true,
    })
    client_business_contact_information: BusinessContactInfo[];

    @OneToOne(() => BusinessProfile, (profile) => profile.client, {
        eager: true,
    })
    client_business_profile: BusinessProfile;

    @OneToOne(() => ClientBusinessMarketAccess, (cbm) => cbm.client, {
        eager: true,
    })
    client_business_market_access: ClientBusinessMarketAccess;

    @OneToOne(() => ClientEmploymentStatistics, (ces) => ces.client, {
        eager: true,
    })
    client_employment_statistics: ClientEmploymentStatistics;

    @OneToOne(() => ClientCategoryOfPotential, (ccp) => ccp.client, {
        eager: true,
    })
    client_category_of_potential: ClientCategoryOfPotential;

    @OneToMany(() => ClientMsmeHistory, (cmm) => cmm.client)
    client_client_msme_history: ClientMsmeHistory[];
}

/**
 * Table: client_client
Columns:
id bigint(20) AI PK 
client_id_no varchar(100) 
client_fname varchar(200) 
client_mname varchar(200) 
client_lname varchar(200) 
client_suffix varchar(10) 
client_position varchar(20) 
client_birthday date 
client_age int(11) 
client_sex varchar(20) 
client_civil_status varchar(20) 
client_social_class varchar(25) 
client_diff_abled_type varchar(60) 
client_district varchar(25) 
client_status varchar(100) 
client_dateCreated datetime(6) 
client_house varchar(150) 
client_msme_class varchar(200) 
client_landline_number varchar(30) 
client_fax_number varchar(40) 
client_mobile_number varchar(50) 
client_email_address varchar(100) 
client_social_media varchar(50) 
client_social_media_account varchar(20) 
client_website varchar(50) 
client_e_commerce varchar(30) 
client_specific_msme_program varchar(200) 
client_categ_entrep varchar(100) 
client_createdby varchar(40) 
client_fullname varchar(250) 
client_barangay_id bigint(20) 
client_cityMunicipality_id bigint(20) 
client_province_id bigint(20) 
client_region_id bigint(20) 
client_zip_code varchar(6) 
client_old_id_num varchar(100) 
client_e_com_account varchar(100) 
client_no_mname varchar(230) 
client_dti_konek_id varchar(40) 
client_philsys varchar(40) 
client_lvlone_type varchar(40) 
client_has_ecommerce tinyint(1) 
client_is_indigeneous tinyint(1) 
client_is_senior tinyint(1) 
client_designation varchar(20) 
client_date_updated datetime(6) 
digitization varchar(90)
 */
