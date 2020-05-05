import React, { Component} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = { boxes:[{ height: "7", width: "7", color: "teal" }] };
        this.create = this.create.bind(this);
    }

    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box height={box.height} width={box.width} color={box.color} />
        ));
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm createBox={this.create}/>
                { boxes }
            </div>
        )
    }
}

export default BoxList;