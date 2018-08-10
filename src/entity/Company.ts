import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column({nullable: true})
  public tagline: string;

  @Column({nullable: true})
  public logoSrc: string;

  @Column({nullable: true})
  public url: string;
}
