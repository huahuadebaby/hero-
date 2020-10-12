<template>
  <div class="hero-add">
    <legend>添加英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input type="text" class="form-control" v-model='heroName'/>
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input type="radio"  name='gender' value='男' v-model='gender'> 男
        <input type="radio" name='gender' value='女' v-model='gender'> 女
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
      heroName: ''

    }
  },
  methods: {
    // 添加功能
    add () {
      if (this.heroName === '') return
      this.$axios.post('/heroes', {
        cTime: +new Date(),
        heroName: this.heroName,
        gender: this.gender
      }).then(res => {
        this.$router.push('/heros')
      })
    }

  }

}
</script>
