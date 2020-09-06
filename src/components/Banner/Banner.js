import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import firstBannerImg from "../../images/words_for_gossip3.jpg"
import secondBannerImg from "../../images/Guest-Post.jpg"
import thirdBannerImg from "../../images/typesofblogposts.png"

const Banner = () => {
    const imgStyle = { height : "600px"}
    return (
     
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        style={imgStyle}
                        src={firstBannerImg}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        style={imgStyle}
                        src={secondBannerImg}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        style={imgStyle}
                        src={thirdBannerImg}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
       
          );
        }
        
export default Banner;