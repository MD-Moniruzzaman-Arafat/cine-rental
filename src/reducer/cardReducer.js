

const initialStage = {
    cartData:[],
}

const cardReducer = (state, action) =>{
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cartData: [...state.cartData, action.payload]
            }
            break;
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartData: state.cartData.filter(item=> item.id !== action.payload.id)
            }
            break;
        default:
            return state
    }
}

export {initialStage,cardReducer}