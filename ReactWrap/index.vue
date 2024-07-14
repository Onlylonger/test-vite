<script lang="ts" setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'

const props = defineProps(['component'])

const el = ref()
onMounted(() => {
  const App = props.component
  if (App) {
    const root = createRoot(el.value)
    root.render(createElement(App, {}, null))
  }
})
</script>

<template>
  <div ref="el" class="wrap-react" />
</template>
