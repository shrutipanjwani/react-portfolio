import React, { useEffect, useState, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import img from "../images/ss.jpg";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

//Components
import ScrollForMore from "../components/scrollForMore";
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);


  let app = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});
  
  useEffect(() => {
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;

    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children ], 1, {
      y: 90,
      ease:Power3.easeOut,
      delay: .8
    }, .20, 'Start')

  }, [tl])



  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'
      >
      <div className='container'>
        <div className='row center top-row'>
          <div className='top'>
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              style={{marginBottom: "-20px"}}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div className='location'>
                <span>Chhattisgarh,</span>
                <span>India</span>
              </div>
              <div className='mua'>shrutipanjwani13@gmail.com</div>
            </motion.div> */}
            <motion.div className='model' style={{marginBottom: "-40px"}}>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>S</motion.span>
                <motion.span variants={letter}>h</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>u</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>i</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>P</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>j</motion.span>
                <motion.span variants={letter}>w</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>i</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 420 : 200,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={img}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -350 : 600,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row row-container'>
            <div className="hero1" ref={el => app = el}>
              <div className="hero-container">
                <div className="hero-inner1">
                  <div className="hero-content">
                    <div className="hero-content-inner" ref={el => content = el}>

                      <h2 className='title'>
                        <div className="hero-content-line1">
                          <div className="hero-content-line-inner">
                            Purpose is what gives life
                          </div>
                        </div>
                        <div className="hero-content-line1">
                          <div className="hero-content-line-inner">
                            a meaning
                          </div>
                        </div>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <p>I am a 16 years old Hustler, Learner, Explorer, Frontend Designer & MERN Stack Developer based in Chhattisgarh, India.
             I create websites, brand identities and everything in between. I help my clients to gain their digital presence and grow.
             My Passion for clear visual communication enabled me to work with many startups and freelance with clients from many cities.
             My goal is not to be better than anyone else, but better than I used to be.
             </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;