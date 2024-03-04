import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateUser } from './dtos/create_user';
import { UsersRepository } from './repositories/users_repositories'

@Controller()
export class AppController {
  constructor(private UsersRepository: UsersRepository) {}

  @Post()
  async getHello(@Body() body: CreateUser) {
    const { name, email } = body;
    await this.UsersRepository.create(name, email);

    /*const user = await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        email,
      },
    });

    return user;*/
  }
}
