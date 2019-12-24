import React from 'react'
import EmblaCarouselReact from 'embla-carousel-react'
import Head from 'next/head'

class EmblaCarouselComponent extends React.Component {
  componentDidMount() {
    this.embla.on('select', () => {
      console.log(
        `Current index is ${this.embla.selectedScrollSnap()}`,
      )
    })
  }
 
  render() {
    return (
      <>
        <Head> 
        </Head>
        <EmblaCarouselReact
          emblaRef={c => (this.embla = c)}
          options={{ loop: false }}
        >
          <div style={{ display: 'flex'}} className="cont">
            <div className="slide" style={{ flex: '0 0 100%' }}>
              <div className="this">
                <a href="https://google.ca">C A I D J O N E S</a>
              </div>
            </div>
            <div className="slide" style={{ flex: '0 0 100%' }}>Slide 2</div>
            <div className="slide" style={{ flex: '0 0 100%' }}>Slide 3</div>
          </div>
        </EmblaCarouselReact>
        <button onClick={() => this.embla.scrollPrev()}>Prev</button>
        <button onClick={() => this.embla.scrollNext()}>Next</button>

        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
        * {
          font-family: 'Montserrat', sans-serif;
        }
        html {
          background-color: #363636;
        }
        body {
          margin: 0;
          padding 0;
        }

        .cont {
          
        }

        .slide{
          display: flex;
          justify-content: center;
          align-items: center;
         }

         .this {
           border: 10px solid #CCA43B;
           border-radius: 40px;
           background-color: #242F40;
           width: 90%;
           height: 80vh;
           padding: 20px;
           margin: 10px 0;
           display: flex;
           justify-content: center;
           align-items: center;
           font-size: 2em;
           font-weight:600;
         }
        `}</style>
      </>
    )
  }
}


export default EmblaCarouselComponent
