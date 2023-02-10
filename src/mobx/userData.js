import {action, makeObservable, observable, computed} from 'mobx';
class User_Data {
  state = {
    token: '',
    UserId: '',
    name: '',
    college: '',
    phone:'',
    email:'',
  };

  setToken = userToken => {
    this.state.token = userToken;
  };

  setName = userName => {
    this.state.name = userName;
  };
  setCollege = userCollege => {
    this.state.college = userCollege;
  };
  setUserId = userId => {
    this.state.UserId = userId;
  };
 setPhone = userPhone => {
    this.state.phone = userPhone;
 }
 setEmail = userEmail => {
    this.state.email = userEmail;
 }
  get token() {
    return this.state.token;
  }
  get userName() {
    return this.state.name;
  }
  get userCollege() {
    return this.state.college;
  }
  get userId() {
    return this.state.UserId;
  }
 get userPhone(){
    return this.state.phone;
 }
 get userEmail(){
    return this.state.email;
 }
  constructor() {
    makeObservable(this, {
      state: observable,
      setToken: action,
      setCollege: action,
      setName: action,
      setUserId: action,
      setPhone:action,
      setEmail:action,

      token: computed,
      userName: computed,
      userCollege: computed,
      userId: computed,
      userPhone: computed,
      userEmail: computed,
    });
  }
}

export const UserData = new User_Data();