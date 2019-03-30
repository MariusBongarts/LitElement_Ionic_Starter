import { User } from './../models/user';

export class UserService {

    mockUser: User = {id:"1", createdAt: new Date().getTime(), name: "Max", preferredLanguage: "german" }

    public getLoggedUser():User {
        return this.mockUser;
    }


}