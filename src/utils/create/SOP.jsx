import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
} from "@chakra-ui/react";

function SOP() {
  const [name, setName] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
    console.log({ name, hour, minute, duration });
    alert(
      `Submitted:\nName: ${name}\nHour: ${hour}\nMinute: ${minute}\nDuration: ${duration}`
    );
  };

  return (
    <Box p={5} boxShadow="md" borderWidth="1px">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Standard Operating Procedure Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Hour (0-23)</FormLabel>
            <NumberInput max={23} min={0} value={hour} onChange={setHour}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Minute (0-59)</FormLabel>
            <NumberInput
              step={15}
              max={59}
              min={0}
              value={minute}
              onChange={setMinute}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Duration (minutes)</FormLabel>
            <NumberInput
              step={15}
              min={0}
              value={duration}
              onChange={setDuration}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default SOP;
