import { Body, Controller, Get, NotImplementedException, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('login')
    login(@Body() input: {username: string, password: string}) {
        return this.authService.authentication(input);
    }

    @Get('me')
    @UseGuards(AuthGuard)
    getUserInfo(@Request() request){
        return request
    }
}
