import { FlexProps, Flex, Icon, As, Box } from "@chakra-ui/react";
import React, { ReactNode, ReactText } from 'react';

interface NavItemProps extends FlexProps {
  icon: ReactNode;
  children: ReactText;
}

export function NavItem({ icon, children, ...rest }: NavItemProps) {
  return (
    <Box as='a' href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            // _groupHover={{
            //   color: 'white',
            // }}
            as={icon as As} />
        )}
        {children}
      </Flex>
    </Box>
  );
}