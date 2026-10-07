import { Dispatch } from "react";
import type { MenuItem } from "../types/Index";
import { OrderActions } from "../reducers/order-reducer";

type MenuItemProps = {
    menuItem: MenuItem;
    dispatch: Dispatch<OrderActions>;
};

const MenuItem = ({ menuItem, dispatch }: MenuItemProps) => {
    return (
        <button
            className="p-3 border-blue-300 hover:bg-blue-300 justify-between border-2 flex w-full rounded"
            onClick={() => dispatch({ type: "add-item", payload: { item: menuItem } })}
        >
            <p>{menuItem.name}</p>
            <p className="font-black">${menuItem.price}</p>
        </button>
    );
};

export default MenuItem;
