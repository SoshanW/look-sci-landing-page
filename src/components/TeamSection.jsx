import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const TeamMember = ({ name, role, description, image, index }) => {
  return (
    <div className="team-member relative group overflow-hidden rounded-lg opacity-0 translate-y-20" data-index={index}>
      <div className="h-64 w-full">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
        <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-300 text-sm mb-2">{role}</p>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animate the heading and subtitle
    gsap.to('#team-heading', {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#team-heading',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.to('#team-subtitle', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: '#team-heading',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate team members
    gsap.to('.team-member', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  const teamMembers = [
    {
      name: "Naflan Nazar",
      role: "...",
      description: "Enthusiastic game developer with a passion for creating interactive experiences.",
      image: "../assets/images/naflan.jpg"
    },
    {
      name: "Soshan Wijayarathne",
      role: "...",
      description: "Singer, Songwriter and Full Stack Developer with experience in many programming languages and principles.",
      image: "../assets/images/soshan.jpg"
    },
    {
      name: "Vonara Perera",
      role: "...",
      description: "Tiktoker, Social Media handler and enthusiastic front end developer.",
      image: "../assets/images/vonara.jpg"
    },
    {
      name: "Mariyam Jameela",
      role: "...",
      description: "Blender Guru, 3D artist and front end developer focused on UI/UX.",
      image: "../assets/images/mariyam.jpg"
    },
    {
      name: "Shemeshi Robert",
      role: "...",
      description: "Versatile developer proficient in both frontend and backend technologies. Loves solving complex problems.",
      image: "../assets/images/shemeshi.jpg"
    },
    {
      name: "Vinuki Rathnayake",
      role: "...",
      description: "Certified project manager with expertise in agile methodologies. Ensures smooth project delivery.",
      image: "../assets/images/vinuki.jpg"
    }
  ];

  return (
    <section ref={sectionRef} className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-16 w-full text-center">
          <h1 
            id="team-heading" 
            className="text-5xl lg:text-7xl font-semibold mb-4 opacity-0 translate-y-20"
          >
            Meet Our Team
          </h1>
          <p 
            id="team-subtitle" 
            className="text-gray-400 text-xl opacity-0 translate-y-20"
          >
            The creative minds behind our success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              index={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;