import {action, computed, makeObservable, observable} from 'mobx';
class EventStore {
    state = {
 
      eventData: [],
    };
  
    
  
    setAdminData = data => {
      this.state.eventData = data;
    };
   
    constructor() {
      makeObservable(this, {
        state: observable,
  

        setAdminData: action,
      
      });
    }
  }
  
  export const events = new EventStore ();