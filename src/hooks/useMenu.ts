import { useState, useMemo } from "react";
import { menuItems } from "../data/db";
import type { MenuItem, OrderItem } from "../types/Index";

export const useOrder = () => {
    const [data] = useState<MenuItem[]>(menuItems);
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTipe] = useState(0);

    function addItem(item: MenuItem) {
        const itembuscado = order.find((orderItem) => orderItem.id === item.id);
        if (itembuscado) {
            const updatedOrder = order.map((orderItem) =>
                orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
            );
            setOrder(updatedOrder);
        } else {
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        }
    }

    function deleteItem(item: MenuItem) {
        const updatedOrder = order.filter((orderItem) => orderItem.id !== item.id);
        setOrder(updatedOrder);
    }

    function saveOrder() {
        setOrder([]);
    }

    return { data, order, addItem, deleteItem, tip, setTipe, saveOrder };
};
