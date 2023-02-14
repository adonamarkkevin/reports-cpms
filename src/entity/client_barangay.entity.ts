import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { City } from "./client_city.entity";

@Entity({ name: "client_barangay" })
export class Barangay extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brgy_code: string;

    @Column()
    brgy_name: string;

    @ManyToOne(() => City)
    @JoinColumn({ name: "city_id" })
    city: City;
}
