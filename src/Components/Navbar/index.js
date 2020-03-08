import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import '../../static/back.css'
class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <nav className="menuBar  "  >
        	<div className="logo">
        		<a href="">Giresh</a>
        	</div>
        	<div className="menuCon">

				    <div className="rightMenu ">
	        			<RightMenu />
				    </div>
				<div className="leftMenu" >
					<LeftMenu />
				</div>
				    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
		          <span className="barsBtn"></span>
		        </Button>
				    <Drawer
		          title="Basic Drawer"
		          placement="left"
		          closable={false}
		          onClose={this.onClose}
		          visible={this.state.visible}
		        >


		        </Drawer>

        	</div>
        </nav>
    );
  }
}

export default Navbar;
