import React from 'react'

import {Layout} from 'antd';

const { Header, Content, Footer } = Layout;

import HeaderHome from 'componentes/moleculas/HeaderHome';




export default function HomeLayout () {
    return (
        <Layout>
            <Header style={{
                backgroundColor: 'cyan',
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

                </Content>
            </Layout>
            <Footer>

            </Footer>
        </Layout>
    )

}