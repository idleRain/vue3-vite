import {defineStore} from "pinia"

export const useTodosStore = defineStore('todos', {
	state: () => ({
		// list: [
		// 	{id: 1, name: '吃饭', done: false},
		// 	{id: 2, name: '睡觉', done: true},
		// 	{id: 3, name: '打豆豆', done: false}
		// ],
		list: JSON.parse(localStorage.getItem('todolist') || '[]'),
		filter: ['All', 'Active', 'Completed'],
		active: 'All'
	}),
	actions: {
		// 切换选中状态
		updateTodoState(id) {
			const todo = this.list.find(item => item.id === id)
			todo.done = !todo.done
		},
		// 删除
		deleteTodo(id) {
			this.list = this.list.filter(item => item.id !== id)
		},
		// 添加
		handleAddTodo(taskName) {
			this.list.unshift({
				id: Date.now(),
				name: taskName,
				done: false
			})
		},
		// 全部选中
		checkAll(state) {
			this.list.forEach(item => item.done = state)
		},
		// 清除已完成
		clearCompletedTodos() {
			this.list = this.list.filter(item => !item.done)
		},
		changeActiveState(active) {
			this.active = active
		}
	},
	getters: {
		// 全部未完成的todo
		uncompletedTodosAll() {
			return this.list.filter(item => !item.done).length
		},
		// 是否全部选中
		isCheckAll() {
			return this.list.every(item => item.done)
		},
		// 展示的数据
		showList() {
			switch (this.active) {
				case 'All':
					return this.list
				case 'Active':
					return this.list.filter(item => item.done)
				default:
					return this.list.filter(item => !item.done)
			}
		}
	}
})
