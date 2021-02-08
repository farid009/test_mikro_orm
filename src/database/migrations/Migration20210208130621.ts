import { Migration } from '@mikro-orm/migrations';

export class Migration20210208130621 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null, "created_at" timestamptz(0) null, "updated_at" timestamptz(0) null);',
    );

    this.addSql(
      'create table "customer" ("id" serial primary key, "created_at" timestamptz(0) null, "updated_at" timestamptz(0) null, "user_id" int4 not null);',
    );
    this.addSql(
      'alter table "customer" add constraint "customer_user_id_unique" unique ("user_id");',
    );

    this.addSql(
      'alter table "customer" add constraint "customer_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;',
    );
  }
}
