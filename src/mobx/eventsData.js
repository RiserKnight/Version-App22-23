import {action, computed, makeObservable, observable} from 'mobx';
class EventStore {
    state = {
      eventData: [],
      regData:''
    };
    setAdminData = data => {
      this.state.eventData = data;
    };
    setRegData = dat => {
      this.state.regData = dat;
    };
    constructor() {
      makeObservable(this, {
        state: observable,
        setAdminData: action,
        setRegData: action,
      });
    }
  }
  export const events = new EventStore ();