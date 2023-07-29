import { useRef, useEffect, useState } from 'react';
import NavbarTopSlider from './NavbarTopSlider';
import Link from 'next/link';



export default function Navbar(props: any) {

  const navbarIndicator = useRef(null);                                                  /***Navbar indicator Ref***/
  const [transparentBackground, setTransparentBackground] = useState(true);              /***Transparent background state: boolean***/
  const [navbarNarrowActive, setNavbarNarrowActive] = useState(false);
  const [navbarFirstUse, setNavbarFirstUse] = useState(false);

  const sectionActived = props.sectionActived;                                           /***Section active in the moment (UseState) */
  const screenNarrow = props.screenNarrow;
  const navbarElement = [                                                                /***Navbar elements array-object */
    {
      element: 'About',
      href: '#about-section',
      linkTo: 'about-section'
    },
    {
      element: 'Work',
      href: '#work-section',
      linkTo: 'work-section'
    },
    {
      element: 'Contact',
      href: '#contact-section',
      linkTo: 'contact-section'
    }
  ];


  useEffect(() => {                                                                      /***UseEffect: Navbar indicator handle-moving***/
  if (screenNarrow === false) {
    setNavbarNarrowActive(false);
    let indicatorSelected: any = navbarIndicator.current;                                /***Navbar indicator selector***/
    switch (sectionActived) {
      case 'about-section':
        indicatorSelected.style.transform = 'translateX(0%)';
        break;
      case 'work-section':
        indicatorSelected.style.transform = 'translateX(100%)';
        break;
      case 'contact-section':
        indicatorSelected.style.transform = 'translateX(200%)';
        break;
      default:
        indicatorSelected.style.transform = 'translateX(-1000%)';
        break;
    }
  }
}, [sectionActived, screenNarrow]);

useEffect(() => {
  switch (sectionActived) {
    case 'header-section':
      const backgroundScrollHandle = () => {
        scrollY > 5 ?
          setTransparentBackground(false)
          : setTransparentBackground(true);
      }
      document.addEventListener('scroll', backgroundScrollHandle);
      break;
    case 'about-section':
    case 'work-section':
    case 'contact-section':
      setTransparentBackground(false);
      break;
    default:
      setTransparentBackground(true)
      break;
  }
}, [sectionActived]);

  return (
    <>
      {/**navbar */}
      <div
        className={
          `${transparentBackground ?
            `${navbarFirstUse ?
              'animate-[disappear-color_0.50s_ease-out]'
              : ''} bg-transparent border-b border-slate-200 shadow-none`
            : 'bg-gray-900 shadow-md animate-[appear-color_0.50s_ease-in]'
          } w-full h-10 lg:h-12 xl:h-14 2xl:h-16 fixed flex flex-row justify-center items-center z-50`
        }>
        <div className='container w-full h-full px-2 lg:px-8 flex flex-row justify-between items-center'>

          {/**SVG logo (left) */}
          <div className={
            `${screenNarrow ?
              'w-2/3 sm:w-1/2'
              : `md:w-1/6`
            } h-full flex flex-row justify-start items-center z-30`
          }>
            <strong>JC</strong>-logo
          </div>

          {/**Navbar (right) */}
          <div className={
            `${screenNarrow ?
              'w-1/3'
              : 'w-2/5'
            } h-full flex flex-row justify-end items-center z-30`
          }>
            <nav className={
              `${screenNarrow ?
                'w-fit flex flex-col justify-end'
                : 'w-full relative'
              } h-full`
            }>
              {
                screenNarrow ?
                  /**Navbar narrow: Menu hamburguer, navbar elements hidden-visible */
                  <div
                    className='w-5 h-6 relative flex flex-col justify-center items-center transition-all'
                    onClick={() => {
                      setNavbarNarrowActive(!navbarNarrowActive);
                      setNavbarFirstUse(true);
                    }}
                  >
                    {
                      navbarNarrowActive ?
                        <>
                          <div className='w-5 h-[2px] absolute top-[11px] bg-white transform rotate-45 transition-all' />
                          <div className='w-5 h-[2px] absolute top-[11px] bg-white transform -rotate-45 transition-all' />
                          <div className='w-5 h-[2px] absolute bg-white transform scale-0 transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-[11px] bg-white transform -rotate-45 transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-[11px] bg-white transform rotate-45 transition-all' />
                        </>
                        :
                        <>
                          <div className='w-5 h-[2px] absolute top-1 bg-white transition-all' />
                          <div className='w-5 h-[2px] absolute top-1 bg-white transition-all' />
                          <div className='w-5 h-[2px] absolute bg-white transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-1 bg-white transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-1 bg-white transition-all' />
                        </>
                    }
                  </div>
                  :
                  /**Navbar wide: Navbar elements */
                  <>
                    <ul className='w-full h-full flex flex-row justify-end items-center'>
                      {
                        navbarElement.map((item: any, index: any) => {
                          return (
                            <li
                              key={index}
                              className={
                                `${transparentBackground ?
                                  'text-gray-600 hover:bg-gray-200'
                                  : 'text-gray-200 hover:bg-gray-800'
                                } w-1/3 h-full p-0 hover:text-green-400 flex flex-row justify-center items-center list-none`
                              }
                            >
                              <Link
                                href={item.href}
                              >
                                <h2 className={
                                  `${transparentBackground ?
                                    'text-gray-600'
                                    : 'text-gray-200'
                                  } w-full h-full px-10 hover:text-green-400 text-sm lg:text-base xl:text-lg font-semibold tracking-wider flex flex-row justify-center items-center cursor-pointer transition-all`
                                }>
                                  {item.element}
                                </h2>
                              </Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                    {/***Navbar indicator***/}
                    <div
                      id='indicator'
                      className='flex w-[calc(100%/3)] h-[2px] lg:h-1 absolute bottom-0 bg-green-400 transition-all'
                      ref={navbarIndicator}
                    />
                  </>
              }
            </nav>
          </div>
        </div>
      </div >

      {/**navbar-top-slider to narrow screen: hidden-visible */}
      {
        screenNarrow ?
          <NavbarTopSlider
            navbar={navbarElement}
            screenNarrow={screenNarrow}
            navbarNarrowActive={navbarNarrowActive}
            navbarFirstUse={navbarFirstUse}
            sectionActived={sectionActived}
            navbarNarrowActiveFalse={() => { setNavbarNarrowActive(false) }}
          />
          : ''
      }
    </>
  )
}