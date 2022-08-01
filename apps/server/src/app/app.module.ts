import { Module } from '@nestjs/common';
import { OrmModule } from '@project-tracker/database';
import { MilestoneModule } from '../milestone/milestone.module';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [OrmModule, ProjectModule, MilestoneModule],
})
export class AppModule {}
