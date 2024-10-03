import { RatingModel } from "./rating.module";

export interface ProductModel {
    id?: number,
    title?: string,
    description?: string,
    category?: string,
    image?: string,
    price?: number,
    rating?: RatingModel

}