import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', {
	state: () => ({
		num: 0
	}),
	actions: {
		add(val: number) {
			this.num += val
		}
	},
	getters: {
		bigNum() {
			return this.num * 2
		}
	}
})
