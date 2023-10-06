<template>
  <q-card
    flat
    bordered
    class="q-mb-sm cursor-pointer"
    @click="$emit('click', $event)"
  >
    <q-card-section class="q-pt-xs">
      <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
      <div class="text-caption text-grey">{{ description }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'NoteCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },
});
</script>