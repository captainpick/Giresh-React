import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import "../../static/back.css"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
  render() {
    return (
        <div className="color-nav">
			<Menu mode="horizontal">



        <Menu.Item key="about" >
          <a href="">ورود</a>


        </Menu.Item>
                <Menu.Item key="signup"  >
                    <a href="">ثبت نام</a>
                </Menu.Item>


                <Menu.Item key="home" >
                    <a href="">خانه</a>
                </Menu.Item>

      </Menu>

        </div>

    );
  }
}

export default RightMenu;
