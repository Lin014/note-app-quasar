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
        v-for="({ title, description}, index) in notes"
        :key="index"
        :title="title"
        :description="description"
      />
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

    return { notes, router }
  }
})
</script>
