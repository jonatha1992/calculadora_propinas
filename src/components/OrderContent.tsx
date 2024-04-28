import type { OrderItem } from "../types/Index";
import { formatPrice } from "../helpers/Index";
type OrderItemProps = {
    order: OrderItem[];
    deleteItem: (item: OrderItem) => void;
};

export default function OrderContents({ order, deleteItem }: OrderItemProps) {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Consumos</h2>
            <div className="mt-8 space-y-3">
                {order.map((orderItem) => (
                    <div
                        key={orderItem.id}
                        className="flex justify-between border-t border-gray-300  p-2 last-of-type:border-b items-center"
                    >
                        <div>
                            <p>
                                {orderItem.name} -{formatPrice(orderItem.price)}
                            </p>
                            <p className="font-bold">
                                Cantidad {orderItem.quantity} - {formatPrice(orderItem.price * orderItem.quantity)}
                            </p>
                        </div>
                        <button
                            className="bg-red-500 text-white font-bold w-8 h-8 rounded-full"
                            onClick={() => deleteItem(orderItem)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
