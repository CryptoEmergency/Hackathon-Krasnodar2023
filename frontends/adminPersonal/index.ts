import { Micro } from "cemjs-all"
import { loader } from "./loader"
import { display } from "./display"

export const micro: Micro = {
    name: "home",
    loader,
    display
}