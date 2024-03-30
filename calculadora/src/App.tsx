import MenuItem from "./components/MenuItem.";
import { menuItems } from "./data/db";

function App() {
    return (
        <>
            <header>
                <h1 className="p-2 text-center text-2xl font-bold bg-blue-500 uppercase text-white ">
                    Calculadora de propinas{" "}
                </h1>
            </header>
            <div className="max-w-7xl mx-auto py-8 grid md:grid-cols-2">
                <div className="p-2 bg-green-300  ">
                    <h2>Menu</h2>
                    {menuItems.map((menuItem) => (
                        <MenuItem key={menuItem.id} menuItem={menuItem} />
                    ))}
                </div>
                <div className="p-2 bg-red-300">
                    <h1>Descuentos</h1>
                </div>
            </div>
        </>
    );
}

export default App;
