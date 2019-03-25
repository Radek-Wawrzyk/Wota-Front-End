<template>
  <section class="contact-form">
    <h2 class="contact-form-title">{{title}}</h2>
    <h4 class="error-message">{{this.errorMessage}}</h4>
    <h4 class="success-message">{{this.successMessage}}</h4>
    <div class="container">
      <el-form>
        <el-row :gutter="30">
          <el-col :md="12">
            <el-input v-model="credentials.name" placeholder="Imię" name="name"></el-input>
          </el-col>
          <el-col :md="12">
            <el-input v-model="credentials.surrname" placeholder="Nazwisko" name="surrname"></el-input>
          </el-col>
          <el-col :md="12">
            <el-input v-model="credentials.email" placeholder="Adres email" name="email"></el-input>
          </el-col>
          <el-col :md="12">
            <el-select v-model="credentials.course" placeholder="Rodzaj kursu">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                name="select"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :md="24">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="Treść wiadomości..."
              name="message"
              v-model="credentials.message"
            ></el-input>
          </el-col>
          <el-col :md="24" class="center">
            <button class="btn btn-outline" @click="submitForm()" type="button">Wyślij</button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { API } from "@/main.js";

export default {
  name: "ContactForm",
  data: () => ({
    errorMessage: "",
    successMessage: "",
    credentials: {
      name: "",
      surrname: "",
      email: "",
      course: "",
      message: ""
    },
    options: [
      {
        value: "Brak",
        label: "Brak"
      }
    ]
  }),
  props: {
    title: String
  },
  methods: {
    async submitForm() {
      const valid =
        !!this.credentials.name &&
        !!this.credentials.surrname &&
        !!this.credentials.email &&
        !!this.credentials.message;

      if (valid) {
        this.errorMessage = "";
        this.successMessage = "Dziękujemy za kontakt!";
        const response = await axios.post(`${API}/contact`, this.credentials);

        if (response.status === 200) {
          this.credentials.name = "";
          this.credentials.surrname = "";
          this.credentials.email = "";
          this.credentials.course = "";
          this.credentials.message = "";
        }
      } else {
        this.errorMessage = "Nie wszystkie pola zostały poprawnie uzupełnione";
      }
    }
  },
  async created() {
    try {
      const response = await axios.get(`${API}/courses`);
      const categories = response.data;
      categories.forEach(category => {
        this.options.push({ value: category.title, label: category.title });
      });
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./ContactForm.scss" />

