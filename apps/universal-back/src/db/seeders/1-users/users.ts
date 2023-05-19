
import { getObjectId } from 'mongo-seeding';
import { User, EUserRole } from '../../../app/features/user/schemas/user.schema';
import { faker } from '@faker-js/faker';

const projects: User[] = [
    {
        id: getObjectId('user 1'),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        image: 'https://picsum.photos/200/300',
        creationDate: new Date(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: 'admin' as EUserRole,
    },
    {
        id: getObjectId('user 2'),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        image: 'https://picsum.photos/200/300',
        creationDate: new Date(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: 'user' as EUserRole,
    },
    {
        id: getObjectId('user 3'),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        image: 'https://picsum.photos/200/300',
        creationDate: new Date(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: 'user' as EUserRole,
    }

];

export = projects;
