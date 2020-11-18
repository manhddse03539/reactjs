import React from 'react';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed : true
        };
        this.showDetail = this.showDetail.bind(this);
    }
    showDetail() {
        this.setState({
            isCollapsed : !this.state.isCollapsed
        });
    }
    render() {
        const {heading, children} = this.props;
        const {isCollapsed} = this.state;
        return (
            <div className="Accordion">
                <div onClick={this.showDetail} className="Heading">
                    <h2>{heading}</h2>
                </div>
                {!isCollapsed && <div className="Content">{children}</div>}
            </div>
        );
    }
}

export default Accordion;