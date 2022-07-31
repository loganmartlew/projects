import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { routes } from './routes';

const NavLayout: FC = () => {
  return (
    <>
      <header>
        <Link to={`/`}>
          <h1>Project Tracker - Admin</h1>
        </Link>
      </header>
      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavLayout;
