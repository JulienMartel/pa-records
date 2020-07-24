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
      beatstars,
      apple,
    } = this.props
    return (
      <div className="box">
        <Nav isFirst={isFirst} isLast={isLast} embla={embla}></Nav>
        <h3 className="name">{name}</h3>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", width: "150px", alignItems: "center", justifyContent: "center"}}>
          {instagram && <a className="icon instagram" href={instagram}><img src="/instagram.svg" style={{width: "30px",}}></img></a>}
          {twitter && <a className="icon twitter" href={twitter}><img src="/twitter.svg" style={{width: "30px",}}></img></a>}
          {youtube && <a className="icon youtube" href={youtube}><img src="/youtube.svg" style={{width: "30px",}}></img></a>}
          {soundcloud && <a className="icon soundcloud" href={soundcloud}><img src="/soundcloud.svg" style={{width: "30px",}}></img></a>}
          {spotify && <a className="icon spotify" href={spotify}><img src="/spotify.svg" style={{width: "30px",}}></img></a>}
          {bandcamp && <a className="icon bandcamp" href={bandcamp}><img src="/bandcamp.svg" style={{width: "30px",}}></img></a>}
          {beatstars && <a className="icon beatstars" href={beatstars}><img src="/beatstars.svg" style={{width: "28px",}}></img></a>}
          {apple && <a className="icon apple" href={apple}><img src="/apple.svg" style={{width: "30px",}}></img></a>}

        </div>
        <style global jsx>{`
          .icon {
            width: "50%"
          }

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