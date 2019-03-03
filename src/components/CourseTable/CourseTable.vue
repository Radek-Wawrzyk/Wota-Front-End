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
    <el-row class="table-row-wrapper" v-for="(sch, index) in this.schedule[0].values" :key="index">
      <el-col :span="8" class="table-row">{{sch.dayFromTo[0]}} - {{sch.dayFromTo[1]}}</el-col>
      <el-col :span="8" class="table-row">{{sch.theoryDays}}</el-col>
      <el-col :span="8" class="table-row">{{sch.hoursFromTo[0]}} - {{sch.hoursFromTo[1]}}</el-col>
    </el-row>
    <el-row class="table-place-title" v-if="this.schedule.length >= 1">
      <el-col :span="24">
        <h4>Nawrot 46</h4>
      </el-col>
    </el-row>
    <el-row class="table-row-wrapper" v-for="(sch, index) in this.schedule[1].values" :key="index">
      <el-col :span="8" class="table-row">{{sch.dayFromTo[0]}} - {{sch.dayFromTo[1]}}</el-col>
      <el-col :span="8" class="table-row">{{sch.theoryDays}}</el-col>
      <el-col :span="8" class="table-row">{{sch.hoursFromTo[0]}} - {{sch.hoursFromTo[1]}}</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "courseTable",
  props: {
    schedule: Array
  },
  data: () => ({
    tableData: []
  })
};
</script>

<style lang="scss" scoped src="./CourseTable.scss" />