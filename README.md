# Promise Middleware
## A generic Flux/Redux midleware to handle promises

### Installation

```
npm install promise-middleware
```

### Usage
Add the middleware to Redux as always. You also need `redux-thunk` to make async actions work.

```
import promiseMiddleware from 'promise-middleware'

const store = createStore(reducer, applyMiddleware(thunk,promiseMiddleware));

```

The middleware receives a classic Redux action with a Promise that is encoded into a the `promise` field.
It will automatically fire an LOADING action before evaluate the promise, a SUCCESS action if no error is found and a FAILURE action if something went wrong. All of them have the suffix based on the `type`. 

Example:

```
const fetchUser = { type: 'FETCH_USER',  promise: axios.get('https://randomuser.me/api/')}
```
Remember, you need to put the Promise in the **promise field**

Then the middleware will generate two actions: `FETCH_USER_LOADING` and `FETCH_USER_SUCCESS`. The payload is available on the `data` field of the action and the error on `err`

![alt text](https://github.com/FrancescoSaverioZuppichini/redux-promise-middleware/blob/master/docs/images/logger.png?raw=true)


For a more deep tutorial you can check out the medium article



