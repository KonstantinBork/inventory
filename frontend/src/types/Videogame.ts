import { Platform, } from "./Platform"

export type Videogame = {
    name: string,
    url: string,
    image_url: string,
    description: string,
    platforms: Platform[]
}