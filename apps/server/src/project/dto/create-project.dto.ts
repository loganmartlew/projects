import { ProjectLink, ProjectStatus } from '@project-tracker/types';

export class CreateProjectDto {
  name: string;
  description: string;
  status: ProjectStatus;
  links?: ProjectLink[];
}
