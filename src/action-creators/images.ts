import {AppDispatch} from "../store/store";
import {ActionTypes} from "../consts";
import {storage} from "../firebase";
import { ref, getDownloadURL, listAll, deleteObject } from "firebase/storage";

export const fetchData = () => {
    return async (dispatch: AppDispatch) => {
        const listRef = ref(storage, '/upload');
        dispatch({type: ActionTypes.SET_EMPTY_LIST, payload: false});

        const downloadURLs: Promise<string>[] = [];

        listAll(listRef)
            .then(async (res) => {
                res.items.forEach(async itemRef => downloadURLs.push(getDownloadURL(itemRef)));
                const downloadURLsResult = await Promise.all(downloadURLs);
                dispatch({type: ActionTypes.FETCH_IMAGES, payload: downloadURLsResult});
            }).catch()
            .finally(() => dispatch({type: ActionTypes.SET_LOADING, payload: false}));
    }
};

export const removeItem = (url: string) => {
    return async (dispatch: AppDispatch) => {
        const fileRef = ref(storage, url);
        deleteObject(fileRef).then(() => dispatch({type: ActionTypes.REMOVE_SINGLE_IMAGE, payload: url}));
    };
};
