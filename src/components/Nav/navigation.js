import React, {Fragment, useEffect} from 'react'
import { Link } from "react-router-dom";
import gsap from "gsap";

const Navigation = () => {

    useEffect(() => {
    
        // const cursor = document.querySelector('.cursor');
        const menuItems = document.querySelectorAll('.menuListItem');
        const menuItemTexts = document.querySelectorAll('.menuListItem__text.-initial');
        const imageSliders = document.querySelectorAll('.imageSlider');
        const image1 = document.querySelector('.image-1');
        const image2 = document.querySelector('.image-2');
        const image3 = document.querySelector('.image-3');
        const image4 = document.querySelector('.image-4');
        const image5 = document.querySelector('.image-5');
        // const loading = document.querySelector('.loading');

        const initialAnimation = () => {
        gsap.to(menuItemTexts, 0.5, {
            yPercent: -100,
            delay: 0.4
        });

        gsap.to(image1, 0.9, {
            y: 0,
            x: 0,
            rotate: 0,
            ease: 'power3.out',
            delay: 0.1
        });

        gsap.to(image2, 1.2, {
            y: 0,
            x: 0,
            rotate: 0,
            ease: 'power3.out'
        });

        gsap.to(image3, 1.2, {
            y: 0,
            x: 0,
            rotate: 0,
            ease: 'power3.out'
        });

        gsap.to(image4, 1.2, {
            y: 0,
            x: 0,
            rotate: 0,
            ease: 'power3.out',
            delay: 0.2
        });

        gsap.to(image5, 1.2, {
            y: 0,
            x: 0,
            rotate: 0,
            ease: 'power3.out',
            delay: 0.2,
            onComplete: () => {
            Array.from(imageSliders).forEach(imageSliderItem => {
                imageSliderItem.style.backfaceVisibility = 'hidden';
            });
            }
        });
        };

        const loadImages = (() => {
        let loadedImagesCount = 0;
        const increaseCounter = () => {
            loadedImagesCount++;
            if (loadedImagesCount === document.images.length) {
            //   loading.style.display = 'none';
            //   setTimeout(initialAnimation, 500);
            initialAnimation()
            }
        };
        Array.from(document.images).forEach(imageElement => {
            if (imageElement.complete) increaseCounter();
            else {
            imageElement.addEventListener('load', increaseCounter, false);
            }
        });
        })();

        const scaleRotate = (target, { shouldReverse, delay }) => {
        const activeSlide = target.querySelector('.imageSlider__slide:not(.-next)');
        const scale = shouldReverse ? 1 : 1.1;
        const rotate = shouldReverse ? 0 : 7;

        gsap.to(activeSlide, 0.9, {
            scale,
            rotate,
            delay,
            ease: 'power2.Out'
        });
        };

        const slide = (target, { shouldReverse, delay = 0, extraDuration = 0 }) => {
        const activeSlide = target.querySelector('.imageSlider__slide:not(.-next)');
        const nextSlide = target.querySelector('.imageSlider__slide.-next');
        const xPercent = shouldReverse ? 0 : 100;

        gsap.to([activeSlide, nextSlide], 0.7 + extraDuration, {
            xPercent,
            delay,
            ease: 'power2.inOut'
        });
        };

        const toggleAnimation = ({ currentTarget, type }, index) => {
        const initialText = currentTarget.querySelector(
            '.menuListItem__text.-initial'
        );
        const hoverText = currentTarget.querySelector('.menuListItem__text.-hover');
        const strokeLine = currentTarget.querySelector('.menuListItem__line');
        const shouldReverse = type === 'mouseout';
        const y = !shouldReverse ? 0 : -100;
        const ease = !shouldReverse ? 'power2.out' : 'power2.in';
        const strokeDashoffset = !shouldReverse ? 0 : 3400;

        gsap.to(initialText, 0.4, { yPercent: 0 + y, ease });
        gsap.to(hoverText, 0.4, { yPercent: 100 + y, ease });
        gsap.to(strokeLine, 0.5, { strokeDashoffset, ease: 'power2.in' });

        switch (index) {
            case 0:
            slide(image5, { shouldReverse, delay: 0.025, extraDuration: 0.3 });
            slide(image2, { shouldReverse, delay: 0.05 });
            scaleRotate(image3, { shouldReverse, delay: 0.1 });
            slide(image4, { shouldReverse, delay: 0.15 });
            break;

            case 1:
            slide(image1, { shouldReverse, delay: 0.025, extraDuration: 0.3 });
            slide(image3, { shouldReverse, delay: 0.05 });
            scaleRotate(image2, { shouldReverse, delay: 0.1 });
            scaleRotate(image4, { shouldReverse, delay: 0.1 });
            break;

            case 2:
            slide(image1, { shouldReverse, delay: 0.025, extraDuration: 0.3 });
            slide(image4, { shouldReverse, delay: 0.05 });
            scaleRotate(image3, { shouldReverse, delay: 0.1 });
            slide(image5, { shouldReverse, delay: 0.1 });
            break;
        }
        };

        // const moveCursor = ({ clientX, clientY }) => {
        //     const x = clientX + cursor.clientWidth / 2;
        //     const y = clientY + cursor.clientHeight / 2;
        
        //     cursor.style.transform = `translate(${x}px, ${y}px)`;
        //   };

        // window.addEventListener('mousemove', moveCursor);

        Array.from(menuItems).forEach((item, index) => {
        const handleEvent = e => toggleAnimation(e, index);
        item.addEventListener('mouseover', handleEvent);
        item.addEventListener('mouseout', handleEvent);
        });

    }, [])
    return (
        <Fragment>
            <div class="cursor-pointer"></div>
            {/* <div class="loading">Loading...</div> */}
            <nav class="menu-nav">
            <svg
                class="papers"
                xmlns="http://www.w3.org/2000/svg"
                width="533.266"
                height="737.909"
                viewBox="0 0 533.266 737.909"
            >
                <clipPath id="PaperPath-1">
                <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M609.963,1.316s1.631,119.672,0,118.47,10.55-1.059,10.55-1.059l9.232,2.043,8.724-4.821,10-4.51h3.42l4.2-5.02,6.206-1.635,4.255-5.49,4.827-4.471s22.139-61.3,47.258-69.16c.781-.244,1.525-.495,2.5-.848,20.5-7.416,13.358-22.092,8.182-23.5-.336,0-7.568-1.77-8.182-1.666C709.438-2.843,609.963,1.316,609.963,1.316Z"
                    transform="translate(-608)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                />
                </clipPath>
                <clipPath id="PaperPath-2">
                <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M617,117.02s-10.234,111.55-8.467,112.057S607.3,345.01,611.517,347.323s16.414-3.365,16.414-3.365l4.984,2.2L635,340.946h7.213l4.245-5.583,6.625-1.523,5.391-8.624,9.734-10.208,2.5,2.92,4.906-13.4,7.768-3.154,3.511-6.55,8.565-2.351,6.533-9.991,11.208-1.538,5.428-10.663,7.917-1.362-1.13-6.479,10.96-4.059v-4.963l10.257-1.357,6.021-6.366,6.393-1.089,7.468-7.5,8.273-3.178,8.957,3.178h9.826l2.237,3.826h12.654l6.6-3.826,8.028,3.826,7.815-3.826,8.363-3.178,3.646-4.843h10.812l5.389-2.72h5.1l16.791-13.132,8.518-4.181,6.672-5.068,8.586-2.091,2.125-3.778h5.532l10.921-6.8H939.5v6.8h7.848l2.949,3.778,6.412-3.778,6.031,5.869,8.511-3.8,3.06,3.8h12.115l3.789,7.112,15.8-2.045,6.569-3.022,5.564,3.022,7.816-3.022,3.819,3.022,11.422-5.068,6.032,2.045,12.643-2.045h5.73l4.485-2.091,11.469,2.091,5.662-2.091,7.918,4.136,8.6-2.045,5.894,5.068,4.711-3.022,4.506,3.022,3.286-3.022,8.28,3.022,4.158-2.114,7.015-204.521s-153.329,2.213-155.17,0S730.774-.11,730.774-.11l-8.383,16.784h-9.2v8.534H701.986v5.887h-15.1l3.123,18.758L668.2,47.205l2.5,9.348h-4.914v6.9H655.633v8.057l-9.18,6.756-4.245,5.329v3.976L635,90.185v5.554l-2.081,5.6H627.93l-2.559,8.186Z"
                    transform="translate(-608)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                />
                </clipPath>
                <clipPath id="PaperPath-3">
                <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M610,343l8.076-2.827H624.7L627.716,343l5.668-7.019h5.261l5.425-3.94h5.294v-4.317h6.862l6.408-6.891H667.8V309.617l6.7-2.224,8.05-6.3,5.568-10.577,12.094-5.055,5.575-8.477s42.061-37.319,46.861-37.722,24.872-13.385,24.872-13.385l7.48,1.493,6.56,4.326,6.969,7.566,12.051-4.724h7.2l7.453-2.841h5.154l7.378-5.819h7l24.308-5.925,10.862-11.705,11.043-3.836,7.811-5.848h7.434l16.763-10.686,8.982,3.978,4.826-3.978,9.648,5.931h24.047l4.968,7.154h6.119l8.071,2.111h7.2l7.762,1.338,7.1-1.338,9.726,1.338,11.139-3.45,9.979,2.111,4.9-2.111h15.588l10.083-2.4,10.176,4.51,13.264,1.338,7.179-1.338,14.668,1.338h16.193l4.534,277.942-22.531-1.829-9.98,3.788-8.315-17.751-15.012,4.3h-6.276l-5.946-2.638-8.037,5.213h-9.05l-6.538,7.083h-6.045l-3.474,5.54-8.953-7.626h-8.68l-11.991,5.874H993.325l-10.266,13.273-17.437,3.8-8.15-5.684-2.289,5.684-11.985-3.8v3.8l-11.224-3.8-5.774,3.8-4.687-3.8-4.905,1.486h-8.354l-2.023,2.319-4.618-2.319H887.994l-8.053,5.411-10.862-5.411-6.733,2.319-7.854-2.319-4.827-5.594-4.894,2.229-10.984-2.229-3.4-4.288-10.271-6.836-5.136,3.711-2.64-5.54-8.3,1.829-12.488-5.7L781.634,464.8l-7.327-1.349-21.658-17.214-10.956-3.406-8.188-7.083L719.077,426.4h-13.29l-11.444-8.317L682.551,411.3H674.5l-6.7-6.495-8.975-6.149-9.458,2.825-5.294-2.825-5.425,2.825-8.13-5.085-5.811,2.259-12.823,2.825Z"
                    transform="translate(-608)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                />
                </clipPath>
                <clipPath id="PaperPath-4">
                <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M612.025,381.038l.35,356.761s245.421-8.286,250.815-7.131,9.442-2.9,9.442-2.9l6.762,2.9L897,737.8l12.463-7.131s226.949,2.583,228.153,0,0-119.231,0-119.231-51.707-20.856-94.377-49.928-76.3-66.361-76.3-66.361-110.493-1.722-110.2-8.407-13.519-9.089-13.519-9.089l-14.7,5.228-10.219-13.122-9.864,7.894-22.16-18.821-7.52,3.32-16.405-13.185L742.451,429.2l-10.641,3.85-15.087-13.324Z"
                    transform="translate(-608)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                />
                </clipPath>
                <clipPath id="PaperPath-5">
                <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M1139.139,483.046c.255,3.979,0,128.624,0,128.624l-26.07-3.752-6-9.613-19.113,4.743V593.82l-6.342-5.307-4.052,5.307-3.87-5.307-10.323-7.346-2.42,7.346-4.462-15.124-13.649-4.933-6.073-9.783H1025.5l-10.351-9.843-7.414-11.553H997.052l-5.165-13.656-9.249-4-12.925-10.481-10.5-6.209V488.687l15.2,3.325,8.219-8.966h9.249l5.165-9.115h18.1l6.952-6.121,7.326,6.121,27.056-8.623h12.864l8.212-5.567,10.393,8.068,13.616-2.5S1138.884,479.067,1139.139,483.046Z"
                    transform="translate(-608)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                />
                </clipPath>

                <foreignObject
                class="image-2"
                width="100%"
                height="100%"
                clip-path="url(#PaperPath-2)"
                >
                <div class="imageSlider">
                    <img
                    class="imageSlider__slide"
                    width="100%"
                    src="https://user-images.githubusercontent.com/20098648/72714431-f1b2c180-3b83-11ea-851b-276f4fec08af.png"
                    />
                    <img
                    class="imageSlider__slide -next"
                    width="100%"
                    src="https://user-images.githubusercontent.com/20098648/72714507-0abb7280-3b84-11ea-86fd-2f94db92df09.png"
                    />
                </div>
                </foreignObject>

                <foreignObject
                class="image-1"
                width="100%"
                height="100%"
                clip-path="url(#PaperPath-1)"
                >
                <div class="imageSlider">
                    <img
                    class="imageSlider__slide"
                    width="100%"
                    src="https://user-images.githubusercontent.com/20098648/72714318-c334e680-3b83-11ea-8120-50044cc21cde.png"
                    />
                    <img
                    class="imageSlider__slide -next"
                    width="100%"
                    src="https://user-images.githubusercontent.com/20098648/72714389-e3fd3c00-3b83-11ea-83b9-50b6e3959172.png"
                    />
                </div>
                </foreignObject>

                <foreignObject
                class="image-3"
                width="100%"
                height="100%"
                clip-path="url(#PaperPath-3)"
                >
                <div class="imageSlider">
                    <img
                    class="imageSlider__slide"
                    width="100%"
                    src="https://user-images.githubusercontent.com/20098648/72714549-23c42380-3b84-11ea-9dff-e2c4da0e7d7a.png"
                    />
                    <img
                    class="imageSlider__slide -next"
                    width="100%"
                    src="https://user-images.githubusercontent.com/20098648/72714577-2fafe580-3b84-11ea-997a-68cbb43a1f77.png"
                    />
                </div>
                </foreignObject>

                <foreignObject
                class="image-4"
                width="100%"
                height="100%"
                clip-path="url(#PaperPath-4)"
                >
                <div class="imageSlider">
                    <img
                    class="imageSlider__slide"
                    width="100%"
                    src="https://user-images.githubusercontent.com/20098648/72714732-756cae00-3b84-11ea-8b8f-186f383f72e2.png"
                    />
                    <img
                    class="imageSlider__slide -next"
                    width="100%"
                    src="https://user-images.githubusercontent.com/20098648/72716269-2bd19280-3b87-11ea-980a-b77ef072b476.png"
                    />
                </div>
                </foreignObject>

                <foreignObject
                class="image-5"
                width="100%"
                height="100%"
                clip-path="url(#PaperPath-5)"
                >
                <div class="imageSlider">
                    <img
                    class="imageSlider__slide"
                    width="100%"
                    src="https://user-images.githubusercontent.com/20098648/72714844-abaa2d80-3b84-11ea-8f83-4ead06a2a6ca.png"
                    />
                    <img
                    class="imageSlider__slide -next"
                    width="100%"
                    src="https://user-images.githubusercontent.com/20098648/72714802-9208e600-3b84-11ea-951a-f0267b4d7a5d.png"
                    />
                </div>
                </foreignObject>
            </svg>
            <div class="menuList">
                <a
                href="https://twitter.com/kiarash_zar"
                target="_blank"
                class="menuListItem"
                >
                Home
                <span class="menuListItem__text -hover">Home</span>
                <span class="menuListItem__text -initial">Home</span>
                <svg
                    class="menuListItem__line"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 250 81.455"
                >
                    <use href="#Line"></use>
                </svg>
                </a>
                <a
                href="https://twitter.com/kiarash_zar"
                target="_blank"
                class="menuListItem"
                >
                About
                <span class="menuListItem__text -hover">About</span>
                <span class="menuListItem__text -initial">About</span>
                <svg
                    class="menuListItem__line"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 250 81.455"
                >
                    <use href="#Line"></use>
                </svg>
                </a>
                <a
                href="https://twitter.com/kiarash_zar"
                target="_blank"
                class="menuListItem"
                >
                Contact
                <span class="menuListItem__text -hover">Contact</span>
                <span class="menuListItem__text -initial">Contact</span>
                <svg
                    class="menuListItem__line"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 250 81.455"
                >
                    <use href="#Line"></use>
                </svg>
                </a>
            </div>
            </nav>
        </Fragment>
    )
}

export default Navigation
