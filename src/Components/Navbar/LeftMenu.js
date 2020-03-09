import React, { Component,useState } from 'react';
import { Menu, Icon,Button , Affix} from 'antd';
import "../../static/back.css"
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
    count=1;
    constructor() {
        super();
            this.count=1;    }

            add=()=>{
            this.count=this.count+1;
            console.log(this.count)
            }
  render() {

    return (
        <div >

			<Menu mode="horizontal" className="color-nav" >
                <SubMenu title={<span>امکانات</span>} >
                    <MenuItemGroup title="">
                        <Menu.Item key="setting:1">داشبورد</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="">
                        <Menu.Item key="setting:3">تماس با ما</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>





                <Menu.Item key={"buy"} style={{marginBottom:3}}>
                    <Button onClick={this.add} >
                        <ShoppingCartOutlined />{this.count}
                    </Button>
                </Menu.Item>
                 <a><img style={{marginLeft:550 , height:65 , width:65 }} src={"http://uupload.ir/files/grrr_giresh.png"}/></a>
      </Menu>


        </div>
    );
  }
}

export default LeftMenu;
