'use client';

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  As,
} from '@chakra-ui/react';
import React, { ReactNode, ReactText } from 'react';
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi';
import { MobileNav } from './Component/sideBar/mobileNav';
import { LinkItemProps, SidebarContent } from './Component/sideBar/sideBar';
import { NavItemComponentByPage } from './Component/sideBar/sideBarItem';
import { useAppSelector } from '@/redux/hooks';

// サイドバーアイテムのリンクの名前とアイコンを定義
const SideBarItemsProps = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favorite', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

export const SideBarItems: Array<LinkItemProps> = SideBarItemsProps;

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      {/* displayのベースで画面幅を条件に非表示を切り替えている */}
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='sm'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {/* Content */}
        {/* <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          サイドバーのクリックでここの表示を変える
        </Text> */}
        <Content />
      </Box>
    </Box>
  );
}

function Content() {
  // クリックされたサイドバーの名前を受け取って表示を変える
  const linkName = useAppSelector((state) => state.selectPageReducer.value);
  console.log("Now Select :"+linkName);
  switch (linkName) {
    case 'Home':
      return <Text>Home</Text>;
    case 'Trending':
      return <Text>Trending</Text>;
    case 'Explore':
      return <Text>Explore</Text>;
    case 'Favorite':
      return <Text>Favorite</Text>;
    case 'Settings':
      return <Text>Settings</Text>;
    default:
      return <Text>Home</Text>;
  }
}
