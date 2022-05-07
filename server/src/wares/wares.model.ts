import { getModelForClass, prop } from "@typegoose/typegoose";

export class Wares {
    @prop()
    waresName: string
}

export const WaresModel = getModelForClass(Wares)