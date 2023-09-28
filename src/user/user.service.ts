import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTANSTS } from 'src/constants';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'dainikpatel',
      password: 'dainik@123',
      email: 'dainikpatel@gmail.com',
      age: 24,
      city: 'Dhrangadhra',
      role: CONSTANSTS.ROLES.WEB_DEVELOPER,
    },
    {
      username: 'rakesh',
      password: 'rakesh@123',
      email: 'rakeshpatel@gmail.com',
      age: 32,
      city: 'Morbi',
      role: CONSTANSTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      username: 'mukesh',
      password: 'mukesh@123',
      email: 'mukeshpatel@gmail.com',
      age: 37,
      city: 'Surendranagar',
      role: CONSTANSTS.ROLES.WEB_DEVELOPER,
    },
  ];

  getUserByUsername(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
