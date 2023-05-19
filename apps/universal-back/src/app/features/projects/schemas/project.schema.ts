// mongoose schema for projects
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsOptional, } from 'class-validator';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {


  id?: ObjectId;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  creationDate: Date;

  @Prop()
  author: ObjectId;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

export class CreateProjectDto {
  @IsOptional()
  id?: ObjectId;
  @IsNotEmpty()
  name: string;
  @IsOptional()
  description!: string;
  @IsOptional()
  image!: string;

  constructor(partial: Partial<CreateProjectDto>) {
    Object.assign(this, partial);
  }
}


