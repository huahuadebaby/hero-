<template>
  <div class="hero-add">
    <legend>编辑英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input type="text" class="form-control" v-model ='newObj.heroName'/>
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input type="radio" value="男"  nane='gender' v-model ='newObj.gender'> 男
        <input type="radio" value="女" nane='gender' v-model ='newObj.gender'> 女
      </div>
    </div>
    <button class="btn btn-primary" @click='list'>提交</button>
  </div>
</template>

<script>
export default {
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
    // 点击提交功能 ,发送修改请求 返回hero页面
    list () {
      if (this.newObj.heroName === '') return
      const id = this.$route.params.id
      this.$axios.put(`/heroes/${id}`, this.newObj).then(res => {
        this.$router.push('/hero')
      })
    }

  },
  created () {
    // 根据id渲染当前页面
    const id = this.$route.params.id
    this.$axios.get(`/heroes/${id} `).then(res => {
      console.log(res.data)
      this.newObj = res.data
    })
  }
}
</script>
