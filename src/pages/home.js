import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import img from "../images/ss.jpg";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => {

  let app = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});
  
  useEffect(() => {
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 90,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])

  return (
    <>
    <main>
      <div className='container'>
        <div className='row center row-container'>
          <div className="hero" ref={el => app = el}>
            <div className="hero-container">
              <div className="hero-inner">
                <div className="hero-content">
                  <div className="hero-content-inner" ref={el => content = el}>

                    <h2>
                      <div className="hero-content-line">
                        <div className="hero-content-line-inner heading">Hi, I am</div>
                      </div>
                      <div className="hero-content-line">
                        <div className="hero-content-line-inner heading-black">Frontend Designer &</div>
                      </div>
                      <div className="hero-content-line">
                        <div className="hero-content-line-inner heading-black">MERN Stack Developer</div>
                      </div>
                    </h2>

                    <p>
                      Developer + Designer
                    </p>
                    
                    <div className="btn-row">
                      <button className="explore-button">
                        <a href="#">Let's Chat</a>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <motion.h1
            className="heading"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
                type: "tween",
                duration: "2",
                delay: "0.5"
            }}>
            Hi, I am 
            <br />
            <h1 className="heading-black">Frontend Designer &</h1>
            <h1 className="heading-black">MERN Stack Developer &nbsp;&nbsp;</h1>
          </motion.h1> */}
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/shruti-panjwani`}>
                  <ProgressiveImage
                    src={img}
                    // placeholder={require("../images/compressed-image.jpg")}
                    >
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Shruti Panjwani'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              {/* <div className='title'>Shruti Panjwani</div>
              <div className='location'>
                <span>Chhattisgarh</span>
                <span>,India</span>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
  );
};

export default Home;