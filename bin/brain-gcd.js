#!/usr/bin/env node

import gcd from '../src/games/brain-gcd.js';
import engine from '../src/index.js';

engine(gcd, 'Find the greatest common divisor of given numbers.');
