import { Controller, Get, UseGuards, Request, Param } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    
    @UseGuards(AuthGuard)
    @Get('/all')
    getAllUser() {
        return this.userService.getAllUser()
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }

    @UseGuards(AuthGuard)
    @Get('/:id')
    getUserById(@Param('id') id: string ) {
        return this.userService.findOneById(id)
    }
}