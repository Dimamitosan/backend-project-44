#!/usr/bin/env node

import progressionGame from '../src/games/brain-progression.js';
import engine from '../src/index.js';

engine(progressionGame, 'What number is missing in the progression?');
