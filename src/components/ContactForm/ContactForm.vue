<template>
  <section class="contact-form">
    <h2 class="contact-form-title">Kontakt</h2>
    <div class="container">
      <el-form  @submit.prevent="submit">
        <el-row :gutter="30">
          <el-col :md="12">
            <el-input v-model="credentials.name" placeholder="Imię"></el-input>
          </el-col>
          <el-col :md="12">
            <el-input v-model="credentials.surname" placeholder="Nazwisko"></el-input>
          </el-col>
          <el-col :md="12">
            <el-input v-model="credentials.email" placeholder="Adres email"></el-input>
          </el-col>
          <el-col :md="12">
            <el-select v-model="credentials.course" placeholder="Rodzaj kursu">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :md="24">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="Treść wiadomości..."
              v-model="credentials.message">
            </el-input>
          </el-col>
          <el-col :md="24" class="center">
            <button class="btn btn-outline" @click="submit" type="submit">Wyślij</button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </section>
</template>

<script>

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
  methods: {
    submit() {
      alert(`Form submited!`);
    }
  }
};

</script>

<style lang="scss" scoped src="./ContactForm.scss" />

