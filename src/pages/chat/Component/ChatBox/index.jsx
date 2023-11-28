import React from "react";
import './index.less'
import {FolderOutlined, PhoneOutlined, ScissorOutlined, SmileOutlined, VideoCameraOutlined} from "@ant-design/icons";

const ChatBox = () => {
    return <div className={'chat-box'}>
        <div className={'box-header'}>
            赵丽颖
        </div>
        <div className={'box-content'}>

        </div>
        <div className={'box-input'}>
            <div className={'input-tools'}>
                <div className={'tool-left'}>
                    <SmileOutlined style={{fontSize: 20,marginRight:'15px',color:'#757575'}}/>
                    <FolderOutlined style={{fontSize: 20,marginRight:'15px',color:'#757575'}}/>
                    <ScissorOutlined rotate={270} style={{fontSize: 20,color:'#757575'}}/>
                </div>
                <div className={'tool-right'}>
                    <PhoneOutlined style={{transform: 'rotateY(180deg)', fontSize: 20,marginRight:'15px',color:'#757575'}}/>
                    <VideoCameraOutlined style={{fontSize: 20,color:'#757575'}}/>
                </div>
            </div>
        </div>
    </div>
}

export default ChatBox