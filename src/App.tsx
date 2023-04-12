import './App.scss';
import React from "react";
import {Routes, Route, HashRouter} from "react-router-dom";
import UploadMode from "./pages/UploadMode";
import ViewMode from "./pages/ViewMode";

const App = () => {

    // todo: после билда удалить baseUrl перед static/media/cloud-icon_on (например, n.p+)

    return (
        <div className="wrapper">
            <p>Вот <a href="https://www.youtube.com/watch?v=5vx2PVClSVU" target='_blank' rel='noreferrer'>источник
                вдохновения</a> для этого&nbsp;проекта.<br/> Кто-то просто обязан
                его реализовать на том или ином фреймворке, отмечает автор канала в конце ролика.<br/><br/>
            </p>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<UploadMode/>} />
                    <Route path='/list' element={<ViewMode/>} />
                </Routes>
            </HashRouter>
        </div>
    );
};

export default App;
