import { BoxProps } from '@chakra-ui/react';
import link from 'next/link';
import React, { ReactNode, ReactText } from 'react';
import { NavItem } from './navItem';
import { LinkItemProps } from './sideBar';
import {
  selectHome,
  selectTrending,
  selectExplore,
  selectFavorite,
  selectSettings,
} from '@/redux/features/SelectPage';
import { useAppDispatch } from '@/redux/hooks';

interface NavItemComponentByPageProps extends BoxProps {
  // onClose: () => void;
  link: LinkItemProps;
}

export function NavItemComponentByPage({ link, ...rest }: NavItemComponentByPageProps) {
  const dispatch = useAppDispatch();
  return (
    <NavItem
      key={link.name}
      icon={link.icon}
      onClick={() => {
        // ステートにリンクの名前を渡す
        console.log(link.name);
        switch (link.name) {
          case 'Home':
            console.log('on Click Home');
            dispatch(selectHome());
          case 'Trending':
            dispatch(selectTrending());
          case 'Explore':
            dispatch(selectExplore());
          case 'Favorite':
            dispatch(selectFavorite());
          case 'Settings':
            dispatch(selectSettings());
          default:
            dispatch(selectHome());
        }
      }}
    >
      {link.name}
    </NavItem>
  );
}
