import React from 'react';
import { Carousel, List, Badge, Modal } from 'antd';
import './Main.css';
import RankList from './RankList';
import { Layout, Menu } from 'antd';
import ArticleList from './ArticleList';
import md from './gameplayer.md';
import page1 from './image/page1.jpg';
import page2 from './image/page2.jpg';
import Registration from './RegistrationForm';
const { Header, Content, Footer } = Layout;
function onChange(a, b, c) {
    console.log(a, b, c);
  }

const data = [
    {
        rank: 1,
        name: "张三",
        value: 999,
    },
    {
        rank: 1,
        name: "张三",
        value: 999,
    },
    {
        rank: 1,
        name: "张三",
        value: 999,
    },
    {
        rank: 1,
        name: "张三",
        value: 999,
    },
    {
        rank: 1,
        name: "张三",
        value: 999,
    },
    {
        rank: 1,
        name: "张三",
        value: 999,
    },

];

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exp_rank_data: [],
            lv_rank_data: [],
            lde_rank_data: [],
            hp_rank_data: [],
            article_data: [],
            registationFormVisible: false
        }
    }
    componentDidMount() {
        console.log("sdsd");
        console.log(md);
        fetch('http://127.0.0.1/api/exp_rank').then((data) => data.json())
        .then(data => {
            this.setState({
                exp_rank_data: data
            });
        });
        fetch('http://127.0.0.1/api/hp_rank').then((data) => data.json())
        .then(data => {
            this.setState({
                hp_rank_data: data
            });
        });
        fetch('http://127.0.0.1/api/lde_rank').then((data) => data.json())
        .then(data => {
            this.setState({
                lde_rank_data: data
            });
        });
        fetch('http://127.0.0.1/api/lv_rank').then((data) => data.json())
        .then(data => {
            this.setState({
                lv_rank_data: data
            });
        });
        fetch('http://127.0.0.1/api/article').then((data) => data.json())
        .then(data => {
            this.setState({
                article_data: data,
            });
        })
    }
    render() {
        return (
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><a href="#">首页</a></Menu.Item>
                    <Menu.Item key="2"><a href="#board">榜单</a></Menu.Item>
                    <Menu.Item key="3"><a href="#article">攻略</a></Menu.Item>
                    <Menu.Item key="4"><a href="#register" onClick={() => this.setState({
                        registationFormVisible: true
                    })}>注册</a></Menu.Item>
                </Menu>
                </Header>
                <Modal visible={this.state.registationFormVisible}
                    onCancel={() => this.setState({registationFormVisible: false})}
                >
                    <Registration
                        
                    />
                </Modal>
                <Content >
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <div style={{ background: '#fff', padding: 0, minHeight: 280 }}>
                    <Carousel afterChange={onChange} style={{background:'white'}}>
                        <div><img width="100%" height="100%" src={page1}/> </div>
                        <div><img width="100%" height="100%" src={page2}/> </div>
                        {/* <div><h3>3</h3></div>
                        <div><h3>4</h3></div> */}
                    </Carousel>
                    <div style={{display: 'flex', flexDirection:'row',flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <a name="board"></a>
                        <RankList style={{flex:1, minWidth: "200px"}} title="经验榜" dataSource={this.state.exp_rank_data} />
                        <RankList style={{flex:1, minWidth: "200px"}} title="生命榜" dataSource={this.state.hp_rank_data} />
                        <RankList style={{flex:1, minWidth: "200px"}} title="等级榜" dataSource={this.state.lv_rank_data} />
                        <RankList style={{flex:1, minWidth: "200px"}} title="优秀探险家" dataSource={this.state.lde_rank_data} />
                    </div>
                    <div>
                        <a name="article"></a>
                        <ArticleList dataSource={this.state.article_data} />
                    </div>
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                
                </Footer>
            </Layout>
            );
        }
}
export default Main;