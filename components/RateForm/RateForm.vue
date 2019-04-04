<template>
  <main>
    <div class="rate-form-wrapper">
      <h2 class="section-title">Oceń instruktora</h2>
      <h3 class="sub" v-if="this.submited">Dziękujemy za ocene instruktora</h3>
      <!-- {{this.credentials}} -->
      <!-- {{this.instructor._id}} -->
      <div class="container">
        <el-form>
          <el-row :gutter="30">
            <el-col :md="12" class="form-row">
              <el-input
                v-model="credentials.name"
                placeholder="Imię"
                class="input-transparent-white"
              ></el-input>
            </el-col>
            <el-col :md="12" class="form-row">
              <el-input
                v-model="credentials.surrname"
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
              <el-select
                v-model="credentials.rate"
                placeholder="Twoja ocena"
                class="input-transparent-white"
              >
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
                v-model="credentials.comment"
                class="input-transparent-white"
              ></el-input>
            </el-col>
            <!-- {{this.credentials.rodo || 'Brak'}} -->
            <el-col :md="24" class="form-row form-rodo">
              <el-radio v-model="credentials.rodo">Akceptuję Regulamin.
                <a
                  href="https://hubertkuzdak.com/doc/RODO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="color-white rate-form-a"
                >RODO</a>
              </el-radio>
              <a
                href="https://hubertkuzdak.com/doc/REGULAMIN_O%C5%9ARODKA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="color-white rate-form-a"
              >REGULAMIN</a>
            </el-col>
            <el-col :md="24" class="submit-btn">
              <button class="btn btn-outline-white" @click="submit" type="button">Dodaj ocenę</button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "rateform",
  props: {
    instructor: Object
  },
  data: () => ({
    submited: false,
    credentials: {
      name: "",
      surrname: "",
      email: "",
      rate: "",
      rodo: true,
      title: "",
      comment: ""
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
    async submit() {
    
      try {
        const fullForm = Object.assign({}, this.credentials, {
          instructorId: this.instructor._id,
          rodo: true
        });

        const response = await axios.post(`${process.env.API}/rate`, fullForm);

        if (response.status === 200) {
          this.submited = true;
          this.credentials.name = "";
          this.credentials.surrname = "";
          this.credentials.email = "";
          this.credentials.rate = "";
          this.credentials.title = "";
          this.credentials.comment = "";
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" src="./RateForm.scss" />