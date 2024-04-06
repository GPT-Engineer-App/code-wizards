import React, { useState } from "react";
import { Box, Heading, Text, Stack, Input, Button, Grid, Badge, Avatar, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const developers = [
  {
    id: 1,
    name: "John Doe",
    location: "New York",
    technologies: ["React", "Node.js", "JavaScript"],
    avatar: "https://images.unsplash.com/photo-1469833120660-1a218b53d28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyMzI4NjAxfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "London",
    technologies: ["Angular", ".NET", "C#"],
    avatar: "https://images.unsplash.com/photo-1485217988980-11786ced9454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTIzMjg2MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Mike Johnson",
    location: "San Francisco",
    technologies: ["React", "Go", "JavaScript"],
    avatar: "https://images.unsplash.com/photo-1514543250559-83867827ecce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyMzI4NjAxfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Sarah Lee",
    location: "Toronto",
    technologies: ["Vue.js", "Node.js", "JavaScript"],
    avatar: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTIzMjg2MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredDevelopers = developers.filter((developer) => developer.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDeveloperClick = (developer) => {
    setSelectedDeveloper(developer);
    onOpen();
  };

  return (
    <Box maxWidth="800px" margin="0 auto" padding="20px">
      <Heading as="h1" size="xl" textAlign="center" marginBottom="40px">
        Claude Particles
      </Heading>
      <Text fontSize="xl" textAlign="center" marginBottom="40px">
        Discover and connect with top software talent specializing in web technologies
      </Text>
      <Stack spacing={4} direction="row" align="center" marginBottom="40px">
        <Input placeholder="Search developers..." value={searchTerm} onChange={handleSearch} />
        <Button leftIcon={<FaSearch />} colorScheme="blue">
          Search
        </Button>
      </Stack>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
        {filteredDevelopers.map((developer) => (
          <Box key={developer.id} borderWidth="1px" borderRadius="lg" padding="20px" cursor="pointer" onClick={() => handleDeveloperClick(developer)}>
            <Avatar size="xl" src={developer.avatar} marginBottom="20px" />
            <Heading as="h2" size="md" marginBottom="10px">
              {developer.name}
            </Heading>
            <Text marginBottom="10px">{developer.location}</Text>
            <Stack direction="row" spacing={2}>
              {developer.technologies.map((tech) => (
                <Badge key={tech} colorScheme="green">
                  {tech}
                </Badge>
              ))}
            </Stack>
          </Box>
        ))}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Developer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedDeveloper && (
              <Box>
                <Heading as="h3" size="md" marginBottom="20px">
                  Send a message to {selectedDeveloper.name}
                </Heading>
                <FormControl id="message">
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Enter your message..." />
                </FormControl>
                <Button colorScheme="blue" marginTop="20px">
                  Send Message
                </Button>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
