import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

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
    const projects: Project[] = await this.projectRepository.findAll();

    return projects;
  }

  async findOne(id: string): Promise<Project> {
    const project: Project = await this.projectRepository.findOne(id);

    return project;
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto
  ): Promise<Project> {
    // validate dto

    const project = await this.projectRepository.findOne(id);

    project.name = updateProjectDto.name;
    project.description = updateProjectDto.description;
    project.isFeatured = updateProjectDto.isFeatured;
    project.status = updateProjectDto.status;
    project.links = updateProjectDto.links;

    await this.projectRepository.persistAndFlush(project);

    return project;
  }

  async remove(id: string): Promise<void> {
    const project = await this.projectRepository.findOne(id);

    await this.projectRepository.remove(project);
  }
}
