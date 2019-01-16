<template>
  <div class="course-table">
    <el-row class="course-table-header">
      <el-col :span="8" class="table-row">Termin kursu</el-col>
      <el-col :span="8" class="table-row">Dni zajęć teoretycznych</el-col>
      <el-col :span="8" class="table-row">Godziny zajęć teoretycznych</el-col>
    </el-row>
    <el-row class="table-place-title">
      <el-col :span="24">
        <h4>Retkińska 83</h4>
      </el-col>
    </el-row>
    <el-row class="table-row-wrapper">
      <el-col :span="8" class="table-row">15.10.2018 - 19.10.2018</el-col>
      <el-col :span="8" class="table-row">codziennie</el-col>
      <el-col :span="8" class="table-row">16:00 - 21:00</el-col>
    </el-row>
    <el-row class="table-row-wrapper">
      <el-col :span="8" class="table-row">15.10.2018 - 19.10.2018</el-col>
      <el-col :span="8" class="table-row">codziennie</el-col>
      <el-col :span="8" class="table-row">16:00 - 21:00</el-col>
    </el-row>
    <el-row class="table-place-title">
      <el-col :span="24">
        <h4>Nawrot 46</h4>
      </el-col>
    </el-row>
    <el-row class="table-row-wrapper">
      <el-col :span="8" class="table-row">15.10.2018 - 19.10.2018</el-col>
      <el-col :span="8" class="table-row">codziennie</el-col>
      <el-col :span="8" class="table-row">16:00 - 21:00</el-col>
    </el-row>
    <el-row class="table-row-wrapper">
      <el-col :span="8" class="table-row">15.10.2018 - 19.10.2018</el-col>
      <el-col :span="8" class="table-row">codziennie</el-col>
      <el-col :span="8" class="table-row">16:00 - 21:00</el-col>
    </el-row>
    <el-row class="table-row-wrapper">
      <el-col :span="8" class="table-row">15.10.2018 - 19.10.2018</el-col>
      <el-col :span="8" class="table-row">codziennie</el-col>
      <el-col :span="8" class="table-row">16:00 - 21:00</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "courseTable",
  data: () => ({
    tableData: []
  })
};
</script>

<style lang="scss" scoped src="./CourseTable.scss" />