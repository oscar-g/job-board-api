import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm';
import { Company } from './Company';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public email: string;

  @Column()
  public active: boolean;

  @OneToOne((_) => Company)
  public company: Promise<Company>;
}
