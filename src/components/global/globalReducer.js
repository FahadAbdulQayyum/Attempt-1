const globalReducer = (state, action) => {
    switch (action.type) {
        case 'LoadProducts': {
            return {
                ...state,
                products: [...action.payload]
            }
        }
        case 'AddProduct':
            console.log('add Product reducer called', action.payload)
            const qnt = state.products.map(v => {
                // state.products = state.products.forEach(v => {
                // state.products = state.products.map(v => {
                if (v._id === action.payload._id) {
                    console.log('---_id')
                    return {
                        ...v, quantity: v.quantity + 1
                    }
                }
                console.log('---v')
                return { ...v }
                // return v
            })
            console.log('qnt', qnt)
            // console.log('state.products', state.products)
            return {
                ...state,
                // products: !state.products.length > 0 ? [...state.products, action.payload] : [...qnt],

                // products: !(state.products.length > 0) ? [...state.products, action.payload] : qnt,

                // products: !(state.products.length > 0) ? [...state.products, action.payload] : [...qnt],
                products: !(state.products.length > 0) ? [...state.products, action.payload] : qnt,

                // products: !(state.products.length > 0) ? [...state.products, action.payload] : [...state.products.map(v => {
                //     if (v._id === action.payload._id) {
                //         console.log('---_id')
                //         return {
                //             ...v, quantity: v.quantity + 1
                //         }
                //     }
                //     console.log('---v')
                //     return { ...v }
                //     // return v
                // })],

                // products: [...state.products, qnt],
                // products: [...state.products, ...qnt],
                // products: [...state.products],
                // products: [qnt],
                // products: qnt,
                // products: [...qnt],
                // ls: localStorage.setItem('pd', JSON.stringify([...state.products, action.payload]))
                ls: sessionStorage.setItem('pd', JSON.stringify([...state.products, action.payload]))
            }
        case 'DeleteProduct':
            console.log('DeleteProduct function called')
            return {
                ...state,
                products: state.products.filter(v => v.id !== action.payload),
                // ls: localStorage.setItem('pd', JSON.stringify([...state.products.filter(v => v.id !== action.payload)]))
                ls: sessionStorage.setItem('pd', JSON.stringify([...state.products.filter(v => v.id !== action.payload)]))
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
                // ls: localStorage.setItem('pd', JSON.stringify([...productUpdated]))
                ls: sessionStorage.setItem('pd', JSON.stringify([...productUpdated]))
            }
        default: return { ...state }
    }
}

export default globalReducer;