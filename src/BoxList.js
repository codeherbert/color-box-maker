import React, { Component} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = { boxes:[] };
        this.create = this.create.bind(this);
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box 
            height={box.height} 
            width={box.width} 
            color={box.color}
            key={box.id}
            id={box.id}
            removeBox={() => this.remove(box.id)} />
        ));
        return (
            <div className="BoxList">
                <h1 className="BoxList-title"><span>C</span><span>O</span><span>L</span><span>O</span><span>R</span> Box Maker</h1>
                <NewBoxForm createBox={this.create}/>
                <div className="BoxList-box-wrapper">
                    { boxes }
                </div>
            </div>
        )
    }
}

export default BoxList;