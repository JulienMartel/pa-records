import React from 'react'
import Nav from '../components/nav'

class Card extends React.Component {



    render() {
        console.log(this.props.isFirst, this.props.isLast)
        return (
            <div className="box">
                <Nav isFirst={this.props.isFirst} isLast={this.props.isLast} embla={this.props.embla}></Nav>
                <h3 className="name">{this.props.name}</h3>
                <a href={this.props.twitter}><img src="/twitter.svg" style={{width: "30px",}}></img></a>
                <a href={this.props.instagram}><img src="/instagram.svg" style={{width: "30px",}}></img></a>
                <a href={this.props.youtube}><img src="/youtube.svg" style={{width: "30px",}}></img></a>
                <a href={this.props.soundcloud}><img src="/soundcloud.svg" style={{width: "30px",}}></img></a>
                <style global jsx>{`
                    .back, button {
                        position: absolute;
                        background-color: #9f9f9f00;
                        z-index: 10;
                        border: 0;
                        height: 100px;
                        top: calc(50% - 50px);
                        left: 5px;
                        color: white;
                    }
                    button.next{
                        right: 5px;
                        left: unset;
                    }

                    .name {
                        font-weight:400;
                        font-size: 1em;
                    }

                    .box {
                        width: 60vw;
                        height: 55vh;
                        background-color: black;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                        flex-direction: column;
                        position: relative;
                      }
              
                      .box a {
                        margin: 20px;
                      }
                `}</style>
            </div>
        )
    }
}

export default Card