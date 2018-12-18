import { getUserPageList } from '@/api/table'
import { deleteUser } from '../../api/table'

export default {
  data() {
    return {
      listLoading: true,
      page: {
        list: [],
        total: 10
      },
      query: {
        pageNum: 1,
        pageSize: 10,
        condition: null
      },
      multipleSelection: []
    }
  },
  created() {
    this.pageList()
  },
  methods: {
    // 获取分页列表
    pageList() {
      this.listLoading = true
      getUserPageList(this.query).then(response => {
        this.page = response.data
        this.listLoading = false
      })
    },
    // 删除
    handleDelete(id) {
      this.$confirm('确认要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteUser(id).then(reponse => {
          this.pageList()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 删除
    handleDeleteList() {
      console.log(this.multipleSelection)
    },
    handleSizeChange(val) {
      this.query.pageNum = 1
      this.query.pageSize = val
      this.pageList()
    },
    handleCurrentChange(val) {
      this.query.pageNum = val
      this.pageList()
    },
    onSubmit() {
      this.query.pageNum = 1
      this.query.pageSize = 10
      this.pageList()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 跳转添加页面
    add() {
      this.$router.push('/form/index')
    }
  }
}
