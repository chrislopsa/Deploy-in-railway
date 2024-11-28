import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Define el nombre de la tabla
export class User {
  @PrimaryGeneratedColumn() // Genera un id único automáticamente
  id: number;

  @Column({ type: 'varchar', length: 100 }) // Define una columna para el nombre
  name: string;

  @Column({ type: 'varchar', length: 150}) // Email único
  email: string;

  @Column({ type: 'varchar', length: 255 }) // Contraseña
  password: string;
}
