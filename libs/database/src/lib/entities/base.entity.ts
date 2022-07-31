/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Entity, PrimaryKey } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity({ abstract: true })
export abstract class BaseEntity {
  @PrimaryKey()
  id: string = v4();
}
