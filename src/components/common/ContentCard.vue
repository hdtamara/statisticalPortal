<template>
  <div class="card" :class="cardClass">
    <div class="card-header" :class="headerClass">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-body">
      <p>{{ content }}</p>
    </div>
    <div class="card-footer" v-if="showButton">
      <router-link v-if="routerLink" :to="routerLink" :class="buttonClass">
        {{ buttonText }}
      </router-link>
      <button v-else :class="buttonClass" @click="$emit('button-click')">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router' // 👈 importa RouterLink

interface Props {
  title: string
  content: string
  cardType?: 'default' | 'descriptive' | 'inferential'
  showButton?: boolean
  buttonText?: string
  buttonType?: 'default' | 'descriptive' | 'inferential'
  routerLink?: string
}

const props = withDefaults(defineProps<Props>(), {
  cardType: 'default',
  showButton: false,
  buttonText: 'Explorar',
  buttonType: 'default',
})

const cardClass = computed(() => ({
  'card-descriptive': props.cardType === 'descriptive',
  'card-inferential': props.cardType === 'inferential',
}))

const headerClass = computed(() => ({
  'descriptive-header': props.cardType === 'descriptive',
  'inferential-header': props.cardType === 'inferential',
}))

const buttonClass = computed(() => ({
  btn: true,
  'btn-primary': props.buttonType === 'default',
  'btn-descriptive': props.buttonType === 'descriptive',
  'btn-inferential': props.buttonType === 'inferential',
}))
</script>
<style scoped>
.card-descriptive .card-header {
  background: var(--gradient-secondary);
}

.card-inferential .card-header {
  background: var(--gradient-accent);
}
</style>
