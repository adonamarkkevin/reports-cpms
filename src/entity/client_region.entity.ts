import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Province } from "./client_province.entity";

@Entity({ name: "client_region" })
export class Region extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reg_name: string;

    @Column()
    reg_code: string;

    @Column()
    reg_id: string;

    @OneToMany(() => Province, (prov) => prov.region)
    province: Province[];
}
