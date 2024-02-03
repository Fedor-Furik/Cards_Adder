import React from "react";

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name,years,status} = this.props.content;
        return (
            <>
            <h2>{name}</h2>
            <h2>Age:{years}</h2>
            <h2>Status:{status}</h2>
            </>
        )
    }
}
export default Item