import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { OrmModule } from '@project-tracker/database';

@Module({
  imports: [OrmModule],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
