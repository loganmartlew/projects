import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Milestone, Project } from '@project-tracker/database';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: EntityRepository<Project>
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    // validate dto

    const project = new Project(
      createProjectDto.name,
      createProjectDto.description,
      createProjectDto.status,
      createProjectDto.links
    );

    await this.projectRepository.persistAndFlush(project);

    return project;
  }

  async findAll(): Promise<Project[]> {
    const projects: Project[] = await this.projectRepository.findAll({
      populate: ['milestones'],
    });

    return projects;
  }

  async findOne(id: string): Promise<Project> {
    const project: Project = await this.projectRepository.findOne(id, {
      populate: ['milestones'],
    });

    return project;
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto
  ): Promise<Project> {
    // validate dto

    const project = await this.projectRepository.findOne(id);

    project.name = updateProjectDto.name || project.name;
    project.description = updateProjectDto.description || project.description;
    project.isFeatured = updateProjectDto.isFeatured || project.isFeatured;
    project.status = updateProjectDto.status || project.status;
    project.links = updateProjectDto.links || project.links;

    await this.projectRepository.persistAndFlush(project);

    return project;
  }

  async remove(id: string): Promise<void> {
    const project = await this.projectRepository.findOne(id, {
      populate: ['milestones'],
    });

    await this.projectRepository.remove(project);
    await this.projectRepository.flush();
  }

  async addMilestone(id: string, milestone: Milestone): Promise<Project> {
    const project = await this.projectRepository.findOne(id);

    project.milestones.add(milestone);

    await this.projectRepository.persistAndFlush(project);

    return project;
  }
}
