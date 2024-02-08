import {
  Heading,
  Input,
  Button,
  Box,
  List,
  ListItem,
  Flex,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { FaTasks } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface Props {
  list: string[];
  onDelete: (index: number) => void;
}

const TasksList = ({ onDelete, list }: Props) => {
  return (
    <Box
      padding={5}
      display="flex"
      flexDirection={"column"}
      borderRadius={50}
      border="1px"
      minW={{ base: "300px", lg: "500px" }}
      minH={{ base: "300px", lg: "500px" }}
      boxSize={{ base: "fit-content", lg: "fit-content" }}
    >
      <Heading
        alignSelf="center"
        textAlign="center"
        fontSize={{
          base: "4xl",
          lg: "6xl",
        }}
        pb={3}
      >
        <FaTasks />
      </Heading>
      <List>
        {list.map((item, i) => {
          return (
            <ChakraBox
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
              }}
            >
              <ListItem>
                <Flex mb={3} justifyContent="space-between" alignItems="center">
                  <Heading
                    fontSize={{
                      base: "2xl",
                      lg: "4xl",
                    }}
                    whiteSpace="wrap"
                  >
                    {item}
                  </Heading>
                  <Button
                    fontSize={{
                      base: "xl",
                      lg: "4xl",
                    }}
                    onClick={() => onDelete(i)}
                    colorScheme="red"
                    variant="outline"
                  >
                    <MdDelete color="red.100" />
                  </Button>
                </Flex>
              </ListItem>
            </ChakraBox>
          );
        })}
      </List>
    </Box>
  );
};

export default TasksList;
