import { Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user/user.entity';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANSTS } from './constants';

@Controller('auth')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(AuthGuard('local'))
  login(@Request() req) {
    const token = this.authService.genrateToken(req.user);
    console.log(token);
    return {
      token: token,
      user: req.user,
    };
  }

  @Get('/android-developer')
  @UseGuards(
    AuthGuard('jwt'),
    new RoleGuard(CONSTANSTS.ROLES.ANDROID_DEVELOPER),
  )
  androidDeveloperData(): string {
    return 'This data for android developer only';
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANSTS.ROLES.WEB_DEVELOPER))
  webDeveloperData(): string {
    return 'This data for web developer only';
  }
}
