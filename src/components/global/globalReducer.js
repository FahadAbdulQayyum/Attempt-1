const globalReducer = (state, action) => {
    switch (action.type) {
        case 'LoadProducts': {
            return {
                ...state,
                products: [...action.payload]
            }
        }
        case 'AddProduct':
            console.log('add Product reducer called')
            return {
                ...state,
                products: [...state.products, action.payload],
                ls: localStorage.setItem('pd', JSON.stringify([...state.products, action.payload]))
            }
        case 'DeleteProduct':
            console.log('DeleteProduct function called')
            return {
                ...state,
                products: state.products.filter(v => v.id !== action.payload),
                ls: localStorage.setItem('pd', JSON.stringify([...state.products.filter(v => v.id !== action.payload)]))
            }
        case 'UpdateProduct':
            console.log('UpdateProduct function called')
            return {
                ...state,
                update: action.payload,
                updateValue: state.products.filter(v => v.id === action.payload),
            }
        case 'UpdateValueProduct':
            const filteredProducts = state.products.filter(v => v.id === state.update)
            const updateProduct = {
                ...filteredProducts[0], product: action.payload
            }
            const productUpdated = [...state.products.filter(v => v.id !== state.update), updateProduct]
            return {
                ...state,
                products: productUpdated,
                update: false,
                ls: localStorage.setItem('pd', JSON.stringify([...productUpdated]))
            }
        default: return { ...state }
    }
}

export default globalReducer;