<template lang="html">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="20"
      :rules="nameRules"
      label="Dog's Name"
      required
      ></v-text-field>
      <v-select
        v-model="color"
        :items="colors"
        :rules="[v => !!v || 'Please select color!']"
        label="Color/Style"
        required
    ></v-select>
    <v-select
      v-model="style"
      :items="styles"
      :rules="[v => !!v || 'Please select style!']"
      label="Color Style"
      required
  ></v-select>
  <v-text-field
    v-model="weight"
    :rules="weightRules"
    label="Dog's Weight"
    required
    suffix="lbs"
    ></v-text-field>
  <v-radio-group
      v-model="gender"
      row
      mandatory
    >
    <template v-slot:label>
      <p>Gender</p>
    </template>
      <v-radio
        label="Male"
        value="male"
      ></v-radio>
      <v-radio
        label="Female"
        value="female"
      ></v-radio>
      <v-radio
        label="Other"
        value="other"
      ></v-radio>
    </v-radio-group>
    <v-menu
            v-model="dobMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                label="DOB"
                prepend-icon="mdi-calendar"
                readonly
                :value="dobDisplayValue"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              locale="en-in"
              v-model="dob"
              no-title
              @input="dobMenu = false"
              :min="minDate"
            ></v-date-picker>
          </v-menu>
          <v-text-field
            v-model="parents"
            label="Dog's Parents Name"
            required
            ></v-text-field>
            <v-text-field
              v-model="imgURL"
              label="Dog's Image Link"
              ></v-text-field>
              <v-text-field
              v-model="price"
              label="Selling Price"
              prefix="$"
              :rules="[v => !!v || 'Please input a price even if its 0.00']"
              ></v-text-field>
              <v-textarea
          name="description"
          label="Description"
          v-model="description"
          required
          auto-grow
        ></v-textarea>
        <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Submit
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters'
      ],
      color: '',
      colors: [
        'black & white',
        'brindle & white',
        'seal & white'
      ],
      style: '',
      styles: [
        'tuxedo',
        'splash'
      ],
      gender: '',
      dob: null,
      weight: null,
      weightRules: [
        v => !!v || 'Weight is required',
        v => (v && v <= 40) || 'No way its over 40lbs'
      ],
      parents: '',
      imgURL: '',
      price: null,
      description: ''
    }
  },
  computed: {
    dobDisplayValue() {
      return this.dob
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
