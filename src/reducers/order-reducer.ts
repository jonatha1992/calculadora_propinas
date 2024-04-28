import { MenuItem, OrderItem } from "../types/Index";

export type OrderActions =
    | {
          type: "add-item";
          payload: { item: MenuItem };
      }
    | { type: "remover-item"; payload: { id: MenuItem["id"] } }
    | { type: "place-order" }
    | { type: "add-tip"; payload: { value: number } };

export type orderState = {
    order: OrderItem[];
    tip: number;
};

export const inicialState: orderState = {
    order: [],
    tip: 0,
};

export const orderReducer = (state: orderState = inicialState, action: OrderActions) => {
    switch (action.type) {
        case "add-item":
            const itembuscado = state.order.find((orderItem) => orderItem.id === action.payload.item.id);
            let order: OrderItem[] = [];
            if (itembuscado) {
                order = state.order.map((orderItem) =>
                    orderItem.id === action.payload.item.id
                        ? { ...orderItem, quantity: orderItem.quantity + 1 }
                        : orderItem
                );
            } else {
                const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
                order = [...state.order, newItem];
            }
            return {
                ...state,
                order: order,
            };
        case "remover-item":
            const updatedOrder = state.order.filter((orderItem) => orderItem.id !== action.payload.id);
            state.order = updatedOrder;
            return { ...state, order: updatedOrder };
        case "add-tip":
            const tip = action.payload.value;
            return { ...state, tip: tip };
        case "place-order":
            return {
                ...state,
                order: [],
                tip: 0,
            };
        default:
    }

    return state;
};
