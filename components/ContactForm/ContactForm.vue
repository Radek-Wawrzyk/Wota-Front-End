<template>
  <section class="contact-form">
    <h2 class="contact-form-title">{{title}}</h2>
    <div class="container">
      <el-form >
        <el-row :gutter="30">
          <el-col :md="12">
            <el-input v-model="credentials.name" placeholder="Imię" name="name" v-validate="'required'"></el-input>
            <transition name="fade-down">
               <span class="el-form-item__error" v-if="errors.has('name')">{{errors.first('name')}}</span>
            </transition>
          </el-col>
          <el-col :md="12">
            <el-input v-model="credentials.surname" placeholder="Nazwisko" v-validate="'required'" name="surname"></el-input>
            <transition name="fade-down">
               <span class="el-form-item__error" v-if="errors.has('surname')">{{errors.first('surname')}}</span>
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
              name="message"
              v-validate="'required'"
              v-model="credentials.message">
            </el-input>
            <transition name="fade-down">
               <span class="el-form-item__error" v-if="errors.has('message')">{{errors.first('message')}}</span>
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
import { API } from '@/main.js';

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
    options: [
      {
        value: 'A',
        label: 'A'
      },
      {
        value: 'B1',
        label: 'B1'
      }
    ]
  }),
  props: {
    title: String
  },
  methods: {
    async submitForm() {
      const valid = await this.$validator.validateAll();

      if (valid) {
        //VALID REQUEST 
      }
    }
  }
};

</script>

<style lang="scss" scoped src="./ContactForm.scss" />

