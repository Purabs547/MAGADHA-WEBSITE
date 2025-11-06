import React, { useState } from 'react';



interface Character {
  id: number;
  image: string;
  centerImage: string;
  name: string;
  // title: string;
  description: string;
}

// Define characterGrid before using it in useState
const characterGrid: Character[] = [
    {
    id: 1,
    image: '/shraddha.jpg',
    centerImage: '/ss.png',
    name: 'Shraddha Mittal',
    // title: '3D Environment artist',
    description: 'I’m Shraddha Mittal, and I serve as the Director of this company. My core responsibility is the day-to-day success and cohesion of our efforts. I focus intensely on helping the team thrive, ensuring they have the resources and support needed to excel in their roles. Simultaneously, I manage all the things—from strategic planning and operational oversight to making sure every detail runs smoothly. My goal is to maintain a clear vision and an organized structure so our talented team can focus on achieving greatness'
  },
  {
    id: 2,
    image: '/jaswant.jpg',
    centerImage: '/characters/2.png',
    name: 'Jaswant Singh',
    // title: '3D Environment artist',
    description: 'I’m Jaswant Singh, and my approach to building Magadha and creating Antarya is rooted in being super intelligent and a meticulous decision maker. My gaming passion is fueled by strategy. I thrive on foresight, precision, and finding the smartest path forward. Every project we undertake, and every feature in Antarya, is the result of careful, strategic choices. I use my intelligence to ensure Magadha is always moving forward, distinguishing ourselves in the gaming industry through clear, effective, and brilliant strategies.'
  },
  {
    id: 3,
    image: '/pradeep.jpg',
    centerImage: '/pp.png',
    name: 'Prabhdeep Singh ',
    // title: '3D Environment artist',
    description: 'I’m Pradeep, and if there’s one thing that defines me, it’s my absolute passion for gaming. I bring a high level of energy to everything I do, especially when I’m playing. I love to stream and share that excitement and action with my community. For me, gaming isn’t just a hobby—it’s how I connect with others and create dynamic, entertaining content. I live for those high-stakes moments and the interaction with everyone who tunes in.'
  },
    {
    id: 4,
    image: '/ayush.jpeg',
    centerImage: '/ayu.png',
    name: 'Ayush Singh',
    // title: '3D Environment artist',
    description: 'I’m Ayush Singh, and I operate as the Game Development or Environment Lead. My passion lies in sculpting the worlds our players inhabit. As the Environment Lead, I direct the vision, look, and feel of every digital landscape, ensuring every ruin, forest, or cityscape is immersive and technically sound. I take charge of leading the development team, coordinating our efforts, and making sure the entire environment pipeline is optimized to deliver breathtaking and unforgettable gaming experiences.'
  },
  {
    id: 5,
    image: '/robin.jpg',
    centerImage: '/characters/6.png',
    name: 'Robin Kamboj',
    // title: '3D Environment artist',
    description: 'I’m  an environment artist who spends way too much time making virtual world look just right'
  },
  {
    id: 6,
    image: '/khushi.jpg',
    centerImage: '/characters/3.png',
    name: ' Khushi Kesharvani',
    // title: 'Concept Artist',
    description: 'I transform ideas into compelling concepts. Specialized in characters, environment and the worlds that define the creative vision of the project.'
  },
  {
    id: 7,
    image: '/sunita.jpg',
    centerImage: '/characters/16.png',
    name: 'Sunita Kumari',
    // title: '3d animator',
    description: 'I’m a passionate 3D Animator with a keen eye for detail and storytelling. I bring characters and environments to life through motion, emotion, and creativity. Skilled in animation principles, camera dynamics, and visual aesthetics, I aim to create engaging visuals that connect with audiences. I enjoy working on both stylized and realistic projects, and I’m always exploring new techniques and tools to push the boundaries of animation.'
  },
  {
    id: 8,
    image: '/kulvinder.jpg',
    centerImage: '/characters/1.png',
    name: 'Kulvinder Singh',
    // title: 'Sr. 3D Animator',
    description: 'As a Senior 3D Animator, I turn imagination into motion. My work explores the art of storytelling through movement — crafting expressive characters, detailed environments, and lifelike visual worlds. Whether it’s film, advertising, or interactive media, I aim to deliver animation that inspires, engages, and feels alive. Every frame I create is built on passion, precision, and a love for bringing ideas to motion'
  },
  {
    id: 9,
    image: '/jeet.jpg',
    centerImage: '/characters/10.png',
    name: 'Jeet Dey',
    // title: 'Environment Concept artist ',
    description: 'I’m Environment Concept artist passionate about crafting atmosphere worlds that tells stories through light,color,and design. I bring imagination to life through detailed landscapes and visually rich settings for games and flims'
  },
  {
    id: 10,
    image: '/akshat.jpg',
    centerImage: '/characters/4.png',
    name: 'Akshat lamba',
    // title: 'Game Designer',
    description: 'Hi, I’m Akshat Lamba, a game designer passionate about blending storytelling, gameplay, and intuitive design to build worlds that feel alive and engaging. '
  },
  {
    id: 11,
    image: '/amir.jpg',
    centerImage: '/characters/8.png',
    name: 'Aamir Asim Baksh',
    // title: 'Head Content and Story writer',
    description: 'I like to create stories which everyone can relate to.'
  },
  {
    id: 12,
    image: '/ankit.jpg',
    centerImage: '/characters/7.png',
    name: 'Ankit Verma',
    // title: '3D Character Artist',
    description: 'I’m a 3D character artist breathing life into imaginative characters, weaving them into worlds where they become friends, foes, and everything in between.'
  },
  {
    id: 13,
    image: '/sorav.jpg',
    centerImage: '/characters/5.png',
    name: 'Sourav Passi',
    // title: '3d artist and Project Manager',
    description: 'Hey I’m a 3D artist and project manager who turns wild ideas into pixel-perfect realities (and keeps the creative chaos in check). I lead a team of brilliant designers and dreamers who make magic happen,usually before the deadline and after a lot of coffee. Together, we turn imagination into eye candy!'
  },
  {
    id: 14,
    image: '/yagnik.jpg',
    centerImage: '/characters/9.png',
    name: 'Yagnik Dobariya',
    // title: '3D Props artist and level designer',
    description: 'From concept to creation, I transform simple ideas into textured treasures that anchor digital realities. I give weight to fantasy molding metal, wood, and wonder into believable 3D worlds.'
  },
  {
    id: 15,
    image: '/govind.jpg',
    centerImage: '/characters/11.png',
    name: 'Govind Thapa',
    // title: '3D Prop Artist',
    description: 'Creative 3D Artist with a passion for storytelling and design. Blends realism and stylized art to create immersive worlds.'
  },
  {
    id: 16,
    image: '/harsh.jpg',
    centerImage: '/characters/12.png',
    name: 'Harshdeep Singh Gill',
    // title: 'Content Creator',
    description: 'I’ve led teams as a Campaign Manager and Content Consultant, handling scheduling, training, performance reviews, and problem-solving while keeping department goals aligned with organizational objectives and management updates clear.'
  },
  {
    id: 17,
    image: '/shubham.jpg',
    centerImage: '/characters/13.png',
    name: 'Shubham Adhao',
    // title: '3D Character Artist',
    description: 'As a 3D Character Artist, I bring digital heroes, villains, and worlds to life. With a passion for storytelling and design, I create characters that feel alive and connect deeply with audiences. My work blends creativity and precision shaping characters that add emotion, depth, and identity to every project. For me, character art is about giving shape to imagination and life to ideas.'
  },

  //   { 
  //   id: 14, 
  //   image: '/jatin.jpg', 
  //   name: 'Jatin Pandey',
  //   title: 'Game Developer and Designer',
  //   description: 'I’m a game developer passionate about bringing ideas to life through design, code, and a healthy dose of chaos. I focus on building gameplay that feels intuitive and rewarding — and if something breaks along the way, that’s just the prototype learning to walk.'
  // },
  {
    id: 18,
    image: '/arina.jpg',
    centerImage: '/characters/14.png',
    name: 'Ar. Ina Jain',
    // title: ' Content Strategist & Creator',
    description: ' I oversee the end-to-end content production pipeline, developing strategic editorial calendars and proactively capturing high-impact photo and video moments. I manage the full execution workflow, utilizing performance analytics to optimize output, ensuring all visual content drives maximum engagement and directly aligns with core business objectives.'
  },

];



