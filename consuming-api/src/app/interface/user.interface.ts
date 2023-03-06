import { Coordinate } from "./coordinate.inerface";

export interface User {
    uuid: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    gender: string;
    address: string;
    dateOfBirth: string;
    phone: string;
    imageUrl: string;
    coordinate: Coordinate;
}