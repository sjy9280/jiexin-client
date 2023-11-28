import React from "react";
import {Route, Routes} from 'react-router-dom'
import Chat from "../../chat";
import Contacts from "../../contacts";

const Content = () => {
    return (
        <Routes>
            <Route path={'/chat'} element={<Chat/>}/>
            <Route path={'/contacts'} element={<Contacts/>}/>
        </Routes>
    )
};

export default Content