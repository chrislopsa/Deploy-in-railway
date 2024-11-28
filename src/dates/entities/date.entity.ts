import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dates') 
export class Date {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column({ type: 'varchar', length: 100 }) 
  patient: string;

  @Column({ type: 'varchar', length: 150 }) 
  doctor: string;

  @Column({ type: 'varchar', length: 255 }) 
  startDate: string;

  @Column({ type: 'varchar', length: 255 }) 
  endDate: string;
}
