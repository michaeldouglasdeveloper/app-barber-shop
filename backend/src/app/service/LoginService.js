import UserModel from '../models/Users';

import SessionService from './SessionService';

class LoginService {

  constructor() {
    this.flag = true;
    this.message = '';
  }

  async returnMessageError(message) {
    this.flag = false;
    this.message = message;
  }

  async createLogin(email, password) {

    try {

      const user = await UserModel.findOne({ where: { email } });

      if (!user || !(await user.checkPassword(password))) {
        return this.returnMessageError('Usuário não encontrado.');
      }
      const name = user.name.split(' ')[0];
      const data = { id: user.id, user: name, email: user.email, admin: user.admin };

      const response = await SessionService.createSessionClient(data);

      return response ? { response, name } : false;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new LoginService();