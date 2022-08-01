import { ProjectLink } from '@project-tracker/types';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

interface Props {
  isModalOpen: boolean;
  setModalOpen: (isModalOpen: boolean) => void;
  onSubmit: (link: ProjectLink) => void;
}

const ProjectLinkDialog: FC<Props> = ({
  isModalOpen,
  setModalOpen,
  onSubmit,
}) => {
  const { register, handleSubmit, reset } = useForm<ProjectLink>();

  const submit = (data: ProjectLink) => {
    setModalOpen(false);
    onSubmit(data);
    reset();
  };

  return (
    <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor='link-type'>Type</label>
          <select id='link-type' {...register('type')}>
            <option value='other'>Other</option>
            <option value='github'>Github</option>
            <option value='live'>Live App</option>
          </select>
        </div>
        <div>
          <label htmlFor='link-name'>Name</label>
          <input type='text' id='link-name' {...register('name')} />
        </div>
        <div>
          <label htmlFor='link-url'>URL</label>
          <input type='text' id='link-url' {...register('url')} />
        </div>
        <button type='submit'>Add Link</button>
      </form>
    </Modal>
  );
};

export default ProjectLinkDialog;
