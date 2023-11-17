import { SchemaFactory } from "@nestjs/mongoose";
import { StatesCommodities, StatesCommoditiesSchema } from "src/entities/states_commodities.entity";

export const EntityModule : {name : string, schema : SchemaFactory}[] = [
    {name : StatesCommodities.name, schema : StatesCommoditiesSchema}
]