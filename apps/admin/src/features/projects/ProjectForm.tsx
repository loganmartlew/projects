import { ProjectStatus } from '@project-tracker/types';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

const ProjectForm: FC = () => {
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
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ProjectForm;
