import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plan } from './plan.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column({ unique: true })
  public readonly CPF: string;

  @Column()
  public readonly name: string;

  @Column()
  public readonly address: string;

  @Column()
  public readonly CEP: string;

  @Column()
  public readonly planId: number;

  @OneToOne(()=>Plan, {
    lazy: true
  })
  public readonly plan: Plan;
}
