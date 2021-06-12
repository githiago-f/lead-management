import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plan } from './plan.entity';
import {hash, compare} from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ unique: true })
  public cpf: string;

  @Column()
  public name: string;

  @Column()
  public address: string;

  @Column()
  public cep: string;

  @OneToOne(() => Plan, { eager: true, nullable: true, cascade: true })
  @JoinColumn({ referencedColumnName: 'id', name: 'planId' })
  public plan: Plan|null;

  @Column({ nullable: true, default: null })
  public planId: number|null;

  @Column()
  public password: string;

  @BeforeInsert()
  private async encryptPassword() {
    this.password = await hash(this.password, 10);
  }

  public async validatePassword(password: string): Promise<boolean> {
    return compare(password, this.password);
  }

  toJSON() {
    const user = Object.assign({}, this);
    delete user['password'];
    return user;
  }
}
