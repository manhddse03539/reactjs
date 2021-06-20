import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import usersReducer from './redux/users/users.slice';
import authReducer from './redux/auth/auth.slice';
import longTermReducer from './redux/longTerm/longTerm.slice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    longTerm: longTermReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;
