import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { Company } from './Company';
import { TaxonomyTerm } from './TaxonomyTerm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('boolean', {
    nullable: true,
    default: false,
  })
  public active: boolean;

  @Column('date', {
    nullable: true,
    default: 'NOW()',
  })
  public created: Date;

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

  @Column('boolean', {
    default: false,
    nullable: true,
  })
  public reloc: boolean;

  @Column('boolean', {
    default: false,
    nullable: true,
  })
  public visa: boolean;
}
