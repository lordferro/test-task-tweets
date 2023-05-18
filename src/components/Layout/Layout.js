import { AppBar } from 'components/AppBar/AppBar';
import { Button } from 'commonStyles.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Button>Loading ...</Button>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
