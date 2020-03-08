import React, { Component,useState } from 'react';
import { Menu, Icon,Button , Affix} from 'antd';
import "../../static/back.css"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {

  render() {

    return (

			<Menu mode="horizontal" className="color-nav" >
      	<Menu.Item key="signin"  >
          <a href="" >ورود</a>

        </Menu.Item>

        <Menu.Item key="signup" >
          <a href="">ثبت نام</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
