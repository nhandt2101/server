import { IsNotEmpty } from "class-validator";

export class SignInDto {
    @IsNotEmpty()
    username: String

    @IsNotEmpty()
    password: String
}