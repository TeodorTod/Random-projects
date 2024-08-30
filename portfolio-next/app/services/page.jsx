"use client";

import { FaCode, FaUser, FaChartLine, FaNode } from 'react-icons/fa';
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Front-end web development",
    description:
      "I specialize in creating responsive and dynamic user interfaces using React and Angular. My focus is on delivering sleek, user-friendly designs that work seamlessly across all devices.",
    icon: <FaCode style={{ fontSize: '3rem' }} />, 
    href: "",
  },
  {
    num: "02",
    title: "Back-end web development",
    description:
      " I build robust and scalable server-side applications using Node.js and Express.js. My goal is to create efficient and secure back-end solutions that power your web applications effectively.",
    icon: <FaNode style={{ fontSize: '2rem' }} />, 
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      " I design intuitive and visually appealing user interfaces that enhance user experience. My designs prioritize functionality and ease of use, ensuring your users enjoy every interaction.",
    icon: <FaUser style={{ fontSize: '3rem' }} />,
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I help improve your website's visibility on search engines(Google, Bing, Yahoo etc.), driving more organic traffic and increasing your online presence with effective SEO strategies.",
    icon: <FaChartLine style={{ fontSize: '3rem' }} />, 
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <div className="w-[70px] h-[70px] rounded-full bg-white transition-all duration-500 flex justify-center items-center group-hover:bg-accent hover:-rotate-45">
                    <div className="text-black group-hover:text-white transition-colors duration-500">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60 ">
                  {service.description}
                </p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
