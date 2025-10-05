import React from 'react';

import { Flex, Layout, Typography } from 'antd';

const {Content} = Layout;
const {Title} = Typography;

import { Row } from 'antd';
import { Col } from 'antd';

import HeaderHome from 'components/molecules/Header/HeaderHome';
import MainBanner from 'components/organisms/MainBanner/MainBanner';
import ItemCard from 'components/molecules/Card/Card';
import FooterMain from 'components/molecules/Footer/FooterMain';

const HomeLayout = () => {
    return (
        <Flex>
            <Layout style={{background : '#f0f2f5'}}> 
                
                <HeaderHome/>

                <MainBanner/>

                <Content style={{padding : "60px 80px"}}> 
                <Title level={3} style={{marginBottom: '40px'}} className='titulo-featured'>Featured Courses</Title>
                        <div className='contenedor-cards'> 
                            <ItemCard 
                                title={"Introduction to Python Programming"} 
                                description={"Learn the basics of Python and build your first program."} 
                                image={"assets/imagenes/bg_card_1.png"} />
                            <ItemCard
                                title={'UI/UX Design Fundamentals'}
                                description={'Master the principles of user interface and user experience design.'}
                                image={'assets/imagenes/bg_card_2.png'}
                            />
                            <ItemCard
                                title={'Enterpreneurship 101: Launching Your Startup'}
                                description={'Develop a business plan and learn how to secure funding.'}
                                image={'assets/imagenes/bg_card_3.png'}
                            />
                        </div>
                </Content>
                <FooterMain></FooterMain>
            </Layout>
        </Flex>
    )
}

export default HomeLayout