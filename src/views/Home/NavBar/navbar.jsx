import React,{Component} from "react";
import './navbar.less'
class NavBar extends Component{
    render(){
        return (
            <div className="navbarBox">
               
                <div className="swichLanguage">
                    英文
                </div>
                <div className="navBarOrder">
                    我的FBWC门票
                </div>
            </div>
        )
    }
}
export default NavBar;
