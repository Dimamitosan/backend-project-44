#!/usr/bin/env node

import even from '../src/games/brain-even.js';
import engine from '../src/index.js';

engine(even, 'Answer "yes" if the number is even, otherwise answer "no".');
