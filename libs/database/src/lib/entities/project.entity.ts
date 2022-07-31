/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Collection, Entity, Enum, OneToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { ProjectLink, ProjectStatus } from '@project-tracker/types';
import { Milestone } from './milestone.entity';

@Entity()
export class Project extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  description!: string;

  @Property()
  isFeatured: boolean = false;

  @Enum(() => ProjectStatus)
  status!: ProjectStatus;

  @Property({ type: 'json', nullable: true })
  links?: ProjectLink[];

  @OneToMany(() => Milestone, (milestone) => milestone.project)
  milestones = new Collection<Milestone>(this);

  constructor(
    name: string,
    description: string,
    status: ProjectStatus,
    links?: ProjectLink[]
  ) {
    super();
    this.name = name;
    this.description = description;
    this.status = status;
    this.links = links;
  }
}
