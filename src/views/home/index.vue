<script lang="ts" setup>
  import { useCounterStore, useCounterStore2 } from '@/stores/counter'

  const counter = useCounterStore()
  const counter2 = useCounterStore2()
</script>

<template>
  <div>hello  vue3</div>
	<p>
		{{ counter.count }}
		{{ counter.doubleCount }}
	</p>
	<button @click="counter.increment()">
		aaa
	</button>
	<p>
		{{ counter2.count2 }}
	</p>
	<n-button type="tertiary" @click="counter2.increment()">
		bbb
	</n-button>
	<n-input
		type="textarea"
		placeholder="Basic Textarea"
	/>
</template>
