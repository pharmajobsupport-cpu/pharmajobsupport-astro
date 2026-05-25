export { clinicalKB } from './knowledgeBase-clinical';
export { validationKB } from './knowledgeBase-validation';
export { pvKB } from './knowledgeBase-pv';
export { regulatoryKB } from './knowledgeBase-regulatory';
export { qualityKB } from './knowledgeBase-quality';
export { whatisKB1 } from './knowledgeBase-whatis-1';
export { whatisKB2 } from './knowledgeBase-whatis-2';

import { clinicalKB } from './knowledgeBase-clinical';
import { validationKB } from './knowledgeBase-validation';
import { pvKB } from './knowledgeBase-pv';
import { regulatoryKB } from './knowledgeBase-regulatory';
import { qualityKB } from './knowledgeBase-quality';
import { whatisKB1 } from './knowledgeBase-whatis-1';
import { whatisKB2 } from './knowledgeBase-whatis-2';

export const allKB = [
  ...clinicalKB,
  ...validationKB,
  ...pvKB,
  ...regulatoryKB,
  ...qualityKB,
  ...whatisKB1,
  ...whatisKB2,
];

export type { KBEntry } from './knowledgeBase-clinical';
