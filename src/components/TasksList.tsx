import {
  Heading,
  Input,
  Button,
  Box,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { FaDeleteLeft } from "react-icons/fa6";

interface Props {
  list: string[];
}

const TasksList = ({ list }: Props) => {
  return (
    <Box
      paddingX={5}
      display="flex"
      flexDirection={"column"}
      borderRadius={50}
      border="1px"
      minW={{ base: "300px", lg: "500px" }}
      minH={{ base: "300px", lg: "500px" }}
      boxSize={{ base: "fit-content", lg: "fit-content" }}
    >
      <Heading textAlign="center" paddingY={5}>
        List
      </Heading>
      <List>
        {list.map((item) => {
          return (
            <ListItem>
              <Flex mb={3} justifyContent="space-between" alignItems="center">
                <Heading whiteSpace="wrap">{item}</Heading>
                <Button colorScheme="red" variant="outline">
                  <FaDeleteLeft color="red.100" fontSize="35px" />
                </Button>
              </Flex>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default TasksList;
