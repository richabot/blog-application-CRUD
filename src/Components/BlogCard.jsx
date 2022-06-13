import React from 'react'
import {Image,Text, Box,Center,Heading,Stack,useColorModeValue, Avatar, Button} from "@chakra-ui/react"
import { Link  } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteBlogPost } from '../Redux/Blogs/action';

const BlogCard = ({blog}) => {

  // const {id} =useParams();
  const dispatch=useDispatch()
//  const location =useLocation()
//   const currentBlog=useSelector((state) => state.blogreducer.currentBlog);

  const handledelete=()=>{
    dispatch(deleteBlogPost(blog.id))

  }
  return (
    <Center my={6}>
        <Box maxW={"445px"} 
        w="full" 
        bg={useColorModeValue("whihte","grey.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={
            "hidden"
        }
        >
            <Box>
                <Image src={`${blog.thumbnail_pic}`}/>
            </Box>
            <Link to={`/articles/${blog.id}`}>
            <Stack>
                <Text>Blog1</Text>
                <Heading>{blog.title}</Heading>
                <Text>{blog.description}</Text>
            </Stack>
         <Stack>
         <Avatar src={`${blog.author.profile_pic}`} alt={"Author"}/>
           <Stack direction ={"column"} spacing={0} >
            <Text fontWeight={600}>{blog.author.name}</Text>
            <Text color={"gray.600"}>{blog.publish_date}</Text>
           </Stack>
    
         </Stack>
         </Link>

         <Button onClick={handledelete}>Delete</Button>
        </Box>
    </Center>
    
  )
}

export default BlogCard