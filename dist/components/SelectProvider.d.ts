import React from "react";
import { ClassNames, GroupOption, Option } from "./type";
interface Store {
    value: Option | Option[] | null;
    handleValueChange: (selected: Option) => void;
    formatGroupLabel: ((data: GroupOption) => JSX.Element) | null;
    formatOptionLabel: ((data: Option) => JSX.Element) | null;
    classNames?: ClassNames;
}
interface Props {
    value: Option | Option[] | null;
    handleValueChange: (selected: Option) => void;
    children: JSX.Element;
    otherData: {
        formatGroupLabel: ((data: GroupOption) => JSX.Element) | null;
        formatOptionLabel: ((data: Option) => JSX.Element) | null;
        classNames?: ClassNames;
    };
}
export declare const SelectContext: React.Context<Store>;
export declare const useSelectContext: () => Store;
declare const SelectProvider: React.FC<Props>;
export default SelectProvider;
