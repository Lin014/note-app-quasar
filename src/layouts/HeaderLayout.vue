<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/" class="router-link">
            <q-avatar>
              <q-icon name="fa-solid fa-square-pen" size="32px" class="text-white" />
            </q-avatar>
            Note App
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style scoped>
.router-link {
  text-decoration: none;
  color: white;
  display: inline-block;
}
</style>
