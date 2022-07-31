import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import mikroOrmConfig from '../mikro-orm.config';
import { allEntities } from './entities';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    MikroOrmModule.forFeature(allEntities),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
