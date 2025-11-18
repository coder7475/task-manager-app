import * as enums from './_enums';
import * as users from './users';
import * as profiles from './profiles';
import * as sessions from './passport';
import * as relations from './_relations';
import * as teams from './teams';
import * as members from './members';
import * as projects from './projects';
import * as tasks from './tasks';
import * as activityLogs from './activityLogs';

export * from './_enums';
export * from './users';
export * from './profiles';
export * from './passport';
export * from './_relations';
export * from './teams';
export * from './members';
export * from './projects';
export * from './tasks';
export * from './activityLogs';

const schema = {
  ...enums,
  ...users,
  ...profiles,
  ...sessions,
  ...relations,
  ...teams,
  ...members,
  ...projects,
  ...tasks,
  ...activityLogs,
};

export default schema;

export type Schema = typeof schema;
