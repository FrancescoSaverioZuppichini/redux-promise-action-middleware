const promiseMiddleware = store => next => action => {
    // check if it has a promise
    if(!action.promise || typeof action.promise != 'function') return next(action)

    next({type:`${action.type}_LOADING`})
    
    action.promise()
    .then(({ data }) => next({type:`${action.type}_SUCCESS`,data}))
    .catch(err => next({type:`${action.type}_FAILURE`,err}))
  }

  export default promiseMiddleware