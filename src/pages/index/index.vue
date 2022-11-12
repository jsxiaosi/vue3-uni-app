<script setup lang="ts">
  const toPage = (url: string) => {
    uni.navigateTo({ url });
  };
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ $t('page.index') }}</text>
    </view>

    <button class="page-button" @click="toPage('/pages/pinia/index')">pinia</button>

    <button class="page-button" @click="toPage('/pages/locale/index')">locale</button>
  </view>
</template>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }

  .page-button {
    margin-top: 36rpx;
    width: 500rpx;
    height: 80rpx;
    line-height: 80rpx;
  }
</style>
