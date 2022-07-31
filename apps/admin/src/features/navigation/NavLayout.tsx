import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const NavLayout: FC = () => {
  return (
    <>
      <header>
        <h1>Project Tracker - Admin</h1>
      </header>
      <nav>
        <ul>
          <li>Projects</li>
          <li>New Project</li>
          <li>New Milestone</li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavLayout;
