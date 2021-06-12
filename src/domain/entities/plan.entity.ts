import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plans')
export class Plan {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public name: string;

  @Column({
    type: 'varchar',
    array: true
  })
  public attributes: string[];

  @Column({precision: 2})
  public price: number;

  @Column({default: true})
  public active: boolean;
}
