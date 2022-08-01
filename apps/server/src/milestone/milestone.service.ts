import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Milestone } from '@project-tracker/database';
import { ProjectService } from '../project/project.service';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';

@Injectable()
export class MilestoneService {
  constructor(
    @InjectRepository(Milestone)
    private readonly milestoneRepository: EntityRepository<Milestone>,
    private readonly projectService: ProjectService
  ) {}

  async create(createMilestoneDto: CreateMilestoneDto): Promise<Milestone> {
    // validate dto

    const milestone = new Milestone(
      createMilestoneDto.name,
      createMilestoneDto.description
    );

    await this.projectService.addMilestone(
      createMilestoneDto.projectId,
      milestone
    );

    await this.milestoneRepository.persistAndFlush(milestone);

    return milestone;
  }

  async findAll(): Promise<Milestone[]> {
    const milestones: Milestone[] = await this.milestoneRepository.findAll();

    return milestones;
  }

  async findOne(id: string): Promise<Milestone> {
    const milestone: Milestone = await this.milestoneRepository.findOne(id);

    return milestone;
  }

  async update(
    id: string,
    updateMilestoneDto: UpdateMilestoneDto
  ): Promise<Milestone> {
    // validate dto

    const milestone = await this.milestoneRepository.findOne(id);

    milestone.name = updateMilestoneDto.name || milestone.name;
    milestone.description =
      updateMilestoneDto.description || milestone.description;
    milestone.isComplete =
      updateMilestoneDto.isComplete || milestone.isComplete;

    await this.milestoneRepository.persistAndFlush(milestone);

    return milestone;
  }

  async remove(id: string): Promise<void> {
    const milestone = await this.milestoneRepository.findOne(id);

    await this.milestoneRepository.remove(milestone);
    await this.milestoneRepository.flush();
  }
}
