import type { MenuItem } from "../types/Index";

type MenuItemProps = {
    menuItem: MenuItem;
    addItem: (item: MenuItem) => void;
};

const MenuItem = ({ menuItem, addItem }: MenuItemProps) => {
    return (
        <button
            className="p-3 border-blue-300 hover:bg-blue-300 justify-between border-2 flex w-full rounded"
            onClick={() => addItem(menuItem)}
        >
            <p>{menuItem.name}</p>
            <p className="font-black">${menuItem.price}</p>
        </button>
    );
};

export default MenuItem;
