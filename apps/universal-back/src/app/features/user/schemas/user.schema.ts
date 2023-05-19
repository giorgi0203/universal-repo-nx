// mongoose schema for projects
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsOptional, } from 'class-validator';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export enum EUserRole {
    ADMIN = 'admin',
    USER = 'user',
};

export type UserDocument = User & Document;


@Schema()
export class User {

    @Prop()
    id?: ObjectId;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    image: string;

    @Prop()
    creationDate: Date;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    role: EUserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);

export class CreateUserDto {

    @IsOptional()
    id?: ObjectId;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsOptional()
    image: string;

    @IsNotEmpty()
    creationDate: Date;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

   
    role: EUserRole;

    constructor(partial: Partial<CreateUserDto>) {
        Object.assign(this, partial);
    }
}




