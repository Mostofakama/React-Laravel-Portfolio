
import HomeTitleContainer from "../Container/HomeTitleContainer";
import ServicesCard from "./ServicesCard";


const WhatIDo = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and elegant websites using React, Laravel, and more.',
      image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Web+Development',
    },
    {
      title: 'Mobile App Development',
      description: 'Creating mobile applications for both iOS and Android platforms.',
      image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Mobile+App+Development',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-friendly and beautiful interfaces for seamless experiences.',
      image: 'https://via.placeholder.com/150/FFFFFF/000000?text=UI+UX+Design',
    },
    {
      title: 'E-commerce Development',
      description: 'Building custom e-commerce solutions to help businesses thrive online.',
      image: 'https://via.placeholder.com/150/FFFFFF/000000?text=E-Commerce+Development',
    },
    {
      title: 'Cloud Computing',
      description: 'Providing scalable and reliable cloud infrastructure solutions.',
      image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Cloud+Computing',
    },
    {
      title: 'Digital Marketing',
      description: 'Helping businesses grow with innovative digital marketing strategies.',
      image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Digital+Marketing',
    },
    {
      title: 'SEO Services',
      description: 'Optimizing websites for better search engine rankings and visibility.',
      image: 'https://via.placeholder.com/150/FFFFFF/000000?text=SEO+Services',
    },
    {
      title: 'Graphic Design',
      description: 'Creating visually appealing graphics for various digital and print media.',
      image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Graphic+Design',
    },
  ];
  
  
  return (
   <>
   <HomeTitleContainer 
    Description='I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume andproject portfolio.'
    Title='What I do'
    Button='Services & Pricing'
    To='#'
    Gray={false}
    />
    <ServicesCard services={services} />
   </>
    
   
  );
};

export default WhatIDo;

