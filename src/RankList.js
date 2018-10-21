import React from 'react';
import { Card, Carousel, List, Badge } from 'antd';

class RankList extends React.Component {
    renderItem = (item) => (
        <div style={{display: 'flex', minWidth: '100px'}}>
            <span style={{width: '20px'}}>
                <Badge count={item.rank}>
                    <a href="#" className="head-example" />
                </Badge>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* {item.rank} */}
            </span>
            <span style={{flex:1}}>{item.name}</span>
            <span style={{flex:1}}>{item.value}</span>
        </div>
    )
    render() {
        return (
            <Card title={this.props.title} style={{...this.props.style}}>
                <List renderItem={this.renderItem} dataSource={this.props.dataSource} />
            </Card>
        );
    }
}
export default RankList;