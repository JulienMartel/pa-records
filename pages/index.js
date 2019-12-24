import React from 'react'
import EmblaCarouselReact from 'embla-carousel-react'
import Card from '../components/card'

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
        <EmblaCarouselReact
          emblaRef={c => (this.embla = c)}
          options={{ loop: false }}
        >
          <div style={{ display: 'flex'}} className="main">
            <div className="slide" style={{ flex: '0 0 100%' }}>
              <div className="this caid">
                <Card
                  name="Caid Jones" 
                  isFirst={true} 
                  embla={this.embla}
                  twitter=""
                  soundcloud=""
                  youtube=""
                  instagram=""
                ></Card>
              </div>
            </div>
            <div className="slide" style={{ flex: '0 0 100%' }}>
              <div className="this josh">
                <Card
                  name="Josue Davis" 
                  embla={this.embla}
                  twitter=""
                  soundcloud=""
                  youtube=""
                  instagram=""
                ></Card>
              </div>
            </div>
            <div className="slide" style={{ flex: '0 0 100%' }}>
              <div className="this dion">
                <Card
                  name="Sunday Knight" 
                  isLast={true} 
                  embla={this.embla}
                  twitter=""
                  soundcloud=""
                  youtube=""
                  instagram=""
                ></Card>
              </div>
            </div>
          </div>
        </EmblaCarouselReact>

        <div className="title">
          Pay Attention
        </div>

        <style jsx global>{`
        @import url('');
        @font-face {
            font-family:"Montserrat Alternates";
            src: url("/font/MontserratAlternates-Medium.ttf")
        }
      
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
          background-size: 47%;
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
          background-size 47%;
          background-image: url("/dion3.jpg")
        }
        .caid {
          background-image: url("/cayden.JPG");
        }

        .title {
          top: 20px;
          left 20px;
          position: absolute;
          color: white;
          font-size: 1.5vh;
          background-color: black;
          padding: 5px;
          font-weight:700;

        }
        `}</style>
      </>
    )
  }
}


export default Home
