

const INITIAL_STATE = {
    carts: []
}

export const cartReducer =(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case "ADD_TO_CART": 
        const ItemIndex = state.carts.findIndex((item)=>item.id === action.payload.id);
        if(ItemIndex >= 0){
            state.carts[ItemIndex].qnty +=1
        }
        else {
            const temp = {...action.payload,qnty:1}
             return{
                ...state,
               carts: [...state.carts, temp]
            }
        }

           

        case "REMOVE_CART":
            const data =state.carts.filter((e)=>e.id != action.payload)

            return {
                ...state, 
                carts:data
            }

            case "RMV_ONE":
                const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
       
                if(state.carts[IteamIndex_dec].qnty >= 1){
                    const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                    console.log([...state.carts,dltiteams]);
    
                    return {
                        ...state,
                        carts:[...state.carts]
                    }
                }else if(state.carts[IteamIndex_dec].qnty === 1 ){
                    const data = state.carts.filter((el)=>el.id !== action.payload);
    
                    return {
                        ...state,
                        carts:data
                    }
                }
         default :
            return state;
    }
}


export default cartReducer