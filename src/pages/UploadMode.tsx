import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import Cloud from '../images/cloud-icon_on.svg';
import {storage} from "../firebase";
import {ref, uploadBytesResumable} from "firebase/storage";
import {IStarter} from "../interfaces";

const UploadMode = () => {

    const fileInput = useRef<HTMLInputElement>(null);
    const [previews, setPreviews] = useState<IStarter[]>([]);
    const [uploadStart, setUploadStart] = useState(false);

    const handleDialogOpening = () => fileInput.current?.click();

    const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPreviews([]);
        let {files} = e.target || [];
        // https://attacomsian.com/blog/javascript-iterate-filelist
        // https://stackoverflow.com/questions/25333488/why-isnt-the-filelist-object-an-array
        const filesArray = files ? Array.from(files) : [];

        const filesArrayReady = filesArray.map((el: File, i: number) => {
            const starter: IStarter = {} as IStarter;
            const obj = Object.assign(el, starter);
            obj.id = new Date().getTime() + i;
            obj.uploadProgress = 0;
            return obj;
        });

        setPreviews(filesArrayReady);

        filesArrayReady.forEach((el: File, i: number) => {
            const reader = new FileReader();

            reader.onload = async (e: ProgressEvent<FileReader>) => {
                if (e.target) {
                    const src = await e.target.result, timeStamp = await e.timeStamp;
                    setPreviews((previews: IStarter[]) => previews.map((el: IStarter, index: number) => {
                        if (i === index) {
                            const obj = Object.assign(el);
                            // [...spread] не работает для File, тот теряется
                            obj.src = src;
                            obj.timeStamp = timeStamp;
                            obj.order = i + 1;
                            return obj;
                        }
                        return el;
                    }));
                }

            };
            reader.readAsDataURL(el);
        });
    };

    const handleSelectionRemoval = (id: number) => {
        setPreviews(previews.filter((el: IStarter) => el.id !== id));
    };

    const handleDataSubmit = () => {
        setUploadStart(true);

        previews.forEach((file: IStarter) => {
            const fileRef = ref(storage, `/upload/${file.name}`);
            const task = uploadBytesResumable(fileRef, file);
            const len = previews.length;

            task.on('state_changed', snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                const foundEl = previews.find((el: IStarter) => el.size === snapshot.totalBytes);
                if (foundEl) {
                    foundEl.uploadProgress = parseInt(progress.toString());
                    setPreviews([...previews, foundEl].slice(0, len));
                }
            });
        });
    };

    const handleReset = () => {
        setPreviews([]);
        setUploadStart(false);
    };

    return (
        <>
            <input type='file' multiple ref={fileInput} onChange={handleFileSelection} accept='image/*'/>
            {previews.length === 0 && <h2><img src={Cloud} alt=''/>Начните добавлять изображения...</h2>}

            <div className='wrapper__buttons'>
                <input type='button' disabled={uploadStart} className='btn'
                       value={previews.length ? 'Повторить' : 'Начать'} onClick={handleDialogOpening}/>
                {previews.length > 0 &&
                <input type='button' disabled={uploadStart} onClick={handleDataSubmit} className='btn red'
                       value='Загрузить'/>}
                {uploadStart &&
                <input type='button' className='btn' value='Начать заново' onClick={handleReset}/>}
            </div>

            <div className='wrapper__previews'>
                {previews.sort((a, b) => a.order - b.order).map((el: IStarter) => {
                    return (
                        <div key={el.id} className='wrapper__previews-item'><img src={el.src} alt=''/>
                            {!uploadStart && <i onClick={() => handleSelectionRemoval(el.id)}/>}
                            <p className={uploadStart ? 'panel hiddenPanel' : 'panel'}>
                                <span>{el.name}</span><span>{`${(el.size / 1000).toFixed(1)} Kb`}</span>
                            </p>
                            {uploadStart && <p className='panel bluePanel'><span
                                style={el.uploadProgress === 100 ? {color: '#fff'} : undefined}>{el.uploadProgress}%</span><em
                                style={{'width': el.uploadProgress + '%'}}/></p>}
                        </div>
                    )
                })}
            </div>

            {uploadStart && <span className='fixedBottomRight'><Link to='/list'>Список загруженных файлов</Link></span>}
        </>
    );
};

export default UploadMode;
