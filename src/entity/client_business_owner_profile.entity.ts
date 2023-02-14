import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";
import { Barangay } from "./client_barangay.entity";
import { City } from "./client_city.entity";
import { Province } from "./client_province.entity";
import { Region } from "./client_region.entity";

@Entity({ name: "client_business_owner_profile" })
export class BusinessOwnerProfile extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    busown_mname: string;

    @ManyToOne(() => Barangay)
    @JoinColumn({ name: "busown_barangay_id" })
    busown_barangay: Barangay;

    @Column()
    busown_birthday: Date;

    @Column()
    busown_citizenship: string;

    @ManyToOne(() => City)
    @JoinColumn({ name: "busown_cityMunicipality_id" })
    busown_cityMunicipality: City;

    @Column()
    busown_civil_status: string;

    @Column()
    busown_diff_abled_type: string;

    @Column()
    busown_district: string;

    @Column()
    busown_fname: string;

    @Column()
    busown_house: string;

    @Column()
    busown_lname: string;

    @Column()
    inc_position: string;

    @ManyToOne(() => Province)
    @JoinColumn({ name: "busown_province_id" })
    busown_province: Province;

    @ManyToOne(() => Region)
    @JoinColumn({ name: "busown_region_id" })
    busown_region: Region;

    @Column()
    busown_sex: string;

    @Column()
    busown_social_class: string;

    @Column()
    busown_zip_code: string;

    @ManyToOne(() => Client)
    @JoinColumn({ name: "entry_ref_num_id" })
    client: Client;

    @Column()
    busown_suffix: string;

    @Column()
    busown_same_as_client_info: boolean;

    @Column()
    busown_is_indigeneous: boolean;

    @Column()
    busown_is_senior: boolean;

    @Column()
    busown_date_udpated: Date;

    @Column()
    marker: string;
}
