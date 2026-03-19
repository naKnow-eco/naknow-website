<template>
  <div class="input" :class="status">
    <label :for="id">
      {{ label }}<span v-if="required" class="required">*</span>
    </label>
    <input
      v-if="type !== 'textarea'"
      :id="id"
      :type="type"
      v-model="model"
      @focus="resetStatus"
    />
    <textarea
      v-else
      :id="id"
      rows="5"
      v-model="model"
      @focus="resetStatus"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  translation: string;
  id: string;
  required?: RegExp | boolean;
  type: 'text' | 'email' | 'tel' | 'textarea';
}>(), {
  required: false,
});

const status = ref<'valid' | 'invalid' | 'idle'>('idle');

const label = computed(() => $t(`${props.translation}.label`));

const model = defineModel({
  type: String,
});

const checkStatus = () => {
  status.value = isValid.value ? 'valid' : 'invalid';
};
const resetStatus = () => {
  status.value = 'idle';
};

// eslint-disable-next-line complexity
const isValid = computed(() => {
  const value = model.value;

  if (!props.required) return true;
  if (!value) return false;
  if (props.required instanceof RegExp) return props.required.test(value);
  if (props.type === 'email') return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value);
  if (props.type === 'tel') return (/^\+?[0-9\s\-()]+$/).test(value);
  return value.trim() !== '';
});

defineExpose({
  isValid,
  value: model,
  checkStatus,
  resetStatus,
});
</script>

<style scoped lang="postcss">
.input {

  .required {
    color: $gold-dark;
  }

  &.invalid {
    input, textarea {
      border-color: $red-light;
    }
  }

  input, textarea {
    border: 1px solid $blue-light;
    padding: 0.5rem;
    border-radius: $radius-md;

    color: $blue-dark;

    &:focus {
      outline-color: $gold-light;
    }
  }
}
</style>
