import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { FinancialStruc } from "./client_business_financial_struc";

@Entity({ name: "client_capital_structure" })
export class CapitalStructure extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: string;

    @Column()
    authorized_cap: string;

    @Column()
    subscribed_cap: string;

    @Column()
    paidup_cap: string;

    @Column()
    date: Date;

    @ManyToOne(() => FinancialStruc)
    @JoinColumn({ name: "financial_struc_id" })
    financial_struc: FinancialStruc;
}
