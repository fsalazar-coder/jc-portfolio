"use client"
import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';                           /***Navbar component***/
import Header from '../components/Header';                           /***Header component***/
import About from '@/components/About';
import Work from '@/components/Work';
import Footer from '../components/Footer';                           /***Footer component***/



export default function Home(): JSX.Element {

  const [sectionActived, setSectionActived] = useState('');                              /***State active section on viewport: string***/
  const [screenNarrow, setScreenNarrow] = useState(Boolean);                             /***State screen narrow: true or false***/

  const headerSectionRef: any = useRef(null),                                            /***Ref. to each section to animation and navbar-indicator position control***/
  aboutSectionRef: any = useRef(null),
  workSectionRef: any = useRef(null),
  contactSectionRef: any = useRef(null);

  const screenNarrowHandle: any = () => {
    window.innerWidth < 768 ?
      setScreenNarrow(true)
      : setScreenNarrow(false);
  };

  useEffect(() => {
    window.addEventListener('resize', screenNarrowHandle);
    screenNarrowHandle()
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {                             /***Intersection observer function: section active***/
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSectionActived(entry.target.id);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.55
    });
    let sections: any[] = [                                                              /***Sections array to observer***/
      headerSectionRef.current,
      aboutSectionRef.current,
      workSectionRef.current,
      contactSectionRef.current
    ];
    sections.forEach(section => observer.observe(section));                              /***Sections observer***/
  }, [sectionActived]);

  return (
    <main className='w-full h-auto relative font-montserrat select-none overflow-x-hidden animate-[appear_1.0s]'>
      {/***Navbar fixed, animated background***/}
      <Navbar
        screenNarrow={screenNarrow}
        sectionActived={sectionActived}
      />
      {/***Header section***/}
      <section
        id='header-section'
        className='w-full h-[350px] sm:h-[420px] lg:h-[615px]'
        ref={headerSectionRef}
      >
        <Header />
      </section>

      {/***About section***/}
      <section
        id='about-section'
        className='w-full h-[350px] sm:h-[420px] lg:h-[615px] bg-gradient-to-b from-white to-gray-200'
        ref={aboutSectionRef}
      >
        <About />
      </section>

      {/***Work section***/}
      <section
        id='work-section'
        className='w-full h-[350px] sm:h-[420px] lg:h-[615px] bg-gradient-to-b from-white to-gray-200'
        ref={workSectionRef}
      >
        <Work />
      </section>
      
      {/***Contact section***/}
      <section
        id='contact-section'
        className='w-full h-auto bg-gray-200'
        ref={contactSectionRef}
      >
        <Footer />
      </section>
    </main>
  )
}
