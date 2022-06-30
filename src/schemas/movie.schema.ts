import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  genre: string;

  @Prop()
  director: string;

  @Prop()
  duration: number;

  @Prop()
  releaseDate: string;

  @Prop()
  rating: number;

  @Prop()
  image: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
