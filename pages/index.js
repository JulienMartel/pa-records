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
                <h3>Caid Jones</h3>
              </div>
            </div>
            <div className="slide" style={{ flex: '0 0 100%' }}>
            <div className="this josh" style={{}}>
                <h3>Josue Davis</h3>
              </div>
            </div>
            <div className="slide" style={{ flex: '0 0 100%' }}>
              <div className="this dion" style={{}}>
                <h3>Sunday Knight</h3>
              </div>
            </div>
          </div>
        </EmblaCarouselReact>
        <button className="back" onClick={() => this.embla.scrollPrev()}>
          <img src = "/left.svg" style={{width: "25px"}}></img>
        </button>
        <button className="next" onClick={() => this.embla.scrollNext()}>
          <img src="/right.svg" style={{width: "25px"}}></img>
        </button>

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

        .this {
          color: white;
          background-image: url("/cayden.JPG");
          background-size: 100%;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2em;
          font-weight:700;
        }

        .josh {
          background-image: url(/josh.JPG)
        }
        .dion {
          background-size: 33.333%;
          background-image: url(/dion.PNG)
        }

        .my-element-that-i-want-to-be-100vh {
          height: 100vh; /* Fallback for browsers that do not support Custom Properties */
          height: calc(var(--vh, 1vh) * 100);
        }

        .back, button {
          position: absolute;
          background-color: #84848461;
          z-index: 10;
          border: 0;
          height: 300px;
          top: calc(50% - 150px);
          left: 0px;
          color: white;
        }
        button.next{
          right: 0px;
          left: unset;
        }
        `}</style>
      </>
    )
  }
}


export default Home
