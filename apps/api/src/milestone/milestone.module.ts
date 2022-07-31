import { Module } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { MilestoneController } from './milestone.controller';
import { OrmModule } from '@project-tracker/database';
import { ProjectService } from '../project/project.service';

@Module({
  imports: [OrmModule],
  controllers: [MilestoneController],
  providers: [MilestoneService, ProjectService],
})
export class MilestoneModule {}
