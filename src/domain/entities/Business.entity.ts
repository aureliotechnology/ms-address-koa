import { Field } from "@infraestructure/config/decorator/decorator"

export default class BusinessAdrress {
    @Field("string")
    street: string
    @Field("string")
    streetLine2: string | null
    @Field("string")
    number: string
    @Field("string")
    city: string
    @Field("string")
    state: string
    @Field("string")
    country: string
    @Field("string")
    postalCode: string
    @Field("string")
    complement: string | null
    @Field("string")
    cnpj: string
    @Field("string")
    contact: string
}