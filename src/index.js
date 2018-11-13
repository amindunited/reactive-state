// http://jsfiddle.net/amindunited/8930uafh/
function createStore () {
  const subscriptions = [];
  const store$ = new BehaviorSubject(Object.assign({}, initValue));
  const storeFunctions = {
  	setState: (state) => {
	    store$.next(Object.assign({}, store$.value, state));
    },
    getState: () => {
    	return store$.value;
    },
    dispatch: () => {

    },
    action: () => {

    },
    subscribe: (fn) => {
      const subscription$ = store$.subscribe(fn);
      subscriptions.push(subscription$);
      return subscription$;
    },
    unsubscribe: (subscription) => {
      for ( let i = 0, len = subscriptions.length; i < len; i++ ) {
        if (subscription === subscriptions[i]) {
          subscriptions.splice(i, 1);
        }
      }
    }
  }
  return storeFunctions;
}

export default createStore;
