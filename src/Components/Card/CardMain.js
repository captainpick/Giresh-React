import React ,{Component} from "react";
import {Card,Button,notification}  from "antd";
const { Meta } = Card;

class CardMain extends Component{


    Notif = () => {
        notification.open({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    render() {
        return (

            <Card
                hoverable
                style={{ width: 240 , marginTop:50,marginLeft:50 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Test Test Test" /*description="www.instagram.com"*/  />
                <Button type={"danger"} danger style={{marginTop:20}} onClick={this.Notif}>Default</Button>
            </Card>
        );
    }
}


export default CardMain;