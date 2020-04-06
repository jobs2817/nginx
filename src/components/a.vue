<template>
  <div>
    <div>a页面</div>
    <a @click="$router.push({path: '/b'})">跳b页面</a>
  </div>
</template>
