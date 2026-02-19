import React from 'react'

// SKILLS COMPONENT
function Skills() {
  // ARRAY OF SKILL CATEGORIES AND THEIR SPECIFIC SKILLS
  const skills = [
    { title:'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS' ],
     },

     { title:'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB' ],
     },
     
     { title:'Tools',
      skills: ['Git', 'Figma', 'VS Code', 'Vercel' ],
     },
     
     { title:'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Time Management' ],
     },
  ]

  return ( <div>
    <div className='min-h-screen bg-zinc-50 flex items-center px-6 md:px-40 pt-20'>
      <div className='max-w-6xl w-full'>

        {/* HEADING */}
        <h1 className='text-3xl md:text-6xl font-bold mb-10 md:mb-16'>Skills & Expertise</h1>
        <div className='flex flex-wrap md:flex-nowrap justify-between gap-6 md:gap-10'>

          {/* MAP OVER EACH SKILL CATEGORY */}
          {skills.map((skill, index) => (
            <div key={index} className='w-64 mb-8'>

              {/* SKILL CATEGORY TITLE */}
              <p className='text-2xl font-bold'>{skill.title}</p>
              <hr className='my-4 border-gray-300 w-full'/>

              {/* LIST OF SKILLS FOR THIS CATEGORY */}
              <ul className='text-gray-500'>
                {skill.skills.map((item, i) => (
                  <li className='pb-2' key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Skills
