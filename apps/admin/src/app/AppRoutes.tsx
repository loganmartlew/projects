import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavLayout from '../features/navigation/NavLayout';

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/projects" element={<h1>View Projects</h1>} />
          <Route path="/projects/edit" element={<h1>Edit Project</h1>} />
          <Route path="/projects/:id" element={<h1>View Project Details</h1>} />
          <Route path="/milestones/edit" element={<h1>Edit Milestone</h1>} />
          <Route
            path="/milestones/:id"
            element={<h1>View Milestone Details</h1>}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
