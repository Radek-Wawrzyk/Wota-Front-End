<template>
  <section class="contact-form">
    <h2 class="contact-form-title">{{title}}</h2>
    <div class="container">
      <el-form >
        <el-row :gutter="30">
          <el-col :md="12">
            <el-input v-model="credentials.name" placeholder="Imię" name="imie" v-validate="'required'"></el-input>
            <transition name="fade-down">
               <span class="el-form-item__error" v-if="errors.has('imie')">{{errors.first('imie')}}</span>
            </transition>
          </el-col>
          <el-col :md="12">
            <el-input v-model="credentials.surname" placeholder="Nazwisko" v-validate="'required'" name="nazwisko"></el-input>
            <transition name="fade-down">
               <span class="el-form-item__error" v-if="errors.has('nazwisko')">{{errors.first('nazwisko')}}</span>
            </transition>
          </el-col>
          <el-col :md="12">
            <el-input v-model="credentials.email" placeholder="Adres email" name="email" v-validate="'required|email'"></el-input>
            <transition name="fade-down">
               <span class="el-form-item__error" v-if="errors.has('email')">{{errors.first('email')}}</span>
            </transition>
          </el-col>
          <el-col :md="12">
            <el-select v-model="credentials.course" placeholder="Rodzaj kursu">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                v-validate="'required'"
                name="select"
                :value="item.value">
              </el-option>
            </el-select>
              <transition name="fade-down">
               <span class="el-form-item__error" v-if="errors.has('select')">{{errors.first('select')}}</span>
            </transition>
          </el-col>
          <el-col :md="24">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="Treść wiadomości..."
              name="wiadomosc"
              v-validate="'required'"
              v-model="credentials.message">
            </el-input>
            <transition name="fade-down">
               <span class="el-form-item__error" v-if="errors.has('wiadomosc')">{{errors.first('wiadomosc')}}</span>
            </transition>
          </el-col>
          <el-col :md="24" class="center">
            <button class="btn btn-outline" @click="submitForm()" type="button" >Wyślij</button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { Validator } from 'vee-validate';

const dictionary = {
  en: {
    messages: {
      email: 'Adres email jest nieprawidłowy',
      required: field => `Pole ${field} jest wymagane`
    }
  },
};

Validator.localize(dictionary);
export default {
  name: 'ContactForm',
  data: () => ({
    credentials: {
      name: '',
      surname: '',
      email: '',
      course: '',
      message: ''
    },
    options: [{
      value: 'Brak',
      label: 'Brak'
    }]
  }),
  props: {
    title: String
  },
  methods: {
    async submitForm() {
      const valid = await this.$validator.validateAll();
      valid ? this.sendMessage() : false;
    },
    async sendMessage() {
      try {
        const response = await axios.post(`${process.env.API}/contact`, this.credentials);
        this.$notify({
          title: 'Sukces!',
          message: 'Dziękujemy za kontakt!',
          type: 'success'
        });
        for (let key in this.fields) {
          this.fields[key] = "";
        }
      } catch(err) {
        this.$notify({
          title: 'Błąd!',
          message: 'Wiadomość nie zostałą wysłana - błąd serwera',
          type: 'error'
        });
      }
    }
  },
  async created() {
    if (process.browser) {
      try {
        const response = await axios.get(`${process.env.API}/courses`);
        const categories = response.data;

        categories.forEach(category => {
          this.options.push({ value: category.title, label: category.title });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};

</script>

<style lang="scss" scoped src="./ContactForm.scss" />

