import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './orders.repository';
import { Order } from './schemas/orders.schema';
import { Types } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}
  async createOrder(request: CreateOrderRequest) {
    const order: Order = {
      ...request,
      _id: new Types.ObjectId(),
    };
    return this.ordersRepository.create(order);
  }
  async getOrders() {
    return this.ordersRepository.find({});
  }
}
