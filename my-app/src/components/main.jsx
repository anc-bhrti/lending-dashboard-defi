import Sidebar from './sidebar.jsx';
import Content from './content.jsx';
export default function main(){
    return(
        <div className="container">
            <Sidebar className="sidebar"/>
            <Content className="content"/>
        </div>
    )
}