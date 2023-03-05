import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { CreateProjectDto } from '../schemas/project.schema';
import { ProjectService } from '../services/project.service';

@Controller('projects')
export class ProjectsController {
    constructor(public projectsService: ProjectService) {
        console.log('ProjectsController constructor');

    }


    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    createProject(@Body() projectDto: CreateProjectDto) {
        // return projectDto;
        return this.projectsService.create(projectDto);
    }

    @Get()
    getProjects() {
        return this.projectsService.findAll();
    }
}
