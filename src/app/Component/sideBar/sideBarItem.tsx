import { BoxProps, useDisclosure } from '@chakra-ui/react';
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
} from '@/redux/features/selectPage';
import { useAppDispatch } from '@/redux/hooks';

interface NavItemComponentByPageProps extends BoxProps {
  onClose: () => void;
  link: LinkItemProps;
}

export function NavItemComponentByPage({ link, onClose, ...rest }: NavItemComponentByPageProps) {
  const dispatch = useAppDispatch();
  return (
    <NavItem
      key={link.name}
      icon={link.icon}
      onClick={() => {
        // バグでステートが変更できていな事象にあったが、switchケースで処理が抜け出せていなかったから
        // 出す為にreturnをつけないといけない
        switch (link.name) {
          case 'Home':
            dispatch(selectHome());
            onClose();
            return;
          case 'Trending':
            dispatch(selectTrending());
            onClose();
            return;
          case 'Explore':
            dispatch(selectExplore());
            onClose();
            return;
          case 'Favorite':
            dispatch(selectFavorite());
            onClose();
            return;
          case 'Settings':
            dispatch(selectSettings());
            onClose();
            return;
          default:
            dispatch(selectHome());
            return;
        }
      }}
    >
      {link.name}
    </NavItem>
  );
}
