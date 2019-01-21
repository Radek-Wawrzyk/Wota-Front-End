<template>
  <main>
    <div class="rate-form-wrapper">
      <h2 class="section-title">Oceń instruktora</h2>
      <div class="container">
        <el-form @submit.prevent="submit">
          <el-row :gutter="30">
            <el-col :md="12" class="form-row">
              <el-input v-model="credentials.name" placeholder="Imię" class="input-transparent-white"></el-input>
            </el-col>
            <el-col :md="12" class="form-row">
              <el-input
                v-model="credentials.surname"
                placeholder="Nazwisko"
                class="input-transparent-white"
              ></el-input>
            </el-col>
            <el-col :md="12" class="form-row">
              <el-input
                v-model="credentials.email"
                placeholder="Adres email"
                class="input-transparent-white"
              ></el-input>
            </el-col>
            <el-col :md="12" class="form-row">
              <el-select v-model="credentials.rate" placeholder="Twoja ocena" class="input-transparent-white">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :md="24" class="form-row">
              <el-input
                v-model="credentials.title"
                placeholder="Tytuł twojej opinii"
                class="input-transparent-white"
              ></el-input>
            </el-col>
            <el-col :md="24" class="form-row">
              <el-input
                type="textarea"
                :rows="8"
                placeholder="Treść wiadomości..."
                v-model="credentials.message"
                class="input-transparent-white"
              ></el-input>
            </el-col>
            <el-col :md="24" class="form-row">
              <el-radio v-model="credentials.rodo">Rodo i regulamin Ullamco mollit sint quis esse amet.</el-radio>
            </el-col>
            <el-col :md="24" class="submit-btn">
              <button class="btn btn-outline-white" @click="submit" type="submit">Dodaj ocene</button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "rateform",
  data: () => ({
    credentials: {
      name: "",
      surname: "",
      email: "",
      rate: "",
      rodo: "",
      title: "",
      message: ""
    },
    options: [
      {
        value: "1",
        label: "1"
      },
      {
        value: "2",
        label: "2"
      },
      {
        value: "3",
        label: "3"
      },
      {
        value: "4",
        label: "4"
      },
      {
        value: "5",
        label: "5"
      }
    ]
  }),
  methods: {
    submit() {
      alert(`Form submited!`);
    }
  }
};
</script>


<style lang="scss" src="./RateForm.scss" />