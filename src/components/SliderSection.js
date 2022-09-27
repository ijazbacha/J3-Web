/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import image1 from '../assets/SliderContents/1.jpg'
import image2 from '../assets/SliderContents/2.jpg'
import image3 from '../assets/SliderContents/3.jpg'
import image4 from '../assets/SliderContents/4.jpg'
import { motion } from "framer-motion"

const SliderSection = () => {
  return (
    <motion.section initial={{y: -600}} animate={{ y: 0 }} transition={{ type:'spring', stiffness:120}} sx={styles.banner} id="home" >
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src={image1} alt='...' />
            <MDBCarouselCaption>
              {/* <h3>One-click installation and easy registration</h3> */}
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement src={image2} alt='...' />
            <MDBCarouselCaption>
              {/* <h3>Get a paying partner while you are driving your car on a long journey.</h3> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement src={image3} alt='...' />
            <MDBCarouselCaption>
              {/* <h3>An easy, fast, convenient and smart way to get around with others going your way.</h3> */}
              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement src={image4} alt='...' />
            <MDBCarouselCaption>
              {/* <h3>Third slide label</h3> */}
              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
    </motion.section>
  );
};

const styles = {
  banner: {
    pt: ["100px", "100px", "100px", "100px", null, null, "90px", "50px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      // backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      // backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};

export default SliderSection;
