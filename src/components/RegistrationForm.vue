<template>
  <div class="form-wrapper">
    <h1>Регистрация нового клиента.</h1>
    <p>Заполните, пожалуйста, анкету</p>
    <hr />

    <div class="form">
      <div class="form__item" :class="{ 'form-item_error': $v.name.$error }">
        <label class="form__label" for="name"
          ><span class="_error-color">*</span> Имя</label
        >
        <input id="name" class="form__input" v-model.trim="$v.name.$model" />
        <div class="_error" v-if="!$v.name.required">
          Поле обязательно к заполнению
        </div>
      </div>

      <div class="form__item" :class="{ 'form-item_error': $v.surname.$error }">
        <label class="form__label" for="surname"
          ><span class="_error-color">*</span> Фамилия</label
        >
        <input
          id="surname"
          class="form__input"
          v-model.trim="$v.surname.$model"
        />

        <div class="_error" v-if="!$v.surname.required">
          Поле обязательно к заполнению
        </div>
      </div>

      <div class="form__item">
        <label class="form__label" for="patronymic">Отчество</label>
        <input id="patronymic" class="form__input" />
      </div>

      <div class="form__item">
        <div class="gender">
          <label for="male" />
          <input class="" id="male" type="radio" value="male" data-once />м
          <label for="female" />
          <input class="" id="female" type="radio" value="female" data-once />ж
        </div>
        <div class="form__item">Дата рождения</div>
      </div>

      <div
        class="form__item phoneNumber"
        :class="{ 'form-item_error': $v.phoneNumber.$error }"
      >
        <label class="form__label" for="phoneNumber"
          ><span class="_error-color">*</span> Номер телефона</label
        >
        <input
          id="phoneNumber"
          class="form__input"
          v-model.trim="$v.phoneNumber.$model"
        />
        <div class="_error" v-if="!$v.phoneNumber.required">
          Поле обязательно к заполнению
        </div>
        <div class="_error" v-if="!$v.phoneNumber.numeric">
          Не корректные данные
        </div>
      </div>

      <!-- Сделаем тут multiселектор -->
      <!-- при клике на один из вариантов span="placeholder" становится невидим, а выбранный элемент отображается в строке-->
      <div class="form__item select">
        <label for="clientsGroup" class="select__label">Группа клиентов</label>

        <div class="select__wrapper">
          <div class="select__input select__input_default">
            <span class="placeholder">Выберите группу</span>
            <div>VIP <button class="select__delete-button"></button></div>
            <div>
              Проблемные <button class="select__delete-button"></button>
            </div>
            <div>ОМС <button class="select__delete-button"></button></div>
          </div>
          <ul class="variants">
            <li class="variants__item">VIP</li>
            <li class="variants__item">Проблемные</li>
            <li class="variants__item">ОМС</li>
          </ul>
        </div>
      </div>

      <!-- <label>Лечащий врач</label>
        <select>
          <option value="">Иванов</option>
          <option value="male">Захаров</option>
          <option value="female">Чернышева</option>
        </select>
         -->

      <!--  -->

      <!-- Сделаем тут select -->

      <!-- <div class="form__item">
        <div class="select__wrapper">
          <label id="doctor" class="select__label">Лечащий врач</label>
          <ul class="select__variants">
            <li>
              <input for="" type="radio" />
            </li>
            <li>
              <input type="radio" />
            </li>
            <li>
              <input type="radio" />
            </li>
          </ul>
        </div>
      </div> -->
      <!--  -->
      <div class="form__item">
        <label for="sms">Не отправлять СМС</label>
        <input id="sms" type="checkbox" />
      </div>
      <hr />

      <h2>Адрес</h2>

      <div class="form__item">
        <label class="form__label" for="index">Индекс</label>
        <input id="index" class="form__input" placeholder="" />
      </div>

      <div class="form__item">
        <label class="form__label" for="country">Страна</label>
        <input id="country" class="form__input" placeholder="" />
      </div>

      <div class="form__item">
        <label class="form__label" for="region">Область</label>
        <input id="region" class="form__input" placeholder="" />
      </div>

      <div class="form__item" :class="{ 'form-item_error': $v.city.$error }">
        <label class="form__label" for="city"
          ><span class="_error-color">*</span> Город</label
        >
        <input id="city" class="form__input" v-model.trim="$v.city.$model" />
        <div class="_error" v-if="!$v.city.required">
          Поле обязательно к заполнению
        </div>
        <div class="_error" v-if="!$v.city.alpha">
          Поле должно содержать только буквы.
        </div>
      </div>

      <div class="form__item">
        <label class="form__label" name="adress" id="street">Улица</label>
        <input for="street" class="form__input" placeholder="" />
      </div>
      <div class="form__item">
        <label class="form__label" name="adress" id="house">Дом</label>
        <input for="street" class="form__input" placeholder="" />
      </div>

      <hr />

      <h2>Паспорт</h2>

      <div
        class="form__item"
        :class="{ 'form-group_error': $v.issueDate.$error }"
      >
        <label class="form__label" for="issueDate"
          ><span class="_error-color">*</span> Дата выдачи</label
        >
        <input
          id="issueDate"
          class="form__input"
          v-model.trim="$v.issueDate.$model"
        />
        <div class="_error" v-if="!$v.issueDate.required">
          Поле обязательно к заполнению
        </div>
      </div>

      <button>Завершить регистрацию</button>
    </div>
  </div>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      surname: "",
      phoneNumber: "",
      city: "",
      issueDate: "",
    };
  },

  validations: {
    name: {
      required,
    },
    surname: {
      required,
    },
    phoneNumber: {
      required,
      numeric,
    },
    city: {
      required,
    },
    issueDate: {
      required,
    },
    validationGroup: [""],
  },

  methods: {
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h2
  color: #999999

.form-wrapper
  box-sizing: border-box
  max-width: 70%
  margin: 0 auto
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08)
  border-radius: 10px
  padding: 20px

  .form
    justify-content: space-between
    align-items: flex-end

    .form__item
      position: relative
      width: 100%
      margin-bottom: 20px

      .form__label
        display: block
        color: inherit
        font-size: 12px

      .form__input
        box-sizing: border-box
        width: 100%
        display: block
        border: 1px solid #d9d9d9
        padding: 0.7rem
        border-radius: 5px
        color: inherit

._error
  position: absolute
  bottom: -15px
  display: none
  font-size: 10px
  z-index: 2

.form-item_error
  color: #ff1a1a

  ._error
    display: block

._error-color
  color: #ff1a1a

._flex-row-wrap
  display: flex
  flex-wrap: wrap

.select__variants
  display: none

.variants
  display: none
  position: absolute
</style>