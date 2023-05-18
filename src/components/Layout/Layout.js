import { StyledLink } from 'commonStyles.styled';
import { AppBar } from 'components/AppBar/AppBar';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<StyledLink>Loading ...</StyledLink>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
