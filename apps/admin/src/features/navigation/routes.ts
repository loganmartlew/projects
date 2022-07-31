export interface NavRoute {
  path: string;
  text: string;
}

export const routes: NavRoute[] = [
  { path: '/projects', text: 'Projects' },
  { path: '/projects/edit', text: 'New Project' },
  { path: '/milestones/edit', text: 'New Milestone' },
];
