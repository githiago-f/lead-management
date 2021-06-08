import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plan {
  @PrimaryGeneratedColumn('increment')
  public readonly id: number;

  @Column()
  public readonly name: string;

  @Column({
    type: 'varchar',
    array: true
  })
  public readonly attributes: string[];
}
