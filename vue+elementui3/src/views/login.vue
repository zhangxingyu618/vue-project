<template>
   <div class="login">
      <p class="login-title">金渡教育学员管理系统</p>
      <div class="login-content">
        <div class="login-main">
        <div class="login-container">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="密  码" prop="password">
              <el-input type="password"  v-model="ruleForm.password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="login()">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return {
      ruleForm: {
          name:'admin123',
          password:'admin123'
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
    login(){
      let {name,password } = this.ruleForm;
      this.$http({
        method:'post',
        url:'/get_login',
        data:{user:name,password:password}
      }).then(res=>{
        console.log(res);
        let {code} = res.data;
        if(code == '200'){
          sessionStorage.setItem('username',name);
          this.$router.push('/home');
        }
      })
    }
  }
}
</script>
