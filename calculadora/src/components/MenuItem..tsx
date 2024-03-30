import type { MenuItem } from "../types/Index";

type MenuItemProps = {
    menuItem: MenuItem;
};

const MenuItem = ({ menuItem }: MenuItemProps) => {
    return (
        <div>
            <h1>{menuItem.name}</h1>
            <h1>{menuItem.price}</h1>
        </div>
    );
};

export default MenuItem;
