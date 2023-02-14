import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { City } from "./client_city.entity";
import { Region } from "./client_region.entity";

@Entity({ name: "client_province" })
export class Province extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    prov_code: string;

    @Column()
    prov_name: string;

    @ManyToOne(() => Region, (reg) => reg.province)
    @JoinColumn({ name: "region_id" })
    region: Region;

    @OneToMany(() => City, (city) => city.province)
    city: City[];
}
