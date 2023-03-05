import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto, Project, ProjectDocument } from '../schemas/project.schema';
@Injectable()
export class ProjectService {



    constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) { }

    public async create(createCatDto: CreateProjectDto): Promise<Project> {
        const createdCat = new this.projectModel(createCatDto);
        return createdCat.save();
    }

    public async findAll(): Promise<Project[]> {
        return this.projectModel.find().exec();
    }
}
