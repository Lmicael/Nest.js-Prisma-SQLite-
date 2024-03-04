import { PrismaUsersRepository } from './repositories/prisma/prisma_users_Repository';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { UsersRepository } from './repositories/users_repositories';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,
    {
        provide: UsersRepository,
        useClass: PrismaUsersRepository
    }
  ],
})
export class AppModule { }
