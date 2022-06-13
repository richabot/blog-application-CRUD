import {
  Box,

  Container,

  Heading,
 
} from "@chakra-ui/react";
import React from "react";


import ArticleUpdater from "../Components/ArticleUpdater";
const CreateArticle = () => {

  // const initialValues = {
  //   title: "",
  //   sub_title: "",
  //   thumbnail_pic: "",
  //   description: "",
  //   author_name: "",
  //   author_profile_pic:
  //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
  // };

  // const [formData, setFormData] = useReducer(
  //   (currData, newData) => ({ ...currData, ...newData }),
  //   initialValues
  // );

  // const handleFormDataChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ [name]: value });
  // };

 
  
  return (
    <Container>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Create Article</Heading>
      </Box>
      <ArticleUpdater />
    </Container>
  );
};

export default CreateArticle;
