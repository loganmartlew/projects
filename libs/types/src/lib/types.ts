export enum ProjectStatus {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In Progress',
  HOLD = 'On Hold',
  COMPLETE = 'Complete',
}

export interface ProjectLink {
  name: string;
  url: string;
  type: 'github' | 'live' | 'other';
}
