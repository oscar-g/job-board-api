import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Taxonomy {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column({nullable: true})
  public label: string;

  @Column({nullable: true})
  public desc: string;
}
