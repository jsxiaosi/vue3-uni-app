<script setup lang="ts">
  import { useCounterStoreHook } from '@/store/modules/counter';

  const counter = useCounterStoreHook();

  const addNum = () => {
    counter.setNum();
  };
</script>

<template>
  <view class="pinia-page">
    <text>数量：{{ counter.num }}</text>
    <button class="add" @click="addNum">add</button>
  </view>
</template>

<style lang="scss" scoped>
  .pinia-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20rpx 0;

    .add {
      margin-top: 20rpx;
      width: 200rpx;
      height: 60rpx;
      line-height: 60rpx;
    }
  }
</style>
