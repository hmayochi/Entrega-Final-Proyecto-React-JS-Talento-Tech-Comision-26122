import { createContext , useContext , useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";

// Creación del contexto para el carrito de compras

const CartContext = createContext();

// Custom hook para acceder al contexto del carrito de compras

export const useCart = () => {

    const context = useContext(CartContext);

    if (!context) {

        throw new Error("useCart debe ser utilizado dentro de un CartProvider");
    };

    return context;
};

// Proveedor del contexto del carrito de compras
export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    const isInCart = (item) => {

// Verificar si el elemento ya está en el carrito utilizando el método some() Retorna un booleano indicando si el elemento está presente en el carrito o no
        const inCart = cart.some((element) => element.id === item.id);

        return inCart ;

    };

// Función para agregar un elemento al carrito de compras

    // const addToCart = (item) => {};


// Función para quitar un elemento del carrito de compras

    const removeItem = (id) => {

        const updatedCart = cart.filter(element => element.id !== id);
        setCart(updatedCart);
        alert("Elemento eliminado");
    }; 

// Función Limpiar el carrito de compras

    const clearCart = () => {

        setCart([]);
    };


/////   fin de la función clearCart

//// 
const addItems = (item) => {
    if (isInCart(item)) {
        alert("El elemento ya está en el carrito 😯");
        return;
    }
    setCart([...cart, item]);
    alert("Elemento agregado al carrito 😁");
    console.log(cart);
    console.log(cart.length);

};

//// total de items en el carrito de compras (sin quantity)

const getTotalItems = () => {

    return cart.length
};

//// total del precio de los items en el carrito de compras

    const getCartTotal = () => {


        return cart.reduce((acc, element) => acc + element.price, 0);
    };

/// CheckOut del carrito de compras

    const checkout = () => {

        alert("Gracias por su compra 😁");
        clearCart();
        navigate("/");


    };



    const values={cart,addItems, setCart, isInCart, removeItem, clearCart, getTotalItems, getCartTotal, checkout};
    return <CartContext.Provider value={values}> {children} </CartContext.Provider> ;

}
