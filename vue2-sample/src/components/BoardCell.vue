<template>
  <div class="BoardCell" @click="cellClick">
    <div class="stone" v-if="stone" :class="[stone]">
      {{ playerName(stone) }}
    </div>
  </div>
</template>

<script lang="ts">
import { Player } from '@/logics/GameType'
import { playerName } from '@/logics/playerName'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'BoardCell',
  components: {},
  props: {
    stone: {
      type: String as PropType<Player | undefined>,
      default: undefined
    }
  },
  methods: {
    cellClick() {
      if (this.$props.stone) return
      this.$emit('place')
    },
    playerName(p: Player) {
      return playerName(p)
    }
  }
})
</script>

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
