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
        <Menu.Item key="home" >
          <a href="">خانه</a>
        </Menu.Item>
        <Menu.Item key="about" >
          <a href="">درباره</a>
        </Menu.Item>

                <SubMenu title={<span>زیر منو</span>} >
                    <MenuItemGroup title="تست">
                        <Menu.Item key="setting:1">Test1</Menu.Item>
                        <Menu.Item key="setting:2">Test2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="تست">
                        <Menu.Item key="setting:3">Test3</Menu.Item>
                        <Menu.Item key="setting:4">Test4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>

      </Menu>

        </div>

    );
  }
}

export default RightMenu;
