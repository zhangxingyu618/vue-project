<template>
  <div id="module">
    <el-container>
      <!-- 左侧导航 -->
        <Nav />
      <el-container>
        <!-- 头部 -->
        <el-header>
          <el-button type="primary" class="exit" @click="goBack">退出</el-button>
          <!-- 面包屑 -->
          <Breadcrumb />
        </el-header>
        <!-- 主体部分 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from './Nav' 
import Breadcrumb from './Breadcrumb' 

export default {
  data(){
    return {
      
    }
  },
  components:{
    Nav,
    Breadcrumb
  },
  methods:{
    goBack(){
      sessionStorage.removeItem("username");
      this.$router.push('/login');
    }
  }
}
</script>
