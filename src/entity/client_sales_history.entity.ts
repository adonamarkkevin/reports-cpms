import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { FinancialStruc } from "./client_business_financial_struc";

@Entity({ name: "client_sales_history" })
export class SalesHistory extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: string;

    @Column()
    domestic_sales: string;

    @Column()
    export_sales: string;

    @ManyToOne(() => FinancialStruc)
    @JoinColumn({ name: "financial_struc_id" })
    financial_struc: FinancialStruc;

    @Column()
    date: Date;
}
