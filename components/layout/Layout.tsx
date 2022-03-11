import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { FC, ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
