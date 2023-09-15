'use client';
import { Link } from '@chakra-ui/next-js';
import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react';

export default function Page() {
  const { toggleColorMode } = useColorMode();
  const formBackGround = useColorModeValue('gray.100', 'gray.700');
  // 文字の色をライトモード時には黒、ダークモード時には白にする
  const textColor = useColorModeValue('gray.700', 'gray.100');
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Flex direction='column' background={formBackGround} padding={12} rounded={6}>
        <Heading mb={6} color={textColor}>
          Log in
        </Heading>
        <Input placeholder='sample@sample.com' variant='filled' mb={3} type='email' />
        <Input placeholder='********' variant='filled' mb={6} type='password' />
        <Button mb={6} colorScheme='teal' color={textColor}>
          Log in
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  );
}
