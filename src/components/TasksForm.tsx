import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onNewTask: (task: string) => void;
}

const TaskForm = ({ onNewTask }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box
      paddingX={5}
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      borderRadius={50}
      border="1px"
      boxSize={{ base: "300px", lg: "500px" }}
    >
      <Heading paddingY={5}>Add new task</Heading>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onNewTask(ref.current.value);
        }}
      >
        <Box mb={5}>
          <label htmlFor="">
            <Input ref={ref} id="name" placeholder="Type some task..."></Input>
          </label>
        </Box>
        <Button colorScheme="blue"> Add new task!</Button>
      </form>
    </Box>
  );
};

export default TaskForm;
