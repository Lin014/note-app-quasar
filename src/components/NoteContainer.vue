<template>
    <div class="q-mr-auto q-ml-auto" style="max-width: 700px">
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NoteContainer'
})
</script>