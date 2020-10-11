<template>
  <div class="hero-add">
    <legend>编辑英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input type="text" class="form-control" v-model='newObj.heroName' >
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input type="radio" value="男" name='gender' v-model='newObj.gender' > 男
        <input type="radio" value="女" name='gender' v-model='newObj.gender'> 女
      </div>
    </div>
    <button class="btn btn-primary" @click='patch'>提交</button>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  // 进来先渲染页面
  created () {
    if (this.heroName === '') return
    const id = this.$route.params.id
    this.$axios.get(`/heroes/${id}`).then(
      res => {
        // console.log(res.data)
        this.newObj = res.data
      }
    )
  },
  data () {
    return {
      newObj: {
        id: '',
        heroName: '',
        gender: '男',
        cTime: ''
      }

    }
  },
  methods: {
    patch () {
      if (this.newObj.name === '') return
      // 发送修改请求
      const id = this.$route.params.id
      this.$axios.put(`/heroes/${id}`, this.newObj).then(res =>
        this.$router.push('/hero')
      )
    }

  }
}
</script>
