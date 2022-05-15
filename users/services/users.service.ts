import { CRUD } from "../../common/interfaces/crud.interface";
import { CreateUserDto } from "../../dto/users/create.user.dto";
import UsersDao from "../../dto/users/daos/users.dao";

class UsersService implements CRUD {

    async create(resource: CreateUserDto) {
        return UsersDao.addUser(resource);
    }

    async deleteById(id: string) {
        return UsersDao.removeUserById(id);
    }

    async list(limit: number, page: number) {
        return UsersDao.getUsers();
    }

    async patchById(id: string, resource: any) {
        return UsersDao.pathUserById(id, resource);
    }

    async readById(id: string) {
        return UsersDao.getUserById(id);
    }
    
    async putById(id: string, resource: any) {
        return UsersDao.putUserById(id, resource);
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }
}

export default new UsersService();