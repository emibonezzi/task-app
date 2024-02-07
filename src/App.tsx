import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import "./App.css";
import TaskForm from "./components/TasksForm";
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <Grid
      gap={3}
      justifyContent="center"
      justifyItems="center"
      gridTemplateAreas={{
        base: `"title" "new_task" "tasks"`,
        lg: `"title title" 
             "new_task tasks"`,
      }}
      gridTemplateColumns={{ base: "auto", lg: "auto" }}
    >
      <GridItem m={10} textAlign="center" area={"title"}>
        <Heading fontSize={{ base: "4xl", lg: "6xl" }}>
          Minimal ToDo App
        </Heading>
      </GridItem>
      <GridItem area={"new_task"}>
        <TaskForm></TaskForm>
      </GridItem>
      <GridItem area={"tasks"}></GridItem>
    </Grid>
  );
}

export default App;
