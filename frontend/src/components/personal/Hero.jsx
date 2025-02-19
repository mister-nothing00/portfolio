import { memo } from "react";
<<<<<<< HEAD
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { MdOutlineTouchApp } from "react-icons/md";
import { IoChevronDownCircle } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";
=======
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { MdOutlineTouchApp } from "react-icons/md";
import { IoChevronDownCircle } from "react-icons/io5";
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
import DarkContainer from "../../assets/containerBlack.svg";

function Hero() {
  return (
    <>
      <Flex
        id="hero"
        width={"100%"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={{ base: "center", md: "center" }}
        height={{ base: "auto", md: "100vh" }}
<<<<<<< HEAD
        py={{ base: 12, md: 0 }}
=======
        py={{ base: 10, md: 0 }}
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
        px={4}
        gap={{ base: 6, md: 2 }}
      >
        {/* Presentation */}
        <Box
          display={"flex"}
          flexDirection={"column"}
<<<<<<< HEAD
          justifyContent={{ base: "center", md: "space-around" }}
          alignItems={{ base: "center", md: "flex-start" }}
          width={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
          gapY={{ base: 2 }}
=======
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems={{ base: "center", md: "flex-start" }}
          width={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
        >
          {/* Technologies stack */}
          <Box
            display={"flex"}
<<<<<<< HEAD
            justifyContent={{ base: "space-between", md: "flex-start" }}
            alignItems={"center"}
            gapX={3}
            flexWrap="wrap"
            fontFamily={"Montserrat"}
            mb={{ base: 6, md: 12 }}
          >
            {["MERN Stack", "React Native", "WordPress"].map((tech, i) => (
              <Button
                key={i}
                letterSpacing={0.5}
                fontWeight={"semibold"}
                size={{ base: "xs", md: "xs" }}
                marginBottom={{ base: 2, md: 0 }}
                rounded={"full"}
                boxShadow=" rgba(100, 100, 111, 0.5) 0px 2px 12px 0px"
                variant={"outline"}
                border={"1px solid #eaeaea"}
                width={{ base: "auto", md: "auto" }}
=======
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={"center"}
            gapX={3}
            flexWrap="wrap" 
            fontFamily={"Montserrat"}
            mb={{ base: 6, md: 12 }}
          >
            {["MERN Stack", "React Native", "WordPress"].map((tech) => (
              <Button
                key={tech}
                letterSpacing={0.5}
                fontWeight={"semibold"}
                size={{ base: "sm", md: "xs" }}
                marginBottom={{ base: 2, md: 0 }}
                rounded={"full"}
                variant={"outline"}
                border={"0.5px solid #eaeaea"}
                width={{ base: "100%", md: "auto" }} // Ensures it stays on the same row on larger screens
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
                _hover={{
                  fontWeight: "bold",
                  backgroundColor: "#a3cfff",
                  color: "blackAlpha.900",
                  border: "none",
                  transform: "translateY(-2px)",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  transition: "all 0.2s ease-in",
                }}
              >
                {tech}
              </Button>
            ))}
          </Box>

          <Heading
            fontFamily={"Montserrat"}
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight={"semibold"}
            color={"gray.400"}
          >
            Hello, I'm
          </Heading>
          <Text
            letterSpacing={0.5}
            fontFamily={"Montserrat"}
            fontSize={{ base: "5xl", md: "8xl" }}
            fontWeight={"bold"}
            color={"white"}
            mb={2}
          >
            Francesco
          </Text>
          <Text fontFamily={"Montserrat"} fontSize={{ base: "sm", md: "md" }}>
            An entry-level full-stack developer specializing in React Native,
            WordPress, and the MERN stack, passionate about building intuitive
            and impactful digital solutions.
          </Text>

          {/* Buttons */}
          <Flex
<<<<<<< HEAD
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
              xlTo2xl: "row",
            }}
=======
            flexDirection={{ base: "column", md: "row" }}
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
            alignItems={"center"}
            gap={4}
            my={6}
          >
<<<<<<< HEAD
            <Link
              as={RouterLink}
              to="https://www.linkedin.com/in/francesco-di-vita-113355183/"
              target="_blank"
            >
              <Button
                background={"transparent"}
                boxShadow={"rgba(236, 236, 236, 0.5) 2px 2px 8px "}
                display={"flex"}
                alignItems={"center"}
                variant={"solid"}
                fontFamily={"Montserrat"}
                size={{ base: "md" }}
                fontSize={"lg"}
                backgroundColor={"#eaeaea"}
                color={"black"}
                rounded={"4xl"}
              >
                Get in Touch <MdOutlineTouchApp />
              </Button>
            </Link>
            <Link
              as={RouterLink}
              to="https://github.com/mister-nothing00"
              target="_blank"
            >
              <Button
                fontFamily={"Montserrat"}
                fontSize={"md"}
                variant={"outline"}
                rounded={"4xl"}
              >
                Watch more
              </Button>
            </Link>
=======
            <Button
              display={"flex"}
              alignItems={"center"}
              variant={"solid"}
              fontFamily={"Montserrat"}
              fontSize={"md"}
              backgroundColor={"#eaeaea"}
              color={"black"}
              rounded={"4xl"}
            >
              Get in Touch <MdOutlineTouchApp />
            </Button>
            <Button
              fontFamily={"Montserrat"}
              fontSize={"md"}
              variant={"outline"}
              rounded={"4xl"}
            >
              Learn more
            </Button>
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
          </Flex>
        </Box>

        {/* Technologies */}
<<<<<<< HEAD
        <Box
          display={{
            base: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
          width={{ lg: "400px", xl: "500px", xlTo2xl: "650px" }}
        >
=======
        <Box display={"block"} width={{ base: "250px", md: "400px" }}>
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
          <Image
            src={DarkContainer}
            objectFit={"cover"}
            rounded={"xl"}
<<<<<<< HEAD
            width={"100%"}
            border={"2px solid #bfdbfe"}
            className="animated-border"
=======
            border={"1.5px solid #bfdbfe"}
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
          />
        </Box>
      </Flex>

      {/* Scroll down */}
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        mb={4}
        animation="bounce 2s infinite"
      >
        <IoChevronDownCircle size={22} />
      </Box>
    </>
  );
}

export default memo(Hero);
