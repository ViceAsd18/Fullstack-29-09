
import {Typography} from "antd";

const {Title, Paragraph} = Typography;

const TextBanner = () => {
    return (
        <>
            <Title level={1} style={{fontWeight : "bold", color : "white", fontSize : "65px", marginBottom : "15px"}}>
                Unlock Your Potential with <br /> Expert-Led Courses
            </Title>
            <Paragraph style={{fontSize : "18px", maxWidth : "600px", margin : "0 auto", "color" : "rgba(255, 255, 255, 0.77)", marginBottom : "30px"}}>
                Explore a vast library of courses taught by industry leaders and passionates educators.
                Learn at your own pace, on your own schedule.
            </Paragraph>
        </>
    )

}

export default TextBanner;