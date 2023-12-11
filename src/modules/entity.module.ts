import { SchemaFactory } from "@nestjs/mongoose";
import { Account, AccountSchema } from "src/entities/account.entity";
import { Authentication, AuthenticationSchema } from "src/entities/authentication.entity";
import { StatesCommodities, StatesCommoditiesSchema } from "src/entities/states_commodities.entity";

export const EntityModule : {name : string, schema : SchemaFactory}[] = [
    {name : StatesCommodities.name, schema : StatesCommoditiesSchema},
    {name : Account.name, schema : AccountSchema},
    {name : Authentication.name, schema : AuthenticationSchema}
]