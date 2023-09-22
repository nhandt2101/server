import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class SignUpDto {
    @IsNotEmpty() 
    name: string

    @IsNotEmpty()
    @IsEmail() 
    email: string

    @IsOptional() 
    age: number

    @IsNotEmpty() 
    @IsString()
    username: string

    @IsNotEmpty() 
    @MinLength(6, {message: "Password is too short"})
    password: string
}