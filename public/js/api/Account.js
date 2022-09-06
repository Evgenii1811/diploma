//Класс Account наследуется от Entity.
// Управляет счетами пользователя.
//Имеет свойство URL со значением '/account'


class Account extends Entity {
  
  //Получает информацию о счёте  
   static get(id = '', callback, data) {
    createRequest({
      data,
      url: `${this.URL}/${id}`,
      method: 'GET',
      responseType: 'json',
      callback
    })
  }
}

Account.URL = '/account';