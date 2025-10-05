import { Layout, Typography } from 'antd';
import TypeButton from 'components/atoms/MainBanner/TypeButton';

const { Footer } = Layout;
const { Title, Paragraph } = Typography;

const MainFooter = () => {
    return (
        <Footer style={{textAlign : 'center', background : '#f0f2f5'}}>
            <div style={{textAlign : 'center', padding : "80px 20px"}}> 
                <Title level={2} style={{fontWeight : 700}}>Ready to Start Learning?</Title>
                <Paragraph style={{maxWidth : "600px", margin : "0 auto", marginBottom : 20}}>
                    Join thousands of learners and take the next step in your career or personal growth today.
                </Paragraph>
                <TypeButton text='Explore All Courses' blue={true}></TypeButton>
            </div>
            <span>
                EduStream ©2025 Created with Ant Design
            </span>
        </Footer>
    )
}

export default MainFooter;