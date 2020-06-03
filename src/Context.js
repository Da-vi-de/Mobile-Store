import React, {useState} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [cartItems, setCartItems] = useState([])

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    return(
        <Context.Provider value= {{
            cartItems, 
            addToCart, 
            removeFromCart, 
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}