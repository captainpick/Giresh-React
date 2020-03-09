import React ,{Component} from "react";
import {Card,Row,Col,Button,notification,Menu}  from "antd";
import "../../static/resp.css"
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
            <div>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Card title" bordered={true} hoverable
                                  style={{ width: 240,  marginTop:20}}
                                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={true} hoverable
                                  style={{ width: 240 ,  marginTop:20}}
                                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={true} hoverable
                                  style={{ width: 240,  marginTop:20 }}
                                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                    </Row>
                </div>


                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Card title" bordered={true} hoverable
                                  style={{ width: 240,  marginTop:20}}
                                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={true} hoverable
                                  style={{ width: 240 ,  marginTop:20}}
                                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={true} hoverable
                                  style={{ width: 240,  marginTop:20 }}
                                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                    </Row>
                </div>

            </div>

        );
    }
}


export default CardMain;