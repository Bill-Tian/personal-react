/* TASK版块的切片，包含：REDUCER & ACTION-CREATOR */
import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    // 设置切片的名字
    name: "task",
    // 设置此切片对应reducer中的初始状态
    initialState: {
        taskName: "任务名称1",
        taskList: []
    },
    reducers: {
        getAllTaskList(state, action) {
            state.taskList = action.payload
        },
        removeTask(state, { payload }) {
            let taskList = state.taskList;
            state.taskList = taskList.filter((item: any) => item.id !== payload)
        },
        setTaskName(state, action) {
            state.taskName = action.payload
        }
    }
})

export let { getAllTaskList, removeTask, setTaskName } = taskSlice.actions

export default taskSlice.reducer