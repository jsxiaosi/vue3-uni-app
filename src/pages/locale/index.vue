<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const i18n = useI18n();

  const onLocaleChange = (e: string) => {
    i18n.locale.value = e;
    uni.setLocale(e);
  };
</script>

<template>
  <div class="content">
    <button class="page-button" @click="onLocaleChange('zh-Hans')">中文</button>

    <button class="page-button" @click="onLocaleChange('ja')">日本語</button>

    <button class="page-button" @click="onLocaleChange('en')">English</button>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .page-button {
      margin-top: 36rpx;
      width: 500rpx;
      height: 80rpx;
      line-height: 80rpx;
    }
  }
</style>
