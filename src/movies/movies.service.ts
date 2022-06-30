import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from 'src/schemas/movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const createdMovie = new this.movieModel(createMovieDto);
    return createdMovie.save();
  }

  findAll() {
    return this.movieModel.find().exec();
  }

  findOne(title: string) {
    return this.movieModel.findOne({ title });
  }

  update(title: string, updateMovieDto: UpdateMovieDto) {
    return this.movieModel.updateOne(
      { title },
      { $set: { ...updateMovieDto } },
    );
  }

  remove(title: string) {
    return this.movieModel.deleteOne({ title });
  }
}
