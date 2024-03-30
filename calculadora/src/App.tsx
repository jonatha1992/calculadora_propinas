import MenuItem from "./components/MenuItem.";
import OrderContents from "./components/OrderContent";
import OrderContentTotal from "./components/OrderTotal";
import TipPercentage from "./components/TipPercentage";
import { useOrder } from "./hooks/useMenu";

function App() {
    const { data, order, addItem, deleteItem, tip, setTipe, saveOrder } = useOrder();
    return (
        <>
            <header>
                <h1 className="p-3 text-center text-4xl font-bold bg-blue-500 uppercase text-white ">
                    Calculadora de propinas y consumo
                </h1>
            </header>
            <main className="max-w-7xl mx-auto py-8 grid md:grid-cols-2">
                <div className="p-2 flex flex-col  ">
                    <h2 className="text-3xl font-bold text-center">Menu</h2>
                    <div className="mt-8 space-y-3">
                        {data.map((menuItem) => (
                            <MenuItem key={menuItem.id} menuItem={menuItem} addItem={addItem} />
                        ))}
                    </div>
                </div>
                <div className="p-2 border-2 border-slate-300">
                    <OrderContents order={order} deleteItem={deleteItem} />
                    <TipPercentage setTipe={setTipe} />
                    <OrderContentTotal order={order} tip={tip} saveOrder={saveOrder} />
                </div>
            </main>
        </>
    );
}

export default App;
