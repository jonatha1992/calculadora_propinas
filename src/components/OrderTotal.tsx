import { formatPrice } from "../helpers/Index";
import { OrderActions } from "../reducers/order-reducer";
import { OrderItem } from "../types/Index";
import { Dispatch, useMemo } from "react";

type OrderTotalProps = {
    order: OrderItem[];
    tip: number;
    dispatch: Dispatch<OrderActions>;
};

export default function OrderTotal({ order, tip, dispatch }: OrderTotalProps) {
    const subtotal = useMemo(() => {
        return order.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [order]);

    const totalTip = useMemo(() => {
        return subtotal * tip;
    }, [subtotal, tip]);

    const total = useMemo(() => {
        return subtotal + totalTip;
    }, [subtotal, tip]);

    return (
        <>
            <div className=" space-y-3 mt-5 ">
                <h2 className="text-2xl font-bold ">Totales y propinas</h2>
                <p>
                    Subtotal: <span className="font-bold">{formatPrice(subtotal)}</span>
                </p>
                <p>
                    Propina <span className="font-bold">{formatPrice(totalTip)}</span>
                </p>

                <p>
                    Total <span className="font-bold">{formatPrice(total)} </span>
                </p>
            </div>

            <button
                className="p-3  mt-5 bg-black text-white text-center rounded disabled:opacity-5 w-full"
                disabled={total === 0}
                onClick={() => dispatch({ type: "place-order" })}
            >
                Guardar orden
            </button>
        </>
    );
}
