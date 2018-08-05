import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm';
import { Taxonomy } from './Taxonomy';

@Entity()
export class TaxonomyTerm {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public value: string;

  @Column()
  public label: string;

  @OneToOne((_) => Taxonomy)
  public tax: Promise<Taxonomy>;
}
