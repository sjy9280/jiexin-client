import React from "react";
import ChatList from "./Component/ChatList";
import ChatBox from "./Component/ChatBox";
import './index.less'

const Chat = () => {

    return (
        <div className={'chat-bg'}>
            <ChatList/>
            <ChatBox/>
        </div>
    )
}


export default Chat