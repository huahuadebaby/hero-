<template>
  <div class="hero-add">
    <legend>添加英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input type="text" class="form-control"  v-model='heroname'/>
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input type="radio" name='gender' v-model='gender'  value='男'> 男
        <input type="radio" name='gender' v-model='gender' value='女'> 女
      </div>
    </div>
    <button class="btn btn-primary" @click='add'>提交</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gender: '男',
      heroname: ''
    }
  },

  methods: {
    // 添加功能
    add () {
      if (this.heroname === '') return
      this.$axios.post('/heroes', {
        heroName: this.heroname,
        gender: this.gender,
        cTime: +new Date()
      }).then(res => {
        // 添加成功 跳转回hero 页面
        this.$router.push('./hero')
      })
    }
  }
}
</script>
