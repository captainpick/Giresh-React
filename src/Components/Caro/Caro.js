import React,{Component} from "react";
import {Carousel} from "antd";
import '../../static/Caro.css'


class MainCaro extends Component{

   abol=(a,b,c)=>{
        console.log(a, b, c);
    };
    render() {
        return (
            <Carousel autoplay className={"ant-carousel "} style={{marginTop:20 }}>
                <div>
                    <img src={"https://images.wallpaperscraft.com/image/attraction_wheel_carousel_114851_2560x1080.jpg"} />
                </div>
                <div>
                    <img src={"https://images.wallpaperscraft.com/image/attraction_wheel_carousel_114851_2560x1080.jpg"}/>
                </div>
                <div>
                    <img src={"https://images.wallpaperscraft.com/image/attraction_wheel_carousel_114851_2560x1080.jpg"}/>

                </div>
                <div>
                    <img src={"https://images.wallpaperscraft.com/image/attraction_wheel_carousel_114851_2560x1080.jpg"}/>
                </div>
            </Carousel>


        );
    }
}

export default MainCaro;