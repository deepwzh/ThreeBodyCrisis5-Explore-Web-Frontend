import React from 'react';
import { List, Card, Modal } from 'antd';
const ReactMarkdown = require('react-markdown')
class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            select_item: null,
            visible: false
        })
    }
    renderItem = (item) => {
        return (
        <div>
            {/* <span></span> */}
            <span><a href="javascript:;" onClick={() => this.setState({select_item: item})}>{item.title}</a></span>
            {/* <span></span> */}
        </div>
        );
    }
    render() {
        console.log(this.state);
        return (
            <Card title="文章列表">
                <div>
                    <List renderItem={this.renderItem} dataSource={this.props.dataSource}/>               
                </div>
                <Modal visible={this.state.select_item?true:false}

                width="600px"
                onCancel={() => this.setState({select_item: null})}
                >
                    <ReactMarkdown source={this.state.select_item?this.state.select_item.content: null} escapeHtml={true}/>
                </Modal>
            </Card>
        );
    }
}
export default ArticleList;