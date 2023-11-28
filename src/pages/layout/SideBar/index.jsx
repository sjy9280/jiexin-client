/**
 * author: Joanna
 * email: sjy9280@163.com
 * date: 2023/11/27 18:05:54
 **/
import './index.less'
import {Image} from "antd";
import defaultImg from '@/assets/images/default-avatar.png'
import {MenuOutlined, MessageOutlined, TeamOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const SideBar = () => {

    const [selectItem, useSelectItem] = useState(1)
    const navigateTo = useNavigate()

    const selectMenuItem = (index, url) => {
        useSelectItem(index)
        navigateTo(url)
    }

    return (
        <div className={'jx-sidebar'}>
            <div className={'sidebar-avatar'}>
                <Image src={defaultImg}/>
            </div>
            <div className={'sidebar-menu'}>
                <div title={'聊天'} className={'menu-icon'} onClick={() => selectMenuItem(1, '/chat')}>
                    <MessageOutlined style={{fontSize: 24, color: selectItem === 1 ? '#57bd6a' : '#656768'}}/>
                </div>
                <div title={'联系人'} className={'menu-icon'} onClick={() => selectMenuItem(2, '/contacts')}>
                    <TeamOutlined style={{fontSize: 24, color: selectItem === 2 ? '#57bd6a' : '#656768'}}/>
                </div>
            </div>
            <div className={'sidebar-setting'}>
                <div title={'设置'} className={'menu-icon'}>
                    <MenuOutlined style={{fontSize: 24, color: '#656768'}}/>
                </div>
            </div>
        </div>
    )
}

export default SideBar