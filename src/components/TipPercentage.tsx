const tipOptions = [
    {
        id: "tip-10",
        value: 0.1,
        label: "10%",
    },
    {
        id: "tip-20",
        value: 0.2,
        label: "20%",
    },
    {
        id: "tip-50",
        value: 0.5,
        label: "50%",
    },
];

import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";
type TipPercentageProps = {
    dispatch: Dispatch<OrderActions>;
};

export default function TipPercentage({ dispatch }: TipPercentageProps) {
    return (
        <div>
            <h3 className="font-bold text-2xl my-2">Propina</h3>
            <form className="flex flex-col space-y-3">
                {tipOptions.map((option) => (
                    <div key={option.id} className="flex   items-center gap-2">
                        <label htmlFor={option.id} className="font-bold">
                            {option.label}
                        </label>
                        <input
                            type="radio"
                            name="tip"
                            id={option.id}
                            value={option.value}
                            onChange={(e) => dispatch({ type: "add-tip", payload: { value: Number(e.target.value) } })}
                        />
                    </div>
                ))}
            </form>
        </div>
    );
}
