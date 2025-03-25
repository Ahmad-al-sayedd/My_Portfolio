import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import { motion } from "framer-motion"; // Import motion for animations
import "swiper/css";
import "swiper/css/autoplay";
import "./Projects.scss";

import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import { projects } from "./ProjectsData";

export default function Projects() {
  const [stylingDescriptionIndex, setStylingDescriptionIndex] = useState(null);

  const handleOpenTHeDescription = (index) => {
    setStylingDescriptionIndex(stylingDescriptionIndex === index ? null : index);
  };

  return (
    <section id="projects" className="projects">
      <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        Projects
      </motion.h2>

      <Swiper
        modules={[Autoplay]} 
        spaceBetween={30} 
        slidesPerView={1} 
        loop={true} 
        freeMode={true} 
        speed={6000} 
        autoplay={{
          delay: 0, // Auto slide every 3 seconds
          disableOnInteraction: true,
          pauseOnMouseEnter:true // Keep autoplay after interaction
        }}
        breakpoints={{
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.article initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.3 }}>
              <h1 style={{ color: "white", padding: "1rem 0rem" }}>{project.title}</h1>
              <figure>
                {/* Image with no scaling on hover */}
                <motion.img
                  src={project.imgSrc}
                  alt={project.altText}
                  whileHover={{ x: 0, y: 0, scale: 1 ,background:'red'}}                   transition={{ duration: 0 }}  // No transition for hover stop
                />
              </figure>

              <motion.button
                onClick={() => handleOpenTHeDescription(index)}
                whileHover={{ scale: 1 }}  // No scaling on hover
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <MdKeyboardArrowUp
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    transform: stylingDescriptionIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </motion.button>

              <section className={stylingDescriptionIndex == index ? "sectionOfDescription-active" : "sectionOfDescription"}>
                <div>
                  <p>{project.description}</p>
                  <a target="_blank" href={project.Gitlink}>Github Page</a>
                  <a target="_blank" href={project.DemoLink === "Not Available" ? "#" : project.DemoLink}>
                    {project.DemoLink === "Not Available" ? "Not Available" : "Go To Website"}
                  </a>
                </div>
              </section>
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
