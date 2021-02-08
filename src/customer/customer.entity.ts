import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  email!: string;

  @Property({ onCreate: () => new Date() })
  createdAt?: Date;

  @Property({ onUpdate: () => new Date() })
  updatedAt?: Date;
}

@Entity()
export class Customer {
  @PrimaryKey()
  id!: number;

  @Property({ onCreate: () => new Date() })
  createdAt?: Date;

  @Property({ onUpdate: () => new Date() })
  updatedAt?: Date;

  @OneToOne(() => User)
  user!: User;
}
