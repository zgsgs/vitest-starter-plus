<script setup lang="ts">
import { useRouterPush } from '@/hooks'
import { localStg } from '@/utils'

function login() {
  localStg.set('token', 'ddddddddddddddd')
  const { toHome } = useRouterPush()
  toHome()
}
</script>

<template>
  <div @click="login">
    Login
  </div>
</template>
