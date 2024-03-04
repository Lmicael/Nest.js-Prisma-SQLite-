import { IsNotEmpty, Length } from 'class-validator'

export class CreateUser {
    @IsNotEmpty()
    @Length(5, 100)
    name: string;

    @IsNotEmpty({
        message: 'The user email field is required',
    })
    email: string;
}