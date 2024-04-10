import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit"
import taskSliceReducer from './features/taskSlice';
const store = configureStore<ConfigureStoreOptions>({
    // 指定reducer
    redecer: {
        // 按模块管理各个切片

    },
    // 使用中间件
    // middleware: []

})

export default store