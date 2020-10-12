<template>
  <div class="hero">
    <p><a href="javascript:;" class="btn btn-primary" @click='$router.push("/hero-add")'>添加英雄</a></p>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>英雄名称</th>
          <th>英雄性别</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='item in list' :key ='item.id'>
          <td>{{item.id}}</td>
          <td>{{item.heroName}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.cTime|time}}</td>
          <td>
            <button class="btn btn-success" @click='emit(item.id)'>编辑</button>
            &nbsp;
            <button class="btn btn-danger" @click=del(item.id)>删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  created () {
    this.showList()

    // 一进来先发送请求获取数据渲染页面
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    // 渲染功能
    showList () {
      this.$axios.get('/heroes').then(res => {
        this.list = res.data
      })
    },
    // 删除功能
    del (id) {
      // 弹出提醒框
      const flag = confirm('你确定要删除吗？？')
      if (flag) {
        this.$axios.delete(`/heroes/${id}`).then(res => {
          this.showList()
        })
      }
    },
    // 编辑功能

    emit (id) {
      this.$router.push(`/hero-emit/${id}`)
    }
  }
}
</script>
