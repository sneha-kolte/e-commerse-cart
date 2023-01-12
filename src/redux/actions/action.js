export const AddToCart =(item) => {
    return {
         type: "ADD_TO_CART",
         payload: item
    }

}

export const DLT =(id) => {
    return {
         type: "REMOVE_CART",
         payload: id
    }

}

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}



