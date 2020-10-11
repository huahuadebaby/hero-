<template>
  <div class="hero-add">
    <legend>添加英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input type="text" class="form-control" v-model.trim='heroname' />
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input type="radio" name='gender' value='男' v-model ='gender'> 男
        <input type="radio" name='gender' value='女' v-model ='gender'> 女
      </div>
    </div>
    <button class="btn btn-primary" @click='add'>提交</button>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      heroname: '',
      gender: '男'
    }
  },
  methods: {
    add () {
      // 判断是否为空
      if (this.heroname === '') return
      this.$axios.post('/heroes', {
        heroName: this.heroname,
        gender: this.gender,
        cTime: +new Date()

      }).then(res => {
        // console.log(res.data)
        // 跳转路由
        this.$router.push('/hero')
      })
    }
  }
}
</script>
