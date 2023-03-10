<template>
  <ul class="flex p-5 bg-primary-300 rounded-sm w-full justify-center">
    <li>
      <router-link
        class="mx-3 block bg-indigo-500 text-white py-2 px-6 rounded-xl"
        to="/posts/add"
        >ADD</router-link
      >
    </li>

    <li>
      <router-link
        class="mx-3 block bg-indigo-500 text-white py-2 px-6 rounded-xl"
        to="/posts/list"
        >LIST</router-link
      >
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  name: "post",
};
</script>

<style lang="css"></style>
