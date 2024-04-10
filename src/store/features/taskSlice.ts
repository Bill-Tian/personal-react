/* TASK版块的切片，包含：REDUCER & ACTION-CREATOR */
import { createSlice } from "@reduxjs/toolkit"



const taskSlice = createSlice({
    // 设置切片的名字
    name: "task",
    // 设置此切片对应reducer中的初始状态
    initialState: {
        taskList: null
    },
    reducers: {}
})


export default taskSlice.reducer