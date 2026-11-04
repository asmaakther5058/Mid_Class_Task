 import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

 
import { Faculty } from './entities/faculty.entity.js';
import { CreateFacultyDto } from './dto/create-faculty.dto';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
  ) {}

  async createFaculty(dto: CreateFacultyDto) {
    const faculty = this.facultyRepository.create(dto);

    const savedFaculty =
      await this.facultyRepository.save(faculty);

    return {
      message: 'Faculty created successfully',
      data: savedFaculty,
    };
  }
}