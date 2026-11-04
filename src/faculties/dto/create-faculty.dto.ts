import {
  IsString,
  IsNotEmpty,
  IsInt,
  Min,
} from 'class-validator';

import { Type } from 'class-transformer';

export class CreateFacultyDto {
  @IsString()
  @IsNotEmpty()
  Id!: string;

  @IsString()
  @IsNotEmpty()
  Name!: string;

  @IsString()
  @IsNotEmpty()
  expertise!: string;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  noOfPublication!: number;
}