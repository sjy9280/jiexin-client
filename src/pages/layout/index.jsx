import SideBar from "./SideBar";
import Content from "./Content";
import './index.less'

const Layout = (props) => {
    return <div className={'jx-layout'}>
        <SideBar/>
        <Content/>
    </div>
}

export default Layout