import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { appProviders } from './app.provider';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [MikroOrmModule.forRoot(), CustomerModule],
  providers: appProviders,
})
export class AppModule {}
