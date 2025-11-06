const CategoryHero = () => {
  return (
    <section className='relative w-full h-[120vh]  overflow-hidden'>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='/videos/divine-cave.mp4'
      />

      {/* Dark Overlay for better contrast */}
      <div className='absolute inset-0 bg-black/40 z-10'></div>

      {/* Centered Text Content */}
      <div className='absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8'>
        <h1
          className='text-[#FFFFFF94] text-center w-full font-cinzel font-bold'
          style={{
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          {/* Responsive text sizes */}
          <span className='text-[48px] xs:text-[56px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[197px]'>
            ANTARYA
          </span>
        </h1>

        <p className='text-[#FFFFFF70] leading-relaxed max-w-[90%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl font-helvetica font-light'>
          {/* Responsive text sizes and positioning */}
          <span className='text-[17px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[21px] block mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6'>
            In Antarya, players embark on a journey through ancient ruins,
            haunted dungeons, and eerie forests. Wield divine weapons, solve
            intricate puzzles, and face elemental villains and evil demons as
            you uncover secrets hidden in the cycle of time.
          </span>
        </p>
      </div>

      {/* Grass Image at the Bottom */}

      <img
        src='/newTahni.png'
        alt='Villain grass'
        className='absolute -bottom-10 md:-bottom-20 lg:-bottom-44 left-1/2 -translate-x-1/2 w-[130vw] max-w-none object-cover'
      />
    </section>
  )
}

export default CategoryHero
