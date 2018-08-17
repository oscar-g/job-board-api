import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
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

  @Column('boolean', {
    default: false,
    nullable: true,
  })
  public active: boolean;

  @OneToOne((_) => Company, {
    nullable: true,
  })
  public company: Promise<Company>;
}
