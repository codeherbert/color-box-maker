import React, { Component} from 'react';
import Box from './Box';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = { boxes:[{ height: 25, width: 10, color: "blue" }] }
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box height={box.height} width={box.width} color={box.color} />
        ));
        return (
            <div>
                <h1>Color Box Maker</h1>
                { boxes }
            </div>
        )
    }
}

export default BoxList;