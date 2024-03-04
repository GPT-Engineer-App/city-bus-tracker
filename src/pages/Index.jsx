import React, { useState } from "react";
import { Box, Container, Heading, VStack, Input, Button, Table, Thead, Tbody, Tr, Th, Td, Text, useToast } from "@chakra-ui/react";
import { FaBus, FaSearch } from "react-icons/fa";

// Mock data for bus schedules
const busSchedules = [
  { id: 1, route: "1A", destination: "Downtown", time: "08:00 AM" },
  { id: 2, route: "2B", destination: "Uptown", time: "08:15 AM" },
  { id: 3, route: "3C", destination: "Midtown", time: "08:30 AM" },
  // ... more schedules
];

const Index = () => {
  const [search, setSearch] = useState("");
  const toast = useToast();

  const handleSearch = () => {
    toast({
      title: "Search Feature Not Implemented",
      description: "This is a mockup and the search functionality isn't real.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          <FaBus /> City Bus Tracker
        </Heading>
        <Text fontSize="lg">Find out when your next bus is coming and plan your trip!</Text>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4}>
            <Input placeholder="Search for a bus route..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
              Search
            </Button>
          </VStack>
        </Box>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Route</Th>
              <Th>Destination</Th>
              <Th>Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {busSchedules.map((schedule) => (
              <Tr key={schedule.id}>
                <Td>{schedule.route}</Td>
                <Td>{schedule.destination}</Td>
                <Td>{schedule.time}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
