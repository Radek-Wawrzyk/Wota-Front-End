<template>
    <table class="zui-table-rounded">
      <thead>
        <tr>
          <th></th>
          <th>Kategoria</th>
          <th>Praktyka</th>
          <th>Teoria</th>
          <th>Uwagi</th>
          <th>Cena kursu</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <img
              :src="require('../../assets/img/kategorie2/A.png')"
              alt="Kategoria A"
            >
          </th>
          <th>A</th>
          <th>30h</th>
          <th>25h</th>
          <th>Brak</th>
          <th>1 300zł</th>
          <th class="table-cell-button">
            <i class="el-icon-caret-right"></i>
          </th>
        </tr>
        <tr>
          <th>
            <img
              :src="require('../../assets/img/kategorie2/A1.png')"
              alt="kategoria A1"
            >
          </th>
          <th>A1</th>
          <th>Praktyka</th>
          <th>Teoria</th>
          <th>Uwagi</th>
          <th>Cena kursu</th>
          <th class="table-cell-button">
            <i class="el-icon-caret-right"></i>
          </th>
        </tr>
        <tr>
          <th>
            <img
              :src="require('../../assets/img/kategorie2/B.png')"
              alt="Kategoria B"
            >
          </th>
          <th>B</th>
          <th>30h</th>
          <th>25h</th>
          <th>Brak</th>
          <th>1 300zł</th>
          <th class="table-cell-button">
            <i class="el-icon-caret-right"></i>
          </th>
        </tr>
        <tr>
          <th>
            <img
              :src="require('../../assets/img/kategorie2/B1.png')"
              alt="Kategoria B2"
            >
          </th>
          <th>B2</th>
          <th>30h</th>
          <th>25h</th>
          <th>Brak</th>
          <th>1 300zł</th>
          <th class="table-cell-button">
            <i class="el-icon-caret-right"></i>
          </th>
        </tr>
        <tr>
          <th>
            <img
              :src="require('../../assets/img/kategorie2/BE.png')"
              alt="Kategoria BE"
            >
          </th>
          <th>BE</th>
          <th>30h</th>
          <th>25h</th>
          <th>Brak</th>
          <th>1 300zł</th>
          <th class="table-cell-button">
            <i class="el-icon-caret-right"></i>
          </th>
        </tr>
        <tr>
          <th>
            <img
              :src="require('../../assets/img/kategorie2/C.png')"
              alt="kategoria C"
            >
          </th>
          <th>C</th>
          <th>30h</th>
          <th>25h</th>
          <th>Brak</th>
          <th>1 300zł</th>
          <th class="table-cell-button">
            <i class="el-icon-caret-right"></i>
          </th>
        </tr>
        <tr>
          <th>
            <img
              :src="require('../../assets/img/kategorie2/D.png')"
              alt="kategoria D"
            >
          </th>
          <th>D</th>
          <th>30h</th>
          <th>25h</th>
          <th>Brak</th>
          <th>1 300zł</th>
          <th class="table-cell-button">
            <i class="el-icon-caret-right"></i>
          </th>
        </tr>
        <tr>
          <th>
            <img
              :src="require('../../assets/img/kategorie2/T.png')"
              alt="kategoria T"
            >
          </th>
          <th>T</th>
          <th>30h</th>
          <th>25h</th>
          <th>Brak</th>
          <th>1 300zł</th>
          <th class="table-cell-button">
            <i class="el-icon-caret-right"></i>
          </th>
        </tr>
        <tr>
          <th>
            <img
              :src="require('../../assets/img/kategorie2/TAXI.png')"
              alt="kategoria taxi"
            >
          </th>
          <th>TAXI</th>
          <th>30h</th>
          <th>25h</th>
          <th>Brak</th>
          <th>1 300zł</th>
          <th class="table-cell-button">
            <i class="el-icon-caret-right"></i>
          </th>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: "coursesTable",
  data: () => ({
    tableData: []
  })
};
</script>

<style lang="scss" scoped src="./CoursesTable.scss" />