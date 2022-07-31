import { Module } from '@nestjs/common';
import { OrmModule } from '@project-tracker/database';
import { ProjectModule } from '../project/project.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [OrmModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
