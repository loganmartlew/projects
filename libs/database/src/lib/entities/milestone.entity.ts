/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { Project } from './project.entity';

@Entity()
export class Milestone extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  description!: string;

  @Property()
  isComplete: boolean = false;

  @ManyToOne(() => Project)
  project!: Project;

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }
}
