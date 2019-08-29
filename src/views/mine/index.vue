<template>
  <div class="mine">
    <Header title="我的" />
    <div id="content">
      <Login />
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Header from "@/components/header";
import Tabbar from "@/components/tabbar";
import Login from "@/components/login";
export default {
  name: "Mine",
  components: {
    Header,
    Tabbar,
    Login
  }
};
</script>

<style scoped lang="less"></style>
