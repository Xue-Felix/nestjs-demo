import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOne(username: string) :string {
    if(username) {
      return `${username} is here`;
    }
    return "No one here"
  }
}
