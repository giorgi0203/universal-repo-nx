import { getObjectId } from 'mongo-seeding';
import { Project } from '../../../app/features/projects/schemas/project.schema';

const projects: Project[] = [
  {
    id: getObjectId('project 1'),
    name: 'Lorem ipsum',
    description: 'Sample Post 1 description',
    image: 'https://picsum.photos/200/300',
    author: getObjectId('user 1'),
    creationDate: new Date(),
  },
  {
    id: getObjectId('project 2'),
    name: 'Lorem ipsum',
    description: 'Sample Post 2 description',
    image: 'https://picsum.photos/200/300',
    author: getObjectId('user 1'),
    creationDate: new Date(),
  },
  {
    id: getObjectId('project 3'),
    name: 'Lorem ipsum',
    description: 'Sample Post 3 description',
    image: 'https://picsum.photos/200/300',
    author: getObjectId('user 1'),
    creationDate: new Date(),
  },

];

export = projects;
