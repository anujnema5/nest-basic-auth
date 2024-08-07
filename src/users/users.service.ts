import { Injectable } from '@nestjs/common';

export type Users = {
    userId: number,
    username: string,
    password: string
}

const users: Users[] = [
    {
        userId: 1,
        username: 'anujnema',
        password: 'anujnema'
    },
    {
        userId: 2,
        username: 'rishinema',
        password: 'anujnema'
    }
]

@Injectable()
export class UsersService {
    findUserByName(username: string): Users | undefined {
        return users.find((user) => user.username === username);
    }
}