import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { PublicLibrarian, ReferenceItem, UniversityLibrarian } from './classes';
import * as util from './lib/utilityFunctions';

let lib1 = new UniversityLibrarian();
let lib2 = new PublicLibrarian();

