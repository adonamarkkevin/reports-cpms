import * as dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Client } from "./entity/client.entity";
import { AssetSize } from "./entity/client_asset.entity";
import { Barangay } from "./entity/client_barangay.entity";
import { BusinessRegistrationsCertification } from "./entity/client_business_certifacation.entity";
import { BusinessContactInfo } from "./entity/client_business_contact_information.entity";
import { FinancialStruc } from "./entity/client_business_financial_struc";
import { BusinessOwnerProfile } from "./entity/client_business_owner_profile.entity";
import { BusinessProfile } from "./entity/client_business_profile.entity";
import { CapitalStructure } from "./entity/client_capital_structure.entity";
import { City } from "./entity/client_city.entity";
import { Province } from "./entity/client_province.entity";
import { Region } from "./entity/client_region.entity";
import { SalesHistory } from "./entity/client_sales_history.entity";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [
        Region,
        Province,
        City,
        Barangay,
        Client,
        FinancialStruc,
        AssetSize,
        BusinessRegistrationsCertification,
        CapitalStructure,
        BusinessOwnerProfile,
        BusinessContactInfo,
        BusinessProfile,
        SalesHistory,
    ],
    migrations: [],
    subscribers: [],
});
