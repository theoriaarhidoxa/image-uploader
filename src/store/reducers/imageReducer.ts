import {ImageAction, ImagesState} from "../../interfaces";
import {ActionTypes} from "../../consts";

const initialState: ImagesState = {
    loading: true,
    emptyList: false,
    images: []
};

export const imageReducer = (state = initialState, action: ImageAction) => {
    switch (action.type) {
        case ActionTypes.SET_EMPTY_LIST:
            return {...state, emptyList: action.payload, images: []};
        case ActionTypes.SET_LOADING:
            return {...state, loading: action.payload};
        case ActionTypes.FETCH_IMAGES:
            return {...state, images: action.payload};
        case ActionTypes.REMOVE_SINGLE_IMAGE:
            return {...state, images: state.images.filter(el => el !== action.payload)};
        default:
            return state;
    }
};
