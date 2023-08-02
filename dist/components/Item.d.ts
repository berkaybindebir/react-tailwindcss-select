import React from "react";
import { Option } from "./type";
interface ItemProps {
    item: Option;
    primaryColor: string;
}
declare const Item: React.FC<ItemProps>;
export default Item;
