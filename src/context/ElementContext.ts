import { createContext } from "react";
import ISectionProps from "../Props/ISectionProps";

const ElementContext = createContext<ISectionProps>({
    block: "",
    children: null
})

export { ElementContext }