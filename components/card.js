import React from 'react'
import Nav from '../components/nav'

class Card extends React.Component {
  render() {
    const { 
      isFirst,
      isLast,
      embla,
      name,
      twitter,
      instagram,
      youtube,
      soundcloud,
      spotify,
      bandcamp,
    } = this.props
    return (
      <div className="box">
        <Nav isFirst={isFirst} isLast={isLast} embla={embla}></Nav>
        <h3 className="name">{name}</h3>
        {twitter && <a className="twitter" href={twitter}><img src="/twitter.svg" style={{width: "30px",}}></img></a>}
        {instagram && <a className="instagram" href={instagram}><img src="/instagram.svg" style={{width: "30px",}}></img></a>}
        {youtube && <a className="youtube" href={youtube}><img src="/youtube.svg" style={{width: "30px",}}></img></a>}
        {soundcloud && <a className="soundcloud" href={soundcloud}><img src="/soundcloud.svg" style={{width: "30px",}}></img></a>}
        {spotify && <a className="spotify" href={spotify}><img src="/spotify.svg" style={{width: "30px",}}></img></a>}
        {bandcamp && <a className="bandcamp" href={bandcamp}><img src="/bandcamp.svg" style={{width: "30px",}}></img></a>}
        
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
            min-height: 55vh;
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