'use client';

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  BoxProps,
  FlexProps,
  As,
  Button,
  Divider,
} from '@chakra-ui/react';
import React, { ReactNode, ReactText } from 'react';

import { SideBarItems } from '../../page';
import { NavItem } from './navItem';
import { NavItemComponentByPage } from './sideBarItem';
import {
  selectExplore,
  selectFavorite,
  selectHome,
  selectSettings,
  selectTrending,
} from '@/redux/features/SelectPage';
import { useAppDispatch } from '@/redux/hooks';

export interface LinkItemProps {
  name: string;
  icon: ReactNode;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export function SidebarContent({ onClose, ...rest }: SidebarProps) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          SideBar
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {SideBarItems.map((link) => (
        <NavItemComponentByPage link={link} key={'ff'} />
      ))}
      {/* 細い区切り線 */}
      <Divider my='2' />
      {/* サイトのフィードリスト（アコーディオンメニュー） */}

    </Box>
  );
}
