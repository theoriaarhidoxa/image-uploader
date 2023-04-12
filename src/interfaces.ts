import {ActionTypes} from "./consts";

export interface ImagesState {
    loading: boolean;
    emptyList: boolean;
    images: string[];
}

interface SetEmptyListAction {
    type: ActionTypes.SET_EMPTY_LIST;
    payload: boolean;
}

interface SetLoadingAction {
    type: ActionTypes.SET_LOADING;
    payload: boolean;
}

interface FetchImagesAction {
    type: ActionTypes.FETCH_IMAGES;
    payload: string[];
}

interface RemoveImageAction {
    type: ActionTypes.REMOVE_SINGLE_IMAGE;
    payload: string;
}

export type ImageAction = SetLoadingAction | SetEmptyListAction | FetchImagesAction | RemoveImageAction;

export interface IStarter extends File {
    src: string;
    timeStamp: number;
    order: number;
    id: number;
    uploadProgress: number;
}
