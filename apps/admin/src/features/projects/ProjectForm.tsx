import { ProjectLink, ProjectStatus } from '@project-tracker/types';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import ProjectLinkDialog from './ProjectLinkDialog';

const ProjectForm: FC = () => {
  const [links, setLinks] = useState<ProjectLink[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();

  const addLink = (link: ProjectLink) => {
    const nameExists = links.some(
      (existingLink) => existingLink.name === link.name
    );

    if (nameExists) return;

    setLinks((links) => [...links, link]);
  };

  const removeLink = (link: ProjectLink) => {
    setLinks((links) =>
      links.filter((existingLink) => existingLink.name !== link.name)
    );
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' {...register('name')} />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <textarea id='description' {...register('description')} />
      </div>
      <div>
        <label htmlFor='status'>Status</label>
        <select id='status' {...register('status')}>
          {Object.values(ProjectStatus).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Links</label>
        <button onClick={() => setModalOpen(true)}>+</button>
        <ul>
          {links.map((link) => (
            <li key={link.url}>
              <p>{link.type}</p>
              <p>{link.name}</p>
              <p>{link.url}</p>
              <button onClick={() => removeLink(link)}>X</button>
            </li>
          ))}
        </ul>
      </div>
      <ProjectLinkDialog
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        onSubmit={addLink}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ProjectForm;
