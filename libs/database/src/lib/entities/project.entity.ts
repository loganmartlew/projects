/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';
import { ProjectLink, ProjectStatus } from '@project-tracker/types';
import { v4 } from 'uuid';

@Entity()
export class Project {
  @PrimaryKey()
  id: string = v4();

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

  constructor(
    name: string,
    description: string,
    status: ProjectStatus,
    links?: ProjectLink[]
  ) {
    this.name = name;
    this.description = description;
    this.status = status;
    this.links = links;
  }
}
