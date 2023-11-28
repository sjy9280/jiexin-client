import React from "react";
import './index.less'
import {Input} from "antd";
import {PlusOutlined, SearchOutlined} from "@ant-design/icons";

const ChatList = () => {
    const chatList = [{
        index: 0,
        avatar: 'https://ww1.sinaimg.cn/mw690/006a7Fqsly1hk9hqkacdnj31o01o04qp.jpg',
        username: '赵丽颖',
        lastMsg: '[表情]',
        lastTime: '2023/11/27'
    }, {
        index: 1,
        avatar: 'https://img0.baidu.com/it/u=1205035572,3190111398&fm=253&fmt=auto&app=138&f=JPEG?w=607&h=405',
        username: '永瘦宫',
        lastMsg: 'DerbySoft~左满霞:看下到底谁的问题',
        lastTime: '14:16'
    }, {
        index: 2,
        avatar: 'https://ww1.sinaimg.cn/mw690/006a7Fqsly1hk9hqkacdnj31o01o04qp.jpg',
        username: '医院常驻嘉宾记得每天心平气和',
        lastMsg: '张艺玮:然后我就听她说她在哈佛大学做交换生的时候，曾经在某个诺贝尔奖获得者的团队里，xxxxx',
        lastTime: '14:34'
    }]
    return (
        <div className={'chat-list-block'}>
            <div className={'search-box'}>
                <Input placeholder="搜索" prefix={<SearchOutlined/>}/>
                <div className={'add-chat-room'}>
                    <PlusOutlined style={{color:'#757575'}}/>
                </div>
            </div>
            <div className={'chat-list'}>
                {
                    chatList.map(item => {
                        return (
                            <div className={'chat-item'}>
                                <img src={item.avatar}/>
                                <div className={'item-content'}>
                                    <div className={'item-left'}>
                                        <div className={'item-username'}>{item.username}</div>
                                        <div className={'item-lastMsg'}>{item.lastMsg}</div>
                                    </div>
                                    <div className={'item-right'}>
                                        {
                                            item.lastTime
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ChatList