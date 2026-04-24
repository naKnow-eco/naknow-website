<template>
  <transition name="fade">
    <div v-if="message" class="message" @click="$emit('click')">
      <p>{{ message }}</p>
    </div>
  </transition>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  message: string | null;
}>(), {

});

defineEmits<{
  click: [];
}>();
</script>

<style scoped lang="postcss">
.message {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-radius: $radius-md;
  border: 1px solid $gold-dark;
  color: $blue-dark;
  cursor: pointer;
}

.fade {
  &-enter-active, &-leave-active {
    transition: opacity 0.3s;
  }
  &-enter-from, &-leave-to {
    opacity: 0;
  }
}
</style>
