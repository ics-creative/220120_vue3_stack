<script lang="ts" setup>
import { Player } from '@/logics/GameType'
import { playerName } from '@/logics/playerName'

const props = withDefaults(
  defineProps<{
    stone?: Player | undefined
  }>(),
  {
    stone: undefined
  }
)

const emit = defineEmits<{
  (e: 'place'): void
}>()

const cellClick = () => {
  if (props.stone) return
  emit('place')
}
</script>

<template>
  <div class="BoardCell" @click="cellClick">
    <div class="stone" v-if="stone" :class="[stone]">
      {{ playerName(stone) }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.BoardCell {
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  .stone {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 48px;

    &.p1 {
      color: blue;
    }
    &.p2 {
      color: red;
    }
  }
}
</style>
