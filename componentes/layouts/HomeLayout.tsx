import React from 'react'

import {Layout} from 'antd';

const { Header, Content, Footer } = Layout;

import HeaderHome from 'componentes/moleculas/HeaderHome';
import MainBanner from 'componentes/organismo/MainBanner';
import InfoCard from 'componentes/moleculas/InfoCard';
import Titulo from 'componentes/atomos/Titulo';
import FooterPag from 'componentes/moleculas/FooterPag';


export default function HomeLayout () {
    return (
        <Layout style={{
            background : '#F3F4F6'
            }}>
            <Header style={{
                backgroundColor : '#F2F2F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                height: '64px',
            }}> 
                <HeaderHome/>
            </Header>
            <Layout>
                <Content>
                    <main className='contenido-home'>
                        <MainBanner/>
                        <div className='contenedor-cards'>
                            <div className='cards-titulo'>
                                <Titulo texto='Featured Courses'></Titulo>
                            </div>
                            <div className='cards' id='cursos'>
                                <InfoCard Titulo='Introduction to Python Programming' Texto='Learn the basics of Python and build your first program.' SrcImg='assets/bg_card_1.png'></InfoCard>
                                <InfoCard Titulo='UI/UX Design Fundamentals' Texto='Master the principles of user interface and user experience design.' SrcImg='assets/bg_card_2.png'></InfoCard>
                                <InfoCard Titulo='Entrepreneurship 101: Launching Your Startup' Texto='Develop a business plan and learn how to secure funding.' SrcImg='assets/bg_card_3.png'></InfoCard>
                            </div>
                        </div>
                    </main>
       
                </Content>
            </Layout>
            <Footer>
                <FooterPag titulo='Ready to Start Learning?' parrafo='Join thousands of learners and take next step in your career or personal grown today.' texBoton='Explore All Courses'></FooterPag>
            </Footer>
        </Layout>
    )

}

