import {  useSelector } from "react-redux";

// TODO: React-Firebase Auth Hooks (Lucas, 10/9, 13:45);  
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth } from '../firebase/firebase-config';
import useAuth from '../hooks/useAuth';

import {Box, Text, Image   } from '@chakra-ui/react';

export default function Home() {

  return (
    <Box>
      <Text>HOME</Text>
    </Box>
  )
}
