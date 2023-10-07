<template>
  <q-page padding>
    <NoteContainer>
      <div class="row items-center justify-between">
        <h3>Your Notes</h3>
        <div>
          <q-btn round color="positive" icon="add" to="/new"></q-btn>
        </div>
      </div>

      <NoteCard
        v-for="({ title, description}, idx) in notes.target"
        :key="idx"
        :title="title"
        :description="description"
        @click="router.push(`/note/${idx}`)"
      />
      <div v-if="notes.length === 0">You have not created any notes.</div>
    </NoteContainer>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import NoteContainer from 'components/NoteContainer.vue'
import NoteCard from 'components/NoteCard.vue'
import { useLocalNotes } from 'src/helper'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'IndexPage',
  component: { NoteContainer, NoteCard },

  setup() {
    const notes = useLocalNotes()
    const router = useRouter()

    console.log(notes.value)

    return { notes, router }
  }
})
</script>
