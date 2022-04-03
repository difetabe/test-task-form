<template>
  <div class="wrapper_form">
    <h1>Регистрация нового клиента.</h1>

    <form>
      <!-- Фамилия -->
      <div class="form-item" :class="{ 'form-item_error': $v.surname.$error }">
        <label class="form-item__label" for="surname">Фамилия клиента</label>
        <p class="form-item__title">
          <span class="important-lable">*</span> Фамилия
        </p>
        <input
          name="surname"
          id="surname"
          class="form-item__input"
          v-model.trim="$v.surname.$model"
        />
        <div class="error" v-if="!$v.surname.required">
          Поле обязательно к заполнению
        </div>
      </div>
      <!-- Имя -->
      <div class="form-item" :class="{ 'form-item_error': $v.name.$error }">
        <label class="form-item__label" for="name">Имя клиента</label>
        <p class="form-item__title">
          <span class="important-lable">*</span> Имя
        </p>
        <input
          name="name"
          id="name"
          class="form-item__input"
          v-model.trim="$v.name.$model"
        />
        <div class="error" v-if="!$v.surname.required">
          Поле обязательно к заполнению
        </div>
      </div>
      <!-- Отчество -->
      <div class="form-item">
        <label class="form-item__label" for="patronymic">Отчество</label>
        <p class="form-item__title">Отчество</p>
        <input id="patronymic" class="form-item__input" />
      </div>
      <!-- Дата рождения -->
      <div
        class="form-item"
        :class="{ 'form-item_error': $v.birthDate.$error }"
      >
        <label class="form-item__label" for="birthDate">Дата рождения</label>
        <p class="form-item__title">
          <span class="important-lable">*</span> Дата рождения
        </p>
        <input
          id="birthDate"
          name="birthDate"
          type="date"
          v-model="$v.birthDate.$model"
        />
        <div class="error" v-if="!$v.birthDate.required">
          Укажите дату рождения
        </div>
      </div>
      <!-- Номер телефона -->
      <div
        class="form-item"
        :class="{ 'form-item_error': $v.phoneNumber.$error }"
      >
        <label class="form-item__label" for="phoneNumber"
          >Контактный номер</label
        >
        <p class="form-item__title">
          <span class="important-lable">*</span> Номер телефона
        </p>
        <input
          id="phoneNumber"
          class="form-item__input"
          placeholder="7-(000)-(000)-(00)-(00)"
          v-model="$v.phoneNumber.$model"
        />
        <div class="error" v-if="!$v.phoneNumber.required">
          Поле обязательно к заполнению
        </div>
        <div class="error" v-if="!$v.phoneNumber.numeric">
          Поле должно содержать номер телефона
        </div>
        <div class="error" v-if="!$v.phoneNumber.minLength">
          Поле должно содержать 11 цифр
        </div>
        <div class="error" v-if="!$v.phoneNumber.correctNumber">
          Номер должен начинатся с "7"
        </div>
      </div>
      <!-- Пол -->
      <div class="form-item" :class="{ 'form-item_error': $v.gender.$error }">
        <p class="form-item__title">Укажите пол клиента</p>

        <label class="" for="male">м</label>
        <input
          type="radio"
          id="male"
          name="genderMale"
          value="male"
          v-model="$v.gender.$model"
        />

        <label class="" for="female">ж</label>
        <input
          type="radio"
          id="female"
          name="genferFemale"
          value="female"
          v-model="$v.gender.$model"
        />
      </div>
      <!-- Группа клиентов -->
      <div
        class="form-item"
        :class="{ 'form-item_error': $v.clientGroup.$error }"
      >
        <label id="clientGroup" />
        <p class="form-item__title">
          <span class="important-lable">*</span> Группа клиентов
        </p>
        <select class="form-item__input" size="1" v-model="$v.clientGroup.$model" id="clientGroup" multiple>
          <option value="" disabled>Укажите группу клиентов</option>
          <option value="VIP">VIP</option>
          <option value="Проблемные">Проблемные</option>
          <option value="ОМС">ОМС</option>
        </select>
      </div>
      <!-- Лечащий врач -->
      <div class="form-item" :class="{ 'form-item_error': $v.doctor.$error }">
        <label for="doctor" />
        <p class="form-item__title">
          <span class="important-lable">*</span>Укажите лечащего врача
        </p>
        <select class="form-item__input" id="doctor" v-model="$v.doctor.$model">
          <option disabled value="">Лечащий врач</option>
          <option value="VIP">Иванов</option>
          <option value="Проблемные">Захаров</option>
          <option value="ОМС">Чернышева</option>
        </select>
      </div>
      <!-- Не отправлять смс -->
      <div class="form-item">
        <label class="form-item__label" for="sms">Не отправлять СМС</label>
        Не отправлять СМС<input id="sms" type="checkbox" />
      </div>
      <hr />

      <h2>Адрес</h2>
      <!-- Индекс -->
      <div class="form-item">
        <label class="form-item__label" for="index">Индекс</label>
        <p class="form-item__title">Индекс</p>
        <input id="index" class="form-item__input" />
      </div>
      <!-- Страна -->
      <div class="form-item">
        <label class="form-item__label" for="country">Страна</label>
        <p class="form-item__title">Страна</p>
        <input id="country" class="form-item__input" />
      </div>
      <!-- Область -->
      <div class="form-item">
        <label class="form-item__label" for="region">Область</label>
        <p class="form-item__title">Область</p>
        <input id="region" class="form-item__input" />
      </div>
      <!-- Город * -->
      <div class="form-item" :class="{ 'form-item_error': $v.city.$error }">
        <label class="form-item__label" for="city">Город</label>
        <p class="form-item__title">
          <span class="_error-color">*</span> Город
        </p>
        <input
          id="city"
          class="form-item__input"
          v-model.trim="$v.city.$model"
        />
        <div class="error" v-if="!$v.city.required">
          Поле обязательно к заполнению
        </div>
      </div>
      <!-- Улица -->
      <div class="form-item">
        <label class="form-item__label" name="adress" id="street">Улица</label>
        <p class="form-item__title">Улица</p>
        <input for="street" class="form-item__input" />
      </div>
      <!-- Дом -->
      <div class="form-item">
        <label class="form-item__label" name="adress" id="house">Дом</label>
        <p class="form-item__title">Дом</p>
        <input for="street" class="form-item__input" />
      </div>

      <hr />

      <h2>Паспорт</h2>
      <!-- Тип документа (селектор: Паспорт, Свидетельство о рождении, Водительское удостоверение) -->
      <div
        class="form-item"
        :class="{ 'form-item_error': $v.documentType.$error }"
      >
        <p class="form-item__title">
          <span class="important-lable">*</span>Документ, подтверждающий
          личность
        </p>
        <select class="form-item__input" v-model="$v.documentType.$model">
          <option value="" disabled>Тип документа</option>
          <option value="Паспорт">Паспорт</option>
          <option value="Свидетельство о рождении">
            Свидетельство о рождении
          </option>
          <option value="Водительское удостоверение">
            Водительское удостоверение
          </option>
        </select>
        <div class="error" v-if="!$v.issueDate.required">
          Поле обязательно к заполнению
        </div>
      </div>
      <!-- Серия -->
      <div class="form-item">
        <label class="form-item__label" name="series" id="series">Серия</label>
        <p class="form-item__title">Серия</p>
        <input for="series" class="form-item__input" />
      </div>
      <!-- Номер -->
      <div class="form-item">
        <label class="form-item__label" name="number" id="number">Номер</label>
        <p class="form-item__title">Номер</p>
        <input for="number" class="form-item__input" />
      </div>
      <!-- Кем выдан -->
      <div class="form-item">
        <label class="form-item__label" name="issuedBy" id="issuedBy"
          >Кем выдан</label
        >
        <p class="form-item__title">Кем выдан</p>
        <input for="issuedBy" class="form-item__input" />
      </div>
      <!-- Дата выдачи * -->
      <div
        class="form-item"
        :class="{ 'form-item_error': $v.issueDate.$error }"
      >
        <label class="form-item__label" for="issueDate"></label>
        <p><span class="important-lable">*</span>Дата выдачи</p>
        <input
          id="issueDate"
          class="form-item__input"
          v-model.trim="$v.issueDate.$model"
        />
        <div class="error" v-if="!$v.issueDate.required">
          Поле обязательно к заполнению
        </div>
      </div>

      <div class="send">
        <button
          class="button"
          type="submit"
          :disabled="submitStatus === 'ERROR'"
        >
          Завершить регистрацию
        </button>
        {{ submitStatus }}
      </div>
    </form>
  </div>
