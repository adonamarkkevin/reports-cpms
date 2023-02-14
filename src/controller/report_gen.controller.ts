import { Request, Response } from "express";
import { Between } from "typeorm";
import { Client } from "../entity/client.entity";

export const generateReport = async (req: Request, res: Response) => {
    try {
        const {
            date_from,
            date_to,
            region,
            province,
            city,
            district,
            status_msme_client,
            status_msme_client_date_from,
            status_msme_client_date_to,
            category_potential_entrepreneur,
            social_classification,
            sex,
            civil_status,
            age_from,
            age_to,
            include_senior_citizen,
            include_indigenous_people,
            include_email_address,
            include_mobile_number,
            include_ecommerce_platform,
            msme_program_availed,
            msme_program_availed_date_from,
            msme_program_availed_date_to,
            edt,
            edt_date_from,
            edt_date_to,
            assistance_type,
            sub_type,
            subtype_nc_region,
            msme_classification_asset_size,
            priority_industry,
            ice_industry,
            form_of_organization,
            business_registration_by_agency,
            edt_level,
            psic_first_level,
            expiration_date_from,
            expiration_date_to,
            level_digitalization,
            primary_business_activity,
            with_bmbe_registration,
            asset_size_capitalization,
            market_access,
            employment_statistics,
        } = req.body;
        const [clients, count] = await Client.findAndCount({
            where: {
                client_dateCreated: Between(
                    new Date(date_from),
                    new Date(date_to),
                ),
                client_province: {
                    prov_name: province,
                },
                client_region: {
                    reg_name: region,
                },
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            status: `Server Error`,
            message: `Please contact administrator`,
            error: error,
        });
    }
};
