<template>
  <div>
    <!-- 无子级 -->
      <el-menu-item :index="item.url" v-if="!item.child">
        <i class="el-icon-location"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>

      <!-- 有子级 -->
      <el-submenu :index="path" v-else>
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.name}}</span>
        </template>
        <NavItem v-for="child in item.child" :key="child.url" :item="child" :path="child.url"/>
      </el-submenu>

      
  </div>
     
</template>

<script>
export default {
  name:'NavItem',
  data(){
    return {
      items:[]
    }
  },
  props:['item','path']  //父传子参数
}
</script>

<style>

</style>