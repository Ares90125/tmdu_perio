import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import selectReducer from './reducers/indexslice'
import authenticationReducer from './reducers/authentication'
import dataReducer from './reducers/dataslice'
import userReducer from './reducers/userslice'
import addReducer from './reducers/addslice'
import videoReduce from "./reducers/videoslice"

const store = configureStore({
  reducer: {
    index: selectReducer,
    authenticater:authenticationReducer,
    data:dataReducer,
    user:userReducer,
    adddate:addReducer,
    video:videoReduce
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
