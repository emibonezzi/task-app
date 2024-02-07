import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import "./App.css";
import TaskForm from "./components/TasksForm";
import { useState } from "react";
import TasksList from "./components/TasksList";

function App() {
  const [toDoList, setToDoList] = useState<string[]>([]);

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
        <TaskForm
          onNewTask={(task) => setToDoList([...toDoList, task])}
        ></TaskForm>
      </GridItem>
      <GridItem area={"tasks"}>
        <TasksList list={toDoList}></TasksList>
      </GridItem>
    </Grid>
  );
}

export default App;
