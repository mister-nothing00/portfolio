import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import { BsStars } from "react-icons/bs";
import React, { memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { useProjects } from "../../context/Projects";
import { Link as RouterLink } from "react-router-dom";
import { FaLink, FaGithub } from "react-icons/fa";
import { IoChevronDownCircle } from "react-icons/io5";

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

function Cards() {
  const { projects, fetchProjects } = useProjects();
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Flex
      id="creations"
      flexDirection={"column"}
      fontFamily={"Montserrat"}
      my={{ base: "80px" }}
    >
      <Box
        display={"flex"}
        justifyContent={{ base: "center", md:"center" }}
        alignItems={"center"}
        mb={{base:0, md:12, lg:16}}
      >
        <BsStars size={isMobile ? 28 : 48} color="gray.100" />
        <Heading
          fontFamily={"Montserrat"}
          letterSpacing={0.5}
          fontSize={{ base: "6xl", md: "8xl", lg:"9xl" }}
          ml={2}
          mb={{base:4, md:0}}
          color={"#91c0f2"}
        >
          Creation
        </Heading>
      </Box>
      <Text
        display={"flex"}
        justifyContent={{base:"center"}}
        animation={"linear"}
        fontFamily={"Montserrat"}
        letterSpacing={0.5}
        fontSize={"xs"}
        color={"gray.400"}
        width={"100%"}
      >
        Scroll left or right
      </Text>
      <Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <SwiperSlide key={project._id}>
                <Box
                  boxShadow={
                    "  rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                  }
                  overflow="auto"
                  p={4}
                  mb={16}
                  bg="transparent"
                  width={"98%"}
                  mx={"auto"}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width="auto"
                    borderRadius="md"
                    objectFit={"cover"}
                  />
                  <Text fontSize="lg" fontWeight="bold" mt={2}>
                    {project.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mt={1} mb={4}>
                    {truncateText(project.description, 68)}
                  </Text>
                  <Box display={"flex"}>
                    <Link
                      as={RouterLink}
                      to={project.webLink}
                      target="_blank"
                      color={"blue.400"}
                      textDecoration={"none"}
                      fontFamily={"Montserrat"}
                      mb={2}
                    >
                      <FaLink />
                      <Text
                        fontSize="sm"
                        display={"flex"}
                        alignItems={"center"}
                        color={"gray.400"}
                        _hover={{ color: "white", transition: "all 0.3s ease" }}
                      >
                        Web
                      </Text>
                    </Link>
                  </Box>
                  <Link
                    as={RouterLink}
                    to={project.githubLink}
                    target="_blank"
                    color={"blue.400"}
                    textDecoration={"none"}
                    fontFamily={"Montserrat"}
                  >
                    <FaGithub />
                    <Text
                      fontSize="sm"
                      display={"flex"}
                      alignItems={"center"}
                      color={"gray.400"}
                      _hover={{ color: "white", transition: "all 0.3s ease" }}
                    >
                      GitHub
                    </Text>
                  </Link>
                </Box>
              </SwiperSlide>
            ))
          ) : (
            <Text>No projects available</Text>
          )}
        </Swiper>
      </Box>
      {/*Scroll down* */}
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        mb={4}
        animation="bounce 2s infinite"
      >
        <IoChevronDownCircle size={32} />
      </Box>
    </Flex>
  );
}
export default memo(Cards);
