<template>
  <div class="ciname">
      <Header title='喵喵影院'/>
      <div id="content">
			<div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>
      <Cilist />
      </div>
      <Tabbar />
  </div>
</template>

<script>
import Header from '@/components/header'
import Tabbar from '@/components/tabbar'
import Cilist from '@/components/cilist'
export default {
  name: "Cinema",
  components:{
      Header,
      Tabbar,
      Cilist
  }
};
</script>

<style scoped lang="less">
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
