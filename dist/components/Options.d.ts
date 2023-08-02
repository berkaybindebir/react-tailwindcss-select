import React from "react";
import { Option, Options as ListOption } from "./type";
interface OptionsProps {
    list: ListOption;
    noOptionsMessage: string;
    text: string;
    isMultiple: boolean;
    value: Option | Option[] | null;
    primaryColor: string;
}
declare const Options: React.FC<OptionsProps>;
export default Options;
