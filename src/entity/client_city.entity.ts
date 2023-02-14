import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Barangay } from "./client_barangay.entity";
import { Province } from "./client_province.entity";

@Entity({ name: "client_city" })
export class City extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city_code: string;

    @Column()
    city_name: string;

    @Column()
    city_type: string;

    @ManyToOne(() => Province, (prov) => prov.city)
    @JoinColumn({ name: "province_id" })
    province: Province;

    @OneToMany(() => Barangay, (brgy) => brgy.city)
    barangay: Barangay[];

    
}
