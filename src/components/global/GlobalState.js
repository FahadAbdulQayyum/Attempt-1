import { useEffect, useReducer } from 'react'
import globalContext from "./globalContext";
import globalReducer from "./globalReducer";

const GlobalState = props => {

    const initialState = {
        products: [],
        update: null,
        updateValue: []
    }

    useEffect(() => {
        // const storedProducts = localStorage.getItem('pd');
        const storedProducts = sessionStorage.getItem('pd');
        if (storedProducts) {
            console.log('storedProducts', storedProducts)
            console.log('storedProducts', JSON.parse(storedProducts))
            dispatch({
                type: 'LoadProducts',
                payload: JSON.parse(storedProducts),
            });
        }
    }, []);

    const [state, dispatch] = useReducer(globalReducer, initialState)

    const addProduct = data => dispatch({
        type: 'AddProduct', payload: data
    })

    const deleteProduct = id => dispatch({
        type: 'DeleteProduct', payload: id
    })

    const updateProduct = id => dispatch({
        type: 'UpdateProduct', payload: id
    })

    const submitProduct = data => dispatch({
        type: 'UpdateValueProduct', payload: data
    })

    return <globalContext.Provider
        value={{
            products: state.products,
            updateValue: state.updateValue,
            update: state.update,
            addProduct: addProduct,
            deleteProduct: deleteProduct,
            updateProduct: updateProduct,
            submitProduct: submitProduct,
        }
        }
    >
        {props.children}
    </globalContext.Provider >
}

export default GlobalState