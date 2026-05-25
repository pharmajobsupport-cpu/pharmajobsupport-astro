export { blogs } from './blogs';
export { blogs2 } from './blogs2';
export { blogs3 } from './blogs3';

import { blogs } from './blogs';
import { blogs2 } from './blogs2';
import { blogs3 } from './blogs3';

export const allBlogs = [
  ...blogs,
  ...blogs2,
  ...blogs3,
];

export type { BlogEntry } from './blogs';
