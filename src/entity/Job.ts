import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { Company } from './Company';
import { TaxonomyTerm } from './TaxonomyTerm';
import { BaseEntity } from './BaseEntity';

@Entity()
export class Job extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @ManyToOne((_) => Company, (x) => x.id)
  public company: Company;

  @ManyToMany((_) => TaxonomyTerm)
  @JoinTable()
  public categories: TaxonomyTerm[];

  @Column()
  public description: string;

  @Column()
  public instructions: string;

  @Column()
  public location: string;

  @Column('boolean')
  public fulltime: boolean;

  @Column('boolean')
  public contract: boolean;

  @Column('boolean')
  public reloc: boolean;

  @Column('boolean')
  public visa: boolean;
}
