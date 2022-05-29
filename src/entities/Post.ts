import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {

  @PrimaryKey()
  id!: number;

  @Property({ nullable: true, type: 'date'})
  createdAt: Date = new Date();

  @Property({ nullable: true, type: 'date', onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({ type: 'text'})
  title!: string;

}