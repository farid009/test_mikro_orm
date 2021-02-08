import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Controller, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Customer } from './customer.entity';

@Controller('v1/customers')
@ApiTags('customers')
export class CustomerController {
  constructor(
    @InjectRepository(Customer)
    private customerRepo: EntityRepository<Customer>,
  ) {}

  @Post('test2')
  async addCustomer(): Promise<any> {
    const customerObj = this.customerRepo.create({
      user: { name: 'farid', email: 'farid@ddd.com' },
    });

    this.customerRepo.persist(customerObj);
    await this.customerRepo.flush();
    return customerObj;
  }

  @Put('test/:id')
  async editCustomer(@Param('id') id: number): Promise<void> {
    const customer = await this.customerRepo.findOne(id, {
      populate: ['user'],
    });
    // there is bug here mikro orm use insert instead of update for user entity
    this.customerRepo.assign(customer, { user: { name: 'farid2' } });
    await this.customerRepo.flush();
  }
}
