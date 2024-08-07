import { Body, Controller, Get, NotImplementedException, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PassportLocalGuards } from './guards/passport-local.guard';
import { PassportJwtAuthGuard } from './guards/passport-jwt.guard';

@Controller('auth-v2')
export class PassportAuthController {
    constructor(private authService: AuthService){}

    @Post('login')
    @UseGuards(PassportLocalGuards)
    login(@Request() request, @Body() input: {username: string, password: string}) {
        return this.authService.signIn(request.user)
    }

    @Get('me')
    @UseGuards(PassportJwtAuthGuard)
    getUserInfo(@Request() request){
        return request.user
    }
}
