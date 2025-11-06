import React, { useState, useEffect, useRef } from 'react'

const CTA: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect()
        const headingTop = rect.top
        const windowHeight = window.innerHeight
        const progress = Math.max(
          0,
          Math.min(1, (windowHeight - headingTop) / windowHeight)
        )
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className='w-full bg-black text-white relative overflow-hidden z-30 -mt-[550px]'>
      {/* Animated Left Grass */}
      <img
        src='/animatedleftgrass.svg'
        alt='Left Grass'
        className='absolute top-[calc(1%+110px)] md:top-[calc(10%+50px)] h-[60vh] z-50 pointer-events-none'
        style={{
          left: 0,
          transform: `translateY(-50%) translateX(${-scrollProgress * 100}%)`,
          transition: 'transform 0.6s ease-out'
        }}
      />

      {/* Animated Right Grass */}
      <img
        src='/animatedrightgrass.svg'
        alt='Right Grass'
        className='absolute right-0 top-[calc(1%+110px)] md:top-[calc(10%+50px)] h-[60vh] z-50 pointer-events-none'
        style={{
          transform: `translateY(-50%) translateX(${scrollProgress * 100}%)`,
          transition: 'transform 0.6s ease-out'
        }}
      />

      {/* Gradient top overlay */}
      <div className='absolute top-18 left-0 w-full h-44 md:h-44 bg-gradient-to-b from-black to-transparent' />

      {/* Heading */}
      <h2
        ref={headingRef}
        className='text-center text-[#FFFFFF] text-[11vh] mt-10 md:mt-0 md:text-[22vh] font-Instrument Sans font-semibold tracking-wide pt-10'
      >
        Gameplay
      </h2>

      {/* Gameplay Cards */}
      <div className='flex flex-col md:flex-row mt-10 md:mt-0 justify-center items-center gap-10 relative z-20'>

  {/* Card 1 - Red Glow Behind */}
  <div className='relative group'>
    {/* Glow layer */}
    <div className='absolute -inset-1 rounded-xl bg-gradient-to-r from-red-500 via-pink-600 to-red-700 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500'></div>

    {/* Card content */}
    <div
      className='relative w-[220px] lg:w-[300px] h-[400px] bg-black/60 rounded-xl overflow-hidden justify-center items-center border border-gray-700 hover:border-gray-400 transition-all duration-500 shadow-lg'
      style={{
        backgroundImage: 'url("/combat22.GIF")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  </div>

  {/* Card 2 - Green Glow Behind */}
  <div className='relative group'>
    <div className='absolute -inset-1 rounded-xl bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500'></div>

    <div
      className='relative w-[220px] lg:w-[300px] h-[400px] bg-black/80 rounded-xl overflow-hidden border border-gray-700 transition-all duration-500 opacity-45'
      style={{
        backgroundImage: 'url("/passa.gif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Lock */}
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <img
          src='/lock.svg'
          alt='Locked'
          className='w-[120px] md:w-[150px] object-contain opacity-100 transition duration-500 hover:scale-110 hover:drop-shadow-[0_0_25px_#ffffff]'
        />
      </div>
    </div>
  </div>

  {/* Card 3 - Blue Glow Behind */}
  <div className='relative group'>
    <div className='absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500'></div>

    <div
      className='relative w-[220px] lg:w-[300px] h-[400px] bg-black/80 rounded-xl overflow-hidden border border-gray-700 transition-all duration-500 opacity-35'
      style={{
        backgroundImage: 'url("/map.gif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Lock */}
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <img
          src='/lock.svg'
          alt='Locked'
          className='w-[120px] md:w-[150px] object-contain opacity-100 transition duration-500 hover:scale-110 hover:drop-shadow-[0_0_25px_#ffffff]'
        />
      </div>
    </div>
  </div>

</div>


      {/* Bottom Section */}
      <div className='relative mt-28 w-full h-[800px] overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-44 md:h-20 bg-gradient-to-b from-black to-transparent z-50' />

        {/* Background Video with reduced opacity */}
        <video
          src='/camp_Shot_2.mp4'
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover rounded-b-[50px] opacity-80'
        />

        <div className='absolute mb-10 inset-0 flex flex-col items-center justify-center md:justify-end text-center text-[#FFFFFF]'>
          <h3 className='text-4xl md:text-9xl font-instrument font-semibold text-[#FFFFFFC7] Sans mb-2'>
            Start Your Journey
          </h3>
          <p className='text-normal md:text-lg text-[#FFFFFF] font-helvetica mb-4 max-w-4xl'>
            Antarya is more than a story of siblings; it’s a cycle of choices,
            sacrifice, and discovery. Each step reveals a deeper truth, and each
            battle brings you closer to destiny.
          </p>
          <div className='flex mt-5 font-helvetica gap-4 md:gap-14'>
            <button className='border border-white px-6 py-2 rounded-md text-lg hover:bg-white hover:text-black transition'>
              Follow Us
            </button>
            <button className='border border-white px-6 py-2 rounded-md text-lg hover:bg-white hover:text-black transition'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
