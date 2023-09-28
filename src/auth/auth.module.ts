import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStratergy } from './jwt.stratergy';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: `>~R]+F=M|?<=Sh'+]K,)&32>7H^i30(r>0>|rf,s1~'bzsW#1XzCmWK9>fdpnl5`,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  controllers: [],
  providers: [LocalStrategy, AuthService, JwtStratergy],
  exports: [AuthService],
})
export class AuthModule {}
