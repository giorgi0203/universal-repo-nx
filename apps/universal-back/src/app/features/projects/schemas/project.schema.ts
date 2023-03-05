// mongoose schema for projects
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsOptional, } from 'class-validator';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

export class CreateProjectDto {

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


