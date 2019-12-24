import React from 'react'
import EmblaCarouselReact from 'embla-carousel-react'
import Head from 'next/head'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    this.embla.on('select', () => {
      console.log(
        `Current index is ${this.embla.selectedScrollSnap()}`,
      )
    })
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    
    return (
      <>
        <Head>
          <style>@import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700&display=swap');</style> 
        </Head>
        <EmblaCarouselReact
          emblaRef={c => (this.embla = c)}
          options={{ loop: false }}
        >
          <div style={{ display: 'flex'}} className="main">
            <div className="slide" style={{ flex: '0 0 100%' }}>
              <div className="this" style={{}}>
                <div className="box">
                  <button className="next" onClick={() => this.embla.scrollNext()}>
                    <img src="/right.svg" style={{width: "40px"}}></img>
                  </button>
                  <h3 className="name">Caid Jones</h3>
                  <a><img src="/twitter.svg" style={{width: "30px",}}>
                  
                  </img></a>
                  <a><img src="/instagram.svg" style={{width: "30px",}}>
                  
                  </img></a>
                  <a><img src="/youtube.svg" style={{width: "30px",}}>
                  
                  </img></a>
                  <a><img src="/soundcloud.svg" style={{width: "30px",}}>
                  
                  </img></a>
                </div>
              </div>
            </div>
            <div className="slide" style={{ flex: '0 0 100%' }}>
              <div className="this josh" style={{}}>
              <div className="box">
                  <button className="back" onClick={() => this.embla.scrollPrev()}>
                    <img src = "/left.svg" style={{width: "40px"}}></img>
                  </button>
                  <button className="next" onClick={() => this.embla.scrollNext()}>
                    <img src="/right.svg" style={{width: "40px"}}></img>
                  </button>
                  <h3 className="name">Josue Davis</h3>
                  <a><img src="/twitter.svg" style={{width: "30px",}}>
                  
                  </img></a>
                  <a><img src="/instagram.svg" style={{width: "30px",}}>
                  
                  </img></a>
                  <a><img src="/youtube.svg" style={{width: "30px",}}>
                  
                  </img></a>
                  <a><img src="/soundcloud.svg" style={{width: "30px",}}>
                  
                  </img></a>
                </div>
              </div>
            </div>
            <div className="slide" style={{ flex: '0 0 100%' }}>
              <div className="this dion" style={{}}>
              <div className="box">
                  <button className="back" onClick={() => this.embla.scrollPrev()}>
                    <img src = "/left.svg" style={{width: "40px"}}></img>
                  </button>
                  <h3 className="name">Sunday Knight</h3>
                  <a><img src="/twitter.svg" style={{width: "30px",}}>
                  
                  </img></a>
                  <a><img src="/instagram.svg" style={{width: "30px",}}>
                  
                  </img></a>
                  <a><img src="/youtube.svg" style={{width: "30px",}}>
                  
                  </img></a>
                  <a><img src="/soundcloud.svg" style={{width: "30px",}}>
                  
                  </img></a>
                </div>
              </div>
            </div>
          </div>
        </EmblaCarouselReact>

        <div className="title">
          Pay Attention
        </div>

        <style jsx global>{`
        * {
          font-family: 'Montserrat Alternates', sans-serif;
        }
        html {
          background-color: black;
        }
        body {
          margin: 0;
          padding 0;
          postion: relative;
        }

        a {
          text-decoration: none;
          color: white;
        }

        .slide{
          display: flex;
          justify-content: center;
          align-items: center;
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


        .this {
          color: white;
          background-image: url("/cayden.JPG");
          background-size: 50%;
          background-position: center;
          width: ${this.state.width}px;
          height: ${this.state.height}px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5em;
        }
        .josh {
          background-image: url("/josh.JPG")
        }
        .dion {
          background-size 33.333%;
          background-image: url("/dion.PNG")
        }

        .name {
          font-weight:700;
          font-size: 1em;
        }

        
        .my-element-that-i-want-to-be-100vh {
          height: 100vh; /* Fallback for browsers that do not support Custom Properties */
          height: calc(var(--vh, 1vh) * 100);
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

        .title {
          top: 20px;
          left 20px;
          position: absolute;
          color: white;
          font-size: 2vh;
          background-color: black;
          padding: 5px;
        }
        `}</style>
      </>
    )
  }
}


export default Home
