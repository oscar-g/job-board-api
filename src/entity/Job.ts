import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { Company } from './Company';
import { TaxonomyTerm } from './TaxonomyTerm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column()
  public instructions: string;

  @Column('json')
  public location: {
    name: string,
    fullTime: 1|0,
    contract: 1|0,
    remote?: 1,
    reloc?: 1,
    visa?: 1,
  };

  @ManyToOne((_) => Company, (x) => x.id)
  public company: Company;

  @ManyToMany((_) => TaxonomyTerm)
  @JoinTable()
  public categories: TaxonomyTerm[];
}
