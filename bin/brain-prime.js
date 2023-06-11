#!/usr/bin/env node

import prime from '../src/games/brain-prime.js';
import engine from '../src/index.js';

engine(prime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
