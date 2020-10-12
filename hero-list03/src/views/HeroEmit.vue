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
        <input type="radio" value="男" name='gender' v-model='newObj.gender'> 男
        <input type="radio" value="女" name='gender' v-model='newObj.gender'> 女
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
        gender: '',
        cTime: ''

      }
    }
  },

  created () {
    // 一进来根据id获取值渲染到页面上
    const id = this.$route.params.id
    this.$axios.get(`/heroes/${id}`).then(res => {
      // console.log('请求成功')
      // console.log(res.data)
      this.newObj = res.data
    })
  },
  methods: {
    // 天机添加按钮回到原页面
    list () {
      if (this.newObj.heroName === 0) return
      const id = this.$route.params.id
      this.$axios.put(`/heroes/${id}`, this.newObj).then(res => {
        this.$router.push('/heros')
      })
    }

  }
}

</script>
