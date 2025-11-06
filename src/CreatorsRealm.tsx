import React from 'react'

const CreatorsRealm: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center bg-black text-white py-16 md:py-24 px-4 sm:px-6 lg:px-12'>
      {/* Top Line */}
      <div className='w-full max-w-[1778px] h-[1px] bg-[#515151] mb-12 md:mb-20' />
      {/* Main Content */}
      <div className='text-center flex flex-col justify-center items-center max-w-[1673px] min-h-[50vh] md:min-h-[60vh]'>
        <h1
          className='text-3xl sm:text-4xl md:text-6xl lg:text-[74px] font-semibold leading-tight mb-6 md:mb-8'
          style={{
            fontFamily: 'Instrument Sans, Helvetica, Arial, sans-serif'
          }}
        >
          Join the Realm of Creators.
        </h1>

        <p
          className='text-base sm:text-lg md:text-2xl lg:text-[26px] max-w-[95%] sm:max-w-[900px] md:max-w-[1100px] lg:max-w-[1240px] font-semibold text-[#8D8D8D] leading-relaxed md:leading-snug mb-10 md:mb-16'
          style={{
            fontFamily: 'Instrument Sans, Helvetica, Arial, sans-serif'
          }}
        >
          At Magadha, we’re not just building games — we’re crafting experiences
          that define the future of play. If you’re a dreamer, a maker, or a
          rule-breaker with a love for art, code, or storytelling — your journey
          begins here.
        </p>

        <button
          className='px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-white text-black 
          text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold 
          rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-300'
          style={{
            fontFamily: 'Instrument Sans, Helvetica, Arial, sans-serif'
          }}
        >
          Join the Team
        </button>
      </div>

      {/* Bottom line */}
      <div className='w-[1778px] h-[1px] bg-[#515151] mt-20' />
    </section>
  )
}

export default CreatorsRealm
