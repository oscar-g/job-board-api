import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column({nullable: true})
  public tagline: string;

  @Column()
  public description: string;

  @Column({nullable: true})
  public logoSrc: string;

  @Column('json')
  public refs: {
    url: string,
    [k: string]: string,
  };
}
