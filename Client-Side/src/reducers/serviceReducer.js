
export const INITIAL_STATE = {
    title:"",
    short_title:"",
    desc: "",
    short_desc: "",
    cover_image: "",
    service_category_id: "",
    price: 0,
    sales: 0,
    delivery_time: "",
    revision_time: "",
    images: [],
    features: [],
}

export  const serviceReducer = (state =  initialState, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case "ADD_IMAGES":
            return {
                ...state,
                cover_image: action.payload.cover_image,
                images: action.payload.images,
            };
        case "ADD_FEATURES":
            return {
                ...state,
                features: [...state.features, action.payload]
            };
        case "REMOVE_FEATURES":
            return {
                ...state,
                features:   state.features.filter(feature => feature !== action.payload),
            };
        default:
            return state;
    }
}