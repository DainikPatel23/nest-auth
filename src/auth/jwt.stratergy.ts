import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStratergy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `>~R]+F=M|?<=Sh'+]K,)&32>7H^i30(r>0>|rf,s1~'bzsW#1XzCmWK9>fdpnl5`,
    });
  }

  validate(payload: any): any {
    return payload;
  }
}
