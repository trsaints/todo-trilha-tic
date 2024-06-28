import { createContext } from "react";
import ISectionProps from "../Props/ISectionProps";

const SectionContext = createContext<ISectionProps>({
    block: "",
    children: null
})

export { SectionContext }