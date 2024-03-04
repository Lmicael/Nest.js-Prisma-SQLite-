import { PrismaService } from 'src/database/prisma.service';
import {UsersRepository} from '../users_repositories'
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUsersRepository implements UsersRepository{
    constructor(private prisma: PrismaService){}

    async create(name: string, email: string): Promise<void> {
        await this.prisma.user.create({
            data:{
                id: randomUUID(),
                name,
                email
            }
        })
    }
}