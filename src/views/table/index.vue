<script src="./index.js"/>
<template>
  <div class="app-container">
    <el-form :inline="true" :model="query" class="demo-form-inline">
      <el-col :span="16">
        <el-button type="primary" icon="el-icon-edit" @click="add">添加</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="handleDeleteList">批量删除</el-button>
        <el-button icon="el-icon-upload2">导入数据</el-button>
        <el-button icon="el-icon-download">导出数据</el-button>
        <el-button type="info" icon="el-icon-view">审核数据</el-button>
      </el-col>
      <el-col :span="8">
        <el-form-item>
          <el-input v-model="query.condition" placeholder="审批人"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-col>
    </el-form>
    <el-table
      v-loading="listLoading"
      ref="multipleTable"
      :data="page.list"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"/>
      <el-table-column align="center" label="id" width="95" prop="id"/>
      <el-table-column align="center" label="用户名" prop="username"/>
      <el-table-column align="center" label="密码" prop="password"/>
      <el-table-column align="center" label="创建时间" prop="createTime"/>
      <el-table-column align="center" label="更新时间" prop="updateTime"/>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page.sync="query.pageNum"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="query.pageSize"
      :total="page.total"
      layout="sizes, prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>
