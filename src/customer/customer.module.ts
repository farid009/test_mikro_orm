import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { CustomerController } from './customer.controller';
import { Customer, User } from './customer.entity';
import { customerProviders } from './customer.provider';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [User, Customer] })],
  controllers: [CustomerController],
  providers: customerProviders,
  exports: customerProviders,
})
export class CustomerModule {}