</template>

<script>
import {
  required,
  numeric,
  maxLength,
  minLength,
} from "vuelidate/lib/validators";

const correctNumber = (value) => Number(value[0]) === 7;

export default {
  data() {
    return {
      name: "",
      surname: "",
      birthDate: "",
      doctor: "",
      clientGroup: [""],
      phoneNumber: "",
      gender: "",
      city: "",
      documentType: "",
      issueDate: "",
      submitStatus: "",
    };
  },

  validations: {
    name: {
      required,
    },
    surname: {
      required,
    },
    birthDate: {
      required,
    },
    phoneNumber: {
      maxLength: maxLength(11),
      minLength: minLength(11),
      required,
      numeric,
      correctNumber,
    },
    gender: {
      required,
    },
    clientGroup: {
      required,
    },
    doctor: {
      required,
    },
    city: {
      required,
    },
    issueDate: {
      required,
    },
    documentType: {
      required,
    },
  },

  methods: {},
};
</script>

<style scoped lang="sass">
h1
  font-size: 24px
  color: #999999
h2
  font-size: 16px

hr
  height: 1px
  background-color: #e6e6e6
  border: none

.wrapper_form
  box-sizing: border-box
  width: 90%
  max-width: 500px
  margin: 0 auto
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08)
  border-radius: 10px
  padding: 20px
  justify-content: space-between
  align-items: flex-end

  .form-item
    width: 100%
    margin-bottom: 20px

    &__title
      color: inherit
      font-size: 12px
      margin: 0

    &__label
      display: none

    &__input
      box-sizing: border-box
      width: 100%
      display: block
      border: 1px solid #d9d9d9
      padding: 0.7rem
      border-radius: 5px
      color: inherit

    &_error
      color: #ff1a1a
      position: relative

      .form-item__input
        outline: none
        border-color: #ff1a1a

      .error
        display: block
        bottom: -15px
        font-size: 10px
        z-index: 2

.error
  display: none

.important-lable
  color: #ff1a1a
</style>