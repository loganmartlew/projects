import { ProjectLink, ProjectStatus } from '@project-tracker/types';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const ProjectForm: FC = () => {
  const [links, setLinks] = useState<ProjectLink[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();

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
              <button>X</button>
            </li>
          ))}
        </ul>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}>
        <div>
          <label htmlFor='link-type'>Type</label>
          <select id='link-type'>
            <option value='other'>Other</option>
            <option value='github'>Github</option>
            <option value='live'>Live App</option>
          </select>
        </div>
        <div>
          <label htmlFor='link-name'>Name</label>
          <input type='text' id='link-name' />
        </div>
        <div>
          <label htmlFor='link-url'>URL</label>
          <input type='text' id='link-url' />
        </div>
        <button>Add Link</button>
      </Modal>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ProjectForm;
