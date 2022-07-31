import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ProjectModule } from '../project/project.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ProjectModule,
    MikroOrmModule.forRoot({
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
