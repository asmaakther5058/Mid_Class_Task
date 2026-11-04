import {
  Entity,
  PrimaryColumn,
  Column,
} from 'typeorm';

@Entity('faculties')
export class Faculty {
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 50,
  })
  Id!: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 100,
  })
  Name!: string;

  @Column({
    type: 'varchar',
    length: 150,
  })
  expertise!: string;

  @Column({
    type: 'integer',
  })
  noOfPublication!: number;
}