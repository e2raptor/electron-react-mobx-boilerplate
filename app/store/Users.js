import { observable } from 'mobx';

class Users{

    @observable list = [
        { id: 1, name: "Eduardo Pina"},
        { id: 2, name: "Yaima Garcia"}
    ];

}
export default new Users();