const Team: React.FC = () => {
  // Now characterGrid is defined before useState
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(characterGrid[0]);



  return (
    <section className="bg-black text-white pb-44 px-4 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-0 md:mb-0 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Meet the Warriors Behind Magadha
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The creative minds, code masters, and design visionaries shaping the world of Magadha.
          </p>
          {/* Mentor Section */}
<div className="flex flex-col lg:flex-row items-center justify-between mt-16 mb-20 max-w-5xl mx-auto px-6">
  {/* Left Text Section */}
  <div className="text-left mb-6 lg:mb-0">
    <h2 className="text-3xl font-bold text-yellow-400 mb-2">Our Mentor</h2>
    <h3 className="text-2xl font-semibold text-white">Puneet Mittal</h3>
  </div>

  {/* Right Image Section */}
  <div className="flex-shrink-0">
    <img 
      src="/punit.jpeg" 
      alt="Punit Mittal" 
      className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
    />
  </div>
</div>
{/* Our Team Heading */}
<div className="text-center mb-4 mt-4">
  <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
    Our Team
  </h2>
</div>

        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center relative -mt-8 lg:-mt-12">


          {/* Character Grid */}
          <div className="lg:absolute lg:bottom-10 lg:left-0 z-20 mb-8 lg:mb-0 flex flex-col sm:flex-row items-center gap-6">

            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-3 p-6 rounded-xl backdrop-blur-sm max-w-2xl mx-auto">
              {characterGrid.map((character) => (
                <div
                  key={character.id}
                  onClick={() => setSelectedCharacter(character)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg border-2 cursor-pointer transition-all duration-300 ${selectedCharacter.id === character.id
                    ? 'border-yellow-500 scale-110 opacity-100'
                    : 'border-gray-600 opacity-70 hover:opacity-100'
                    }`}
                >

                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full rounded-md object-cover"
                  />

                </div>

              )
              )
              }

            </div>
          </div>

          {/* Center Large Image (changes dynamically) */}
          <div className="flex-shrink-0 relative top-12 lg:top-22 mx-auto z-10 mb-8 lg:mb-0 transition-all duration-500 flex justify-center">


            <img
              key={selectedCharacter.id}
              src={selectedCharacter.centerImage}
              alt={selectedCharacter.name}
              className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[580px] lg:h-[580px] xl:w-[720px] xl:h-[720px] object-contain rounded-2xl shadow-lg transition-opacity duration-500"
            />
          </div>



          {/* Character Info */}
          <div className="flex-1 lg:absolute lg:-right-32 lg:top-70 max-w-md w-full px-4 mt-4 lg:mt-0 z-20">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-2">{selectedCharacter.name}</h2>
              {/* <h3 className="text-lg text-yellow-400 mb-4 font-semibold">{selectedCharacter.title}</h3> */}
              <p className="text-gray-300 text-base leading-relaxed">{selectedCharacter.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grass Image */}
      <div className="w-full mt-8 relative z-10">
        <img
          src="/teamgrassimage.png"
          alt="Team Background"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Team;