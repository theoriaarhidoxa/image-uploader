import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Loader from "../helpers/Loader";
import {useDispatch} from "react-redux";
import {fetchData, removeItem} from "../action-creators/images";
import {useAppSelector} from "../hooks/useAppSelector";
import {ActionTypes} from "../consts";

const ViewMode = () => {
    const dispatch = useDispatch();
    const {loading, images, emptyList} = useAppSelector(state => state.image);

    useEffect(() => {
        dispatch(fetchData());

        return () => {
            dispatch({type: ActionTypes.SET_EMPTY_LIST, payload: false});
            dispatch({type: ActionTypes.SET_LOADING, payload: false});
        }
    }, []);


    const handleFileRemove = (url: string, e: React.MouseEvent<HTMLButtonElement>) => {
        // https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
        // https://stackoverflow.com/questions/42066421/property-value-does-not-exist-on-type-eventtarget
        const target = e.target as HTMLButtonElement;
        target.disabled = true;
        if (images.length < 2) {
            setTimeout(() => {
                dispatch({type: ActionTypes.SET_EMPTY_LIST, payload: true});
            }, 1000);
        }
        dispatch(removeItem(url));
    };

    if (loading) {
        return <Loader />
    }

    return (
        <>
            {emptyList && <h2 style={{padding: '70px 0 30px 0'}}>Все ранее загруженные файлы удалены. Иным способом увидеть эту надпись не получится.</h2>}
            <div className='wrapper__filesList'>
                <table>
                    <tbody>
                    {images.map((src: string) => {
                        return (
                            <tr key={src} className='wrapper__filesList-item'>
                                <td><img src={src} alt='' /></td>
                                <td><a href={src} target='_blank' rel='noreferrer'>{src}</a></td>
                                <td><button className='btn' onClick={e => handleFileRemove(src, e)}>Удалить</button></td>
                            </tr>
                        )
                    })}
                    </tbody>

                </table>
            </div>

            <span className='fixedBottomRight'><Link to='/'>Вернуться к загрузчику</Link></span>
        </>
    );
};

export default ViewMode;
