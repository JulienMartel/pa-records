import React from 'react'

class Nav extends React.Component {
    render() {
        if (this.props.isFirst == undefined && this.props.isLast == undefined) {
            return (
                <>
                    <button className="back" onClick={() => this.props.embla.scrollPrev()}>
                        <img src = "/left.svg" style={{width: "20px"}}></img>
                    </button>
                    <button className="next" onClick={() => this.props.embla.scrollNext()}>
                        <img src = "/right.svg" style={{width: "20px"}}></img>
                    </button>
                </>
            )
        }
        if (this.props.isFirst) {
            return (
                <button className="next" onClick={() => this.props.embla.scrollNext()}>
                    <img src = "/right.svg" style={{width: "20px"}}></img>
                </button>
            )
        }  
        if (this.props.isLast) {
            return (
                <button className="back" onClick={() => this.props.embla.scrollPrev()}>
                    <img src = "/left.svg" style={{width: "20px"}}></img>
                </button>
            )
        }  

    }
}

export default Nav