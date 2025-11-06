import React, { useRef, useEffect, useState } from 'react'
import anotherHeroImg from '/another-hero.svg' // replace with your second hero image

const SamarHero: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return
      const rect = headingRef.current.getBoundingClientRect()
      // Shift the scroll animation up by 400px
      const headingTop = rect.top - 400
      const windowHeight = window.innerHeight
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - headingTop) / windowHeight)
      )
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className='relative font-helvetica min-h-screen bg-black text-white flex flex-col items-center justify-center z-30'>
      {/* Animated Left Grass */}
      <img
        src='/animatedleftgrass.svg'
        alt=''
        aria-hidden
        className='absolute left-0 pointer-events-none z-40 transition-transform duration-800 ease-out'
        style={{
          top: `calc(50% - ${
            windowWidth < 768
              ? '730px'
              : windowWidth < 1024
              ? '800px'
              : windowWidth < 1536
              ? '1000px'
              : '1400px'
          })`,
          height: `${
            windowWidth < 768
              ? '40'
              : windowWidth < 1024
              ? '50'
              : windowWidth < 1536
              ? '60'
              : '60'
          }vh`,
          transform: `translateX(${
            -scrollProgress *
            (windowWidth < 768
              ? 60
              : windowWidth < 1024
              ? 70
              : windowWidth < 1536
              ? 80
              : 90)
          }%)`
        }}
      />

      {/* Animated Right Grass */}
      <img
        src='/animatedrightgrass.svg'
        alt=''
        aria-hidden
        className='absolute right-0 pointer-events-none z-40 transition-transform duration-800 ease-out'
        style={{
          top: `calc(50% - ${
            windowWidth < 768
              ? '730px'
              : windowWidth < 1024
              ? '800px'
              : windowWidth < 1536
              ? '1000px'
              : '1400px'
          })`,
          height: `${
            windowWidth < 768
              ? '40'
              : windowWidth < 1024
              ? '50'
              : windowWidth < 1536
              ? '60'
              : '60'
          }vh`,
          transform: `translateX(${
            scrollProgress *
            (windowWidth < 768
              ? 60
              : windowWidth < 1024
              ? 70
              : windowWidth < 1536
              ? 80
              : 90)
          }%)`
        }}
      />

      {/* Background Title with scroll animation */}
      <h1
        ref={headingRef}
        className='absolute text-center text-[3.5rem] md:text-[5.5rem] lg:text-[10rem] text-[#FFFFFF] font-["Instrument Sans"] font-semibold tracking-wide select-none left-1/2 -translate-x-1/2 whitespace-nowrap'
        style={{
          lineHeight: '1',
          top: '0.5rem',
          transition: 'transform 0.45s ease-out'
        }}
      >
        The Crowned
      </h1>

      {/* First Hero Section */}
      <div className='flex flex-col md:flex-row w-full items-center md:items-center justify-center gap-44 z-10 mt-32 md:mt-0  md:px-16'>
        {/* Left Image */}
        <div className='w-full md:w-auto flex justify-center lg:mt-44 md:justify-start'>
          <img
            src='/Samar2.png'
            alt='Samar'
            className='object-contain  md:h-[800px] lg:h-[42rem] 2xl:h-[42rem]'
            style={{
              opacity: 1,
              transform: 'rotate(0deg)'
            }}
          />
        </div>

        {/* Right Text */}
        <div className='w-full -mt-40 md:mt-0 md:max-w-[640px] flex flex-col items-center md:items-end text-center md:text-right md:px-0'>
          <h2 className='font-helvetica font-bold leading-[0.95] text-[72px] sm:text-[108px] lg:text-[178px] tracking-tight'>
            <span className='text-white'>Sam</span>
            <span className='bg-gradient-to-r from-[#FFFFFF] via-[#E0E0E0] to-[#161616] bg-clip-text text-transparent'>
              ar
            </span>
          </h2>

          <p className='text-[#FFFFFFA1] mt-6 font-helvetica text-sm sm:text-base md:text-lg leading-relaxed max-w-sm md:max-w-lg  md:text-left'>
            A determined seeker, guided by duty and armed with the Trishul of
            Lord Shiva.
          </p>
        </div>
      </div>

      {/* Second Hero Section */}
      <div className='flex flex-col-reverse mt-5 md:-mt-24 2xl:-mt-5  md:flex-row items-center justify-center z-10 gap-44  '>
        {/* Left Text */}
        <div className='w-full max-w-xl  flex flex-col items-center md:items-start text-center md:text-left -mt-32 md:mt-16  px-4 md:px-0'>
          <h2 className='font-helvetica font-bold leading-[0.95] text-[72px] sm:text-[108px] lg:text-[178px] tracking-tight'>
            <span className='bg-gradient-to-l from-[#FFFFFF] to-[#161616] bg-clip-text text-transparent'>
              Ar
            </span>
            <span className='text-white'>ya</span>
          </h2>

          <p className='text-[#FFFFFFA1] mt-7 font-helvetica text-sm md:text-base leading-relaxed'>
            A fierce protector of ancient knowledge, wielder of divine energy,
            and guardian of forgotten realms.
          </p>
        </div>

        {/* Right Image (Video + Character) */}
        <div className='relative w-[140px] md:w-[500px] h-[190px] md:h-[520px] flex justify-center items-center mt-10 md:mt-20'>
          {/* Background Video */}
          <video
            src='/Aarya3.mp4'
            autoPlay
            loop
            muted
            playsInline
            className='absolute h-[100%] left-2/3 -translate-x-[130px] md:-translate-x-1/2 w-[251px] md:w-[165%] max-w-none mt-12 md:mt-0 object-cover opacity-80'
          />

          {/* Front Character Image */}
          <img
            src={anotherHeroImg}
            alt='Anaya'
            className='relative left-[15%] z-30 w-[65%] md:w-[62%] object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:animate-shake'
          />
        </div>
      </div>

      {/* Grass Image at Bottom */}
      <div className='relative w-full z-50 -mt-10 mb-10 md:mb-0 md:-mt-56'>
        <img
          src='/descriptionGrass.png'
          alt='Grass Decoration'
          className='relative left-1/2 -translate-x-1/2 w-[130vw] max-w-none object-cover'
        />
      </div>
    </section>
  )
}

export default SamarHero
