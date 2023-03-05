import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from './controllers/projects.controller';
import { Project, ProjectSchema } from './schemas/project.schema';
import { ProjectService } from './services/project.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }])],
    controllers: [ProjectsController],
    providers: [ProjectService],
})
export class ProjectsModule { }
