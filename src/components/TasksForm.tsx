import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdAddTask } from "react-icons/md";

const schema = z.object({
  task: z.string().min(3, { message: "Task must be at least 3 characters" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onNewTask: (task: string) => void;
}

const TaskForm = ({ onNewTask }: Props) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <Grid
      padding={5}
      gridTemplateAreas={`"title" "form"`}
      gridTemplateColumns="1fr"
      justifyContent="center"
      justifyItems="center"
      borderRadius={50}
      border="1px"
      boxSize={{ base: "300px", lg: "500px" }}
    >
      <GridItem area="title">
        <Heading
          gridArea={"title"}
          fontSize={{
            base: "4xl",
            lg: "6xl",
          }}
          pb={3}
        >
          <MdAddTask></MdAddTask>
        </Heading>
      </GridItem>
      <GridItem area="form">
        <Box mb={3}>
          <form
            onSubmit={handleSubmit((event) => {
              onNewTask(event.task);
              reset();
            })}
          >
            <label htmlFor="name"> </label>
            <InputGroup>
              <Input
                {...register("task")}
                mb={3}
                size={{ lg: "lg" }}
                id="name"
                placeholder="Type some task..."
              ></Input>
            </InputGroup>
            {errors.task && (
              <Text color="red.300" mb={3}>
                {errors.task.message}
              </Text>
            )}
            <Button
              fontSize={{
                base: "sm",
                lg: "md",
              }}
              type="submit"
              colorScheme="blue"
            >
              Add
            </Button>
          </form>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default TaskForm;
