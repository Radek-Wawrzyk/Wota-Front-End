<template>
  <div class="course-table">
    <el-row class="course-table-header">
      <el-col :span="8" class="table-row">Termin kursu {{this.adress1[0].values.length > 0}}</el-col>
      <el-col :span="8" class="table-row">Dni zajęć teoretycznych</el-col>
      <el-col :span="8" class="table-row">Godziny zajęć teoretycznych</el-col>
    </el-row>
    <span v-if="this.adress1[0].values.length > 0">
      <el-row class="table-place-title">
        <el-col :span="24">
          <h4>Piwna 3</h4>
        </el-col>
      </el-row>
      <el-row
        class="table-row-wrapper"
        v-for="(sch, index) in this.schedule[0].values"
        :key="index"
      >
        <el-col :span="8" class="table-row">{{sch.dayFromTo[0]}} - {{sch.dayFromTo[1]}}</el-col>
        <el-col :span="8" class="table-row">{{sch.theoryDays}}</el-col>
        <el-col :span="8" class="table-row">{{sch.hoursFromTo[0]}} - {{sch.hoursFromTo[1]}}</el-col>
      </el-row>
    </span>
    <span v-if="this.adress2[0].values.length > 0">
      <el-row class="table-place-title">
        <el-col :span="24">
          <h4>Nowy Józefów 6</h4>
        </el-col>
      </el-row>
      <el-row
        class="table-row-wrapper"
        v-for="(sch, index) in this.schedule[1].values"
        :key="index"
      >
        <el-col :span="8" class="table-row">{{sch.dayFromTo[0]}} - {{sch.dayFromTo[1]}}</el-col>
        <el-col :span="8" class="table-row">{{sch.theoryDays}}</el-col>
        <el-col :span="8" class="table-row">{{sch.hoursFromTo[0]}} - {{sch.hoursFromTo[1]}}</el-col>
      </el-row>
    </span>
    <span v-if="this.adress3[0].values.length > 0">
      <el-row class="table-place-title">
        <el-col :span="24">
          <h4>Retkińska 83</h4>
        </el-col>
      </el-row>
      <el-row
        class="table-row-wrapper"
        v-for="(sch, index) in this.schedule[2].values"
        :key="index"
      >
        <el-col :span="8" class="table-row">{{sch.dayFromTo[0]}} - {{sch.dayFromTo[1]}}</el-col>
        <el-col :span="8" class="table-row">{{sch.theoryDays}}</el-col>
        <el-col :span="8" class="table-row">{{sch.hoursFromTo[0]}} - {{sch.hoursFromTo[1]}}</el-col>
      </el-row>
    </span>
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
  }),
  created() {
    this.adress1 = this.schedule.filter(adress => adress.type == "adress1");
    this.adress2 = this.schedule.filter(adress => adress.type == "adress2");
    this.adress3 = this.schedule.filter(adress => adress.type == "adress3");
  }
};
</script>

<style lang="scss" scoped src="./CourseTable.scss" />