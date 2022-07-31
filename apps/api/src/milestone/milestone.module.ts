import { Module } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { MilestoneController } from './milestone.controller';
import { OrmModule } from '@project-tracker/database';

@Module({
  imports: [OrmModule],
  controllers: [MilestoneController],
  providers: [MilestoneService],
})
export class MilestoneModule {}
