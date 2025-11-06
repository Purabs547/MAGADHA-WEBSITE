import { useRef, useState, useEffect } from 'react'

interface Villain {
  name: string;
  title: string;
  image: string;
  video?: string;
}

export default function Villain () {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return
      const rect = headingRef.current.getBoundingClientRect()
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

  // First row villains after Jalasur
  const firstRowVillains: Villain[] = [
    { name: 'Jalasur', 
      title: 'Keeper of the Abyss', 
      image: '/villainew.png'
    },
    {
      name: 'Pralaysur',
      title: 'Earth’s Wrath',
      image: '/villainew.png'
    },
    {
      name: 'Jwalasur',
      title: 'The Fire Tyrant',
      image: '/villainew.png'
    }
  ]

  // Second row (showAll)
  const secondRowVillains = [
    { name: 'Vayusur', title: 'The Tempest' },
    { name: 'Vatasur', title: 'Spirit of Aether' },
    { name: 'Yakshini', title: 'The Sister of Chaos' },
    { name: 'Andhkasur', title: 'The Asura King' }
  ]

  return (
    <section
      style={{
        fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif`
      }}
      className={`w-full bg-black text-white -mt-28 md:-mt-44 2xl:-mt-96 z-30 pt-24 md:pt-64 relative ${
        showAll
          ? 'min-h-[220vh] md:min-h-[260vh]'
          : 'min-h-[80vh] md:min-h-[90vh]'
      } overflow-hidden`}
    >
      {/* Animated Left Grass */}
      <img
        src='/animatedleftgrass.svg'
        alt=''
        className='top-[8%] md:top-[13%]'
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          transform: `translateY(-50%) translateX(${-scrollProgress * 100}%)`,
          transition: 'transform 0.6s ease-out',
          height: '60vh',
          zIndex: 50,
          pointerEvents: 'none'
        }}
      />

      {/* Animated Right Grass */}
      <img
        src='/animatedrightgrass.svg'
        alt=''
        className='top-[8%] md:top-[13%]'
        aria-hidden
        style={{
          position: 'absolute',
          right: 0,
          transform: `translateY(-50%) translateX(${scrollProgress * 100}%)`,
          transition: 'transform 0.6s ease-out',
          height: '60vh',
          zIndex: 50,
          pointerEvents: 'none'
        }}
      />

      {/* Decorative background title */}
      <h1
        ref={headingRef}
        className='absolute top-[10px] left-1/2 -translate-x-1/2 w-full text-center text-[45px] md:text-[120px] lg:text-[150px] xl:text-[200px] text-[#FFFFFF] font-[Instrument Sans] font-semibold tracking-wide select-none pb-6 sm:pb-0'
        style={{ lineHeight: 1 }}
      >
        The Cursed
      </h1>

      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Header Row */}
        <div className='flex items-center justify-between flex-wrap gap-2 translate-x-[10px] -translate-y-[10px]'>
          <h3 className='text-lg md:text-3xl font-bold text-white'>
            Currently Trending Games
          </h3>
          <button
            aria-label={showAll ? 'Show less' : 'See all'}
            className='relative w-32 h-10 flex items-center justify-center bg-transparent border-0'
            onClick={() => setShowAll(prev => !prev)}
          >
            <img
              src='/seeall.svg'
              alt='See all'
              className='w-[250px] h-[250px] object-contain'
            />
            <span className='absolute text-black font-semibold text-xs md:text-base'>
              {showAll ? 'SHOW LESS' : 'SEE ALL'}
            </span>
          </button>
        </div>

        {/* Villains Grid */}
        <div className='mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 sm:gap-8 relative translate-x-[10px] translate-y-[1px] '>
          {/* 1️⃣ Jalasur (UNCHANGED - NOT BLURRED) */}
          <div className='relative flex flex-col items-center justify-end bg-transparent '>
            {/* Left SVG Decoration */}
            <div className='absolute left-0 w-[80px] md:w-[160px] select-none pointer-events-none  z-20  translate-x-[30px] translate-y-[-50px] md:translate-y-[10px] mt-32'>
              <img
                src='/villainimage.svg'
                alt='Villain left'
                aria-hidden='true'
                className='w-full object-contain'
              />
            </div>

            {/* Background + Name */}
            <div className='hidden md:block absolute right-1/2 w-[220px] mx-auto select-none pointer-events-none translate-x-[90px] translate-y-[50px] '>
              <img
                src='/villain background.png'
                alt='Villain background'
                aria-hidden='true'
                className='w-full object-contain'
              />
              <div className='mt-4 text-center'>
                <span className='inline-block font-bold text-base sm:text-lg md:text-xl text-white md:translate-x-[20px]'>
                  Mayasur
                </span>
                <br />
                <span className='inline-block text-gray-400 text-xs sm:text-sm md:text-base md:translate-x-[20px]'>
                  The Deceiver
                </span>
              </div>
            </div>

            {/* Mobile version */}
            <div className='block md:hidden flex-col items-center'>
              <img
                src='/villain background.png'
                alt='Villain background'
                className='w-[80%] object-contain'
              />
              <span className='font-bold text-base sm:text-lg text-white mt-4'>
                Jalasur
              </span>
              <span className='text-gray-400 text-xs sm:text-sm'>
                Keeper of the Abyss
              </span>
            </div>
          </div>

          {/* 2️⃣ Mayasur, Pralaysur, Jwalasur (WITH BLURRED ANIMATION) */}
          {firstRowVillains.map((villain, i) => (
            <div
              key={i}
              className='group flex flex-col items-center relative bg-black/30 rounded-xl shadow-lg overflow-visible'
            >
              <div
                className='relative w-full flex justify-center items-center '
                style={{ minHeight: '120px' }}
              >
                {/* Background video */}
                {villain.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="relative w-[70%] object-contain mt-20 md:translate-x-0 sm:translate-x-0 translate-x-0"
                  >
                    <source src={villain.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={villain.image}
                    alt={villain.name || "Villain"}
                    className="w-[90%] p-[1px] rounded-xl bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-[length:200%_200%] animate-border-flow object-contain mt-20 md:translate-x-0 sm:translate-x-0 translate-x-0 bg-black"
                  />
                )}

                {/* Lock overlay (shifted slightly down) */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <img
                    src='/lock.svg'
                    alt='center lock'
                    className='hover:animate-shake w-[40%] pointer-events-auto z-20 md:translate-x-0 sm:translate-x-0 translate-x-0 translate-y-10 md:translate-y-12'
                  />
                </div>

                {/* Hover notification image (moved down slightly) */}
                <img
                  src='/notification.png'
                  alt='Notification'
                  className='absolute top-[10px] md:top-[6px] w-[120px] md:w-[220px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30'
                />
              </div>

              {/* Villain Name - WITH BLURRED ANIMATION */}
              <span className='font-bold text-base sm:text-lg md:text-xl text-white mt-6 text-center z-30 animate-pulse-blur'>
                {villain.name}
              </span>
              <span className='text-gray-400 text-xs sm:text-sm md:text-base text-center z-30 animate-pulse-blur'>
                {villain.title}
              </span>
            </div>
          ))}
        </div>

        {/* Second row of villains if showAll */}
        {showAll && (
          <div className='mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 translate-x-[10px] translate-y-[30px]'>
            {secondRowVillains.map((villain, i) => (
              <div
                key={i}
                className='group flex flex-col items-center relative bg-black/30 rounded-xl shadow-lg overflow-visible'
              >
                <div
                  className='relative w-full flex justify-center'
                  style={{ minHeight: '10px' }}
                >
                  <img
                    src='/villainew.png'
                    alt={villain.name}
                    className='w-[90%] p-[1px] rounded-xl bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-[length:200%_200%] animate-border-flow object-contain mt-20'
                  />
                  {/* Lock overlay (shifted slightly down) */}
                  <div className='absolute inset-0 flex items-center justify-center translate-y-10'>
                    <img
                      src='/lock.svg'
                      alt='center lock'
                      className='hover:animate-shake w-[40%] pointer-events-auto z-20'
                    />
                  </div>
                  <img
                    src='/notification.png'
                    alt='Notification'
                    className='absolute top-[10px] md:top-[6px] w-[120px] md:w-[220px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30'
                  />
                </div>
                {/* Villain Name - WITH BLURRED ANIMATION */}
                <span className='font-bold text-base sm:text-lg md:text-xl text-white mt-6 text-center animate-pulse-blur'>
                  {villain.name}
                </span>
                <span className='text-gray-400 text-xs sm:text-sm md:text-base text-center animate-pulse-blur'>
                  {villain.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom grass decoration */}
<img
  src='/villinGrass2.png'
  alt='Villain grass'
  className='relative left-1/2 -translate-x-1/2 w-[130vw] md:-mb-24 max-w-none object-cover mt-12'
/>

{/* Add custom CSS for the blur animation */}
<style>{`
  @keyframes pulse-blur {
    0%, 100% {
      filter: blur(3px);
      opacity: 0.7;
    }
    50% {
      filter: blur(6px);
      opacity: 0.4;
    }
  }
  .animate-pulse-blur {
    animation: pulse-blur 2s ease-in-out infinite;
  }
`}</style>

    </section>
  )
}