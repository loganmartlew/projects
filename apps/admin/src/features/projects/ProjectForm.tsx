import { ProjectStatus } from '@project-tracker/types';
import { FC } from 'react';

const ProjectForm: FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" />
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select id="status">
          {Object.values(ProjectStatus).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;
