export abstract class UsersRepository{
abstract create(name: string, email: string): Promise<void>;
}