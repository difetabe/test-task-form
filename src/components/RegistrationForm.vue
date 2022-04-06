<template>
  <div class="body">
    <form>
      <div class="wrapper_form-block flex-row">
        <h1>Регистрация нового клиента.</h1>
        <p class="comm-in-main-title">
          Обязательно для заполнения <span class="f-prime-color">*</span>
        </p>
        <hr />
        <!-- Фамилия -->
        <div
          class="form-item _important-label"
          :class="{ 'form-item_error': $v.surname.$error }"
        >
          <input
            placeholder="Фамилия"
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
        <div
          class="form-item _important-label"
          :class="{ 'form-item_error': $v.name.$error }"
        >
          <input
            placeholder="Имя"
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
          <input
            id="patronymic"
            class="form-item__input"
            placeholder="Отчество"
          />
        </div>
        <div class="form-item flex-row h-max-cont">
          <!-- Дата рождения -->
          <div
            class="form-item__birthDate _important-label"
            :class="{ 'form-item_error': $v.birthDate.$error }"
          >
          <p class="form-item__title">Дата рождения</p>
            <label class="form-item__label" for="birthDate"
              >Дата рождения</label
            >
            <input
              class="form-item__input form-item__input_birthDate"
              id="birthDate"
              name="birthDate"
              type="date"
              v-model="$v.birthDate.$model"
            />
            <div class="error" v-if="!$v.birthDate.required">
              Укажите дату рождения
            </div>
          </div>
          <!-- Пол -->
          <div
            class="form-item__gender _important-label"
            :class="{ 'selected-in-input': $v.gender.$error }"
          >
            <label for="gender" />
            <select
              class="form-item__input form-item__input_select"
              id="gender"
              v-model="$v.gender.$model"
            >
              <option disabled value="">Пол</option>
              <option value="Мужчина">Муж</option>
              <option value="Женщина">Жен</option>
            </select>
            <svg
              disabled
              class="down-sfift-icon"
              id="svg1025"
              version="1.1"
              viewBox="0 0 19.05 19.050001"
              width="15"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:svg="http://www.w3.org/2000/svg"
            >
              <defs id="defs1022" />
              <g id="layer1">
                <path
                  d="M 17.165845,5.6268585 9.5249964,13.423152 1.884155,5.6268631"
                  id="path1927"
                  style="
                    font-variation-settings: normal;
                    opacity: 1;
                    fill: none;
                    fill-opacity: 1;
                    stroke: #808080;
                    stroke-width: 0.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4;
                    stroke-dasharray: none;
                    stroke-dashoffset: 0;
                    stroke-opacity: 1;
                    paint-order: markers fill stroke;
                    stop-color: #000000;
                  "
                />
              </g>
            </svg>
          </div>
        </div>
        <!-- Группа клиентов -->
        <div class="form-item form-item_client-group _important-label">
          <div
            class="form-item__input"
            :class="{ 'form-item_error': $v.clientGroup.$error }"
            @click="onShowDropdown"
          >
            <span class="opac-06">Группа клиентов:</span>
            {{ clientGroup.join(", ") }}
            <svg
              class="down-sfift-icon"
              id="svg1025"
              version="1.1"
              viewBox="0 0 19.05 19.050001"
              width="15"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:svg="http://www.w3.org/2000/svg"
            >
              <defs id="defs1022" />
              <g id="layer1">
                <path
                  d="M 17.165845,5.6268585 9.5249964,13.423152 1.884155,5.6268631"
                  id="path1927"
                  style="
                    font-variation-settings: normal;
                    opacity: 1;
                    fill: none;
                    fill-opacity: 1;
                    stroke: #808080;
                    stroke-width: 0.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4;
                    stroke-dasharray: none;
                    stroke-dashoffset: 0;
                    stroke-opacity: 1;
                    paint-order: markers fill stroke;
                    stop-color: #000000;
                  "
                />
              </g>
            </svg>
          </div>
          <div class="variants" v-if="showDropdown">
            <div
              @click="onAddClientGroup($event, 'VIP')"
              :class="{
                selected: isSelected('VIP'),
              }"
            >
              VIP
            </div>
            <div
              @click="onAddClientGroup($event, 'Проблемные')"
              :class="{
                selected: isSelected('Проблемные'),
              }"
            >
              Проблемные
            </div>
            <div
              @click="onAddClientGroup($event, 'ОМС')"
              :class="{
                selected: isSelected('ОМС'),
              }"
            >
              ОМС
            </div>
          </div>
          <div class="error" v-if="$v.clientGroup.$error">Укажите группу</div>
        </div>
        <!-- Лечащий врач -->
        <div
          class="form-item _important-label"
          :class="{ 'selected-in-input': $v.doctor.$error }"
        >
          <select
            class="form-item__input form-item__input_select"
            id="doctor"
            v-model="$v.doctor.$model"
          >
            <option disabled value="">Лечащий врач</option>
            <option value="VIP">Иванов</option>
            <option value="Проблемные">Захаров</option>
            <option value="ОМС">Чернышева</option>
          </select>
          <svg
            disabled
            class="down-sfift-icon"
            id="svg1025"
            version="1.1"
            viewBox="0 0 19.05 19.050001"
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <defs id="defs1022" />
            <g id="layer1">
              <path
                d="M 17.165845,5.6268585 9.5249964,13.423152 1.884155,5.6268631"
                id="path1927"
                style="
                  font-variation-settings: normal;
                  opacity: 1;
                  fill: none;
                  fill-opacity: 1;
                  stroke: #808080;
                  stroke-width: 0.5;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 4;
                  stroke-dasharray: none;
                  stroke-dashoffset: 0;
                  stroke-opacity: 1;
                  paint-order: markers fill stroke;
                  stop-color: #000000;
                "
              />
            </g>
          </svg>
        </div>
        <!-- Номер телефона -->
        <div
          class="form-item _important-label"
          :class="{ 'form-item_error': $v.phoneNumber.$error }"
        >
          <p class="form-item__title">Контактный номер</p>
          <!-- Для реализации красивой маски в поле ввода с не стираемой "7" в начале 
        и паттерном ввода номера, необходимо использовать готовые сторонние бибилиотеки, 
        либо писать большое количество условий и команд для исполнения, это долго и трудно для новичка,
        а опытные разработчки, я думаю, вообще этим не занимаются, так как пользуются библиотеками.
        Из-за того, что библиотеки было использовать нельзя, а написать такой код для меня в назначенное время невозможно, 
        реализация может быть не совсем юзер френдли)
        С библиотеками или за бОльшее время, сделала бы как положено) -->
          <input
            id="phoneNumber"
            class="form-item__input"
            placeholder="7XXXXXXXXXX"
            v-model="$v.phoneNumber.$model"
          />
          <!-- Не отправлять смс -->
          <div class="form-item_sms flex-row f-al-end">
            <input id="sms" type="checkbox" />Не отправлять СМС
          </div>
          <div class="error" v-if="!$v.phoneNumber.required">
            Поле обязательно к заполнению
          </div>
          <div class="error" v-if="!$v.phoneNumber.numeric">
            Поле должно содержать номер телефона
          </div>
          <div class="error" v-if="!$v.phoneNumber.minLength || !$v.phoneNumber.maxLength" >
            Поле должно содержать 11 цифр
          </div>
          <div class="error" v-if="!$v.phoneNumber.correctNumber">
            Номер должен начинатся с "7"
          </div>
        </div>
      </div>

      <div class="wrapper_form-block flex-row">
        <h2>Адрес</h2>
        <hr />
        <!-- Индекс -->
        <div class="form-item">
          <input id="index" class="form-item__input" placeholder="Индекс" />
        </div>
        <!-- Страна -->
        <div class="form-item">
          <input id="country" class="form-item__input" placeholder="Страна" />
        </div>
        <!-- Область -->
        <div class="form-item">
          <input id="region" class="form-item__input" placeholder="Область" />
        </div>
        <!-- Город * -->
        <div
          class="form-item _important-label"
          :class="{ 'form-item_error': $v.city.$error }"
        >
          <input
            placeholder="Город"
            name="city"
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
          <input id="srteet" class="form-item__input" placeholder="Улица" />
        </div>
        <!-- Дом -->
        <div class="form-item">
          <input id="house" class="form-item__input" placeholder="Дом" />
        </div>
      </div>

      <div class="wrapper_form-block flex-row">
        <h2>Паспорт</h2>
        <hr />

        <div class="form-item_doc-type-block flex-row">
          <!-- Тип документа -->
          <div
            class="form-item__document-type _important-label"
            :class="{ 'selected-in-input': $v.documentType.$error }"
          >
            <label for="documentType" />
            <select
              class="form-item__input form-item__input_select"
              id="documentType"
              v-model="$v.documentType.$model"
            >
              <option disabled value="">Тип документа</option>
              <option value="Паспорт">Паспорт</option>
              <option value="Свид. о рождении">Свид. о рождении</option>
              <option value="Вод. удостоверение">Вод. удостоверение</option>
            </select>
            <svg
              disabled
              class="down-sfift-icon"
              id="svg1025"
              version="1.1"
              viewBox="0 0 19.05 19.050001"
              width="15"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:svg="http://www.w3.org/2000/svg"
            >
              <defs id="defs1022" />
              <g id="layer1">
                <path
                  d="M 17.165845,5.6268585 9.5249964,13.423152 1.884155,5.6268631"
                  id="path1927"
                  style="
                    font-variation-settings: normal;
                    opacity: 1;
                    fill: none;
                    fill-opacity: 1;
                    stroke: #808080;
                    stroke-width: 0.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4;
                    stroke-dasharray: none;
                    stroke-dashoffset: 0;
                    stroke-opacity: 1;
                    paint-order: markers fill stroke;
                    stop-color: #000000;
                  "
                />
              </g>
            </svg>
          </div>
          <!-- Дата выдачи -->
          <div
            class="form-item__issue-date _important-label"
            :class="{ 'form-item_error': $v.issueDate.$error }"
          >
          <p class="form-item__title">Дата выдачи</p>
            <input
              class="form-item__input form-item__input_birthDate"
              id="issueDate"
              name="issueDate"
              type="date"
              v-model="$v.issueDate.$model"
            />
            <div class="error" v-if="!$v.issueDate.required">
              Укажите дату выдачи
            </div>
          </div>
        </div>

        <!-- Серия -->
        <div class="form-item">
          <input id="series" class="form-item__input" placeholder="Серия" />
        </div>
        <!-- Номер -->
        <div class="form-item">
          <input id="number" class="form-item__input" placeholder="Номер" />
        </div>
        <!-- Кем выдан -->
        <div class="form-item">
          <input
            id="issuedBy"
            class="form-item__input"
            placeholder="Кем выдан"
          />
        </div>

        <!-- Кнопка -->
        <div class="send">
          <button
            type="button"
            class="button"
            :disabled="disableButton"
            v-on:click="success"
            :class="{ _disable: $v.validationGroup.$invalid }"
          >
            Завершить регистрацию
          </button>
          <div class="disable-button-comment" v-if="disableButton">
            (Для завершения заполните все обязательные поля<span
              class="f-prime-color"
              >*</span
            >)
          </div>
        </div>
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
const arrNotEmpty = (arr) => arr.length > 0;

export default {
  data() {
    return {
      name: "",
      surname: "",
      birthDate: "",
      doctor: "",
      clientGroup: [],
      phoneNumber: "",
      gender: "",
      city: "",
      documentType: "",
      issueDate: "",
      showDropdown: false,
    };
  },
  mounted() {
    document.addEventListener("click", (e) => {
      this.showDropdown = false;
    });
  },
  computed: {
    disableButton() {
      return this.$v.validationGroup.$invalid;
    },
  },

  validations: {
    validationGroup: [
      "name",
      "surname",
      "birthDate",
      "phoneNumber",
      "gender",
      "clientGroup",
      "doctor",
      "city",
      "issueDate",
      "documentType",
    ],
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
      arrNotEmpty,
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
  methods: {
    success() {
      alert("Новый клиент успешно зарегестрирован!!!!");
    },

    onAddClientGroup(e, val) {
      e.stopPropagation();
      e.preventDefault();
      this.$v.clientGroup.$touch();

      const ind = this.clientGroup.findIndex((item) => val == item);

      if (ind > 0 || ind == 0) {
        this.clientGroup.splice(ind, 1);
      } else {
        this.clientGroup.push(val);
      }
    },

    isSelected(val) {
      return this.clientGroup.findIndex((item) => val == item) >= 0;
    },

    onShowDropdown(e) {
      e.stopPropagation();
      e.preventDefault();
      this.showDropdown = true;
    },
  },
};
</script>

<style scoped lang="sass">
$main-color: #404040
$prime-color: #1a8cff
$input-bg: #f3f2f2
$input-bg-focus: #e6f0ff
$error-color: #ff1a1a

.border
  border: 1px solid #fff

.f-prime-color
  color: $prime-color

*
  box-sizing: border-box

.body
  padding: 60px 0
  font-family: 'Open Sans', Arial, sans-serif

h1
  margin: 16px 0 0
  font-size: 32px

h2
  margin: 16px 0 0
  font-size: 24px

hr
  height: 1px
  background-color: #e6e6e6
  border: none
  margin: 16px 0
  width: 90%

.error
  display: none

.wrapper_form-block
  box-sizing: border-box
  width: 90%
  max-width: 600px
  margin: 20px auto
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08)
  border-radius: 10px
  padding: 20px 20px 30px

  .form-item
    position: relative
    height: 85px
    width: 100%
    flex-basis: 270px
    flex-grow: 1
    &_doc-type-block
      width: 100%
    &__document-type
      height: 85px
      flex-basis: 170px
      flex-grow: 1

    &__issue-date
      height: 85px
      flex-basis: 170px
      flex-grow: 1

    &_client-group
      flex-basis: 100%
      .form-item_error
        border-color: $error-color
        color: $error-color
        &~.error
          display: block
          bottom: -15px
          font-size: 10px
          z-index: 2
          padding-left: 5px
          color: $error-color
      .variants
        position: absolute
        top: 55px
        background-color: #e7e4e4
        width: 100%
        display: flex
        flex-direction: column
        border-radius: 5px
        z-index: 2
        &>*
          height: 54px
          padding: 0 20px
          display: flex
          align-items: center
          &:hover
            background-color: #dbd6d6
        .selected
          background-color: $input-bg-focus

    &__birthDate
      height: 85px
      flex-grow: 1
      width: 135px
      @media (max-width: 390px)
        width: 100%

    &__gender
      height: 85px
      width: 40px
      flex-grow: 1
      @media (max-width: 390px)
        width: 100%

    &_sms
      padding: 0
      font-size: 0.7em
      line-height: 1.4
      width: max-content
      margin: 0
      gap: 2px

    &__title
      position: absolute
      top: -22px
      left: 5px
      color: inherit
      font-size: inherit
      opacity: 0.6
      margin: 0

    &__label
      display: none

    &__input
      display: flex
      align-items: center
      font-size: inherit
      box-sizing: border-box
      display: inlin-block
      width: 100%
      height: 54px
      padding: 0 15px
      border: 1px solid transparent
      border-radius: 5px
      color: inherit
      background-color: $input-bg
      outline: none
      margin-bottom: 5px

      &:focus
        border-color: #ccc
        background-color: $input-bg-focus

        &+.down-sfift-icon
          background-color: $input-bg-focus

    &_error
      color: $error-color

      .form-item__input
        outline: none
        border-color: $error-color
        &::placeholder
          color: inherit
          opacity: 0.8

      .error
        display: block
        bottom: -15px
        font-size: 10px
        z-index: 2
        padding-left: 5px

.send
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  margin: 0 auto
  text-align: center
  .button
    border: none
    border-radius: 5px
    padding: 16px 24px
    background-color: $prime-color
    color: #fff
    font-size: 1em
    font-weight: 500
    &:hover
      background-color: #0066ff

    &._disable
      background-color: #ccc

  .disable-button-comment
    opacity: 0.6
    margin-top: 16px
.flex-row
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-items: flex-start
  gap: 10px

.flex-col
  display: flex
  flex-direction: column

.f-no-wrap
  flex-wrap: no-wrap
.f-al-center
  align-items: center
.f-al-end
  align-items: flex-end

.sr-only
  position: absolute
  display: none
  z-index: -1

.opac-06
  opacity: 0.6

._important-label
  position: relative
  &::before
    position: absolute
    top: 2px
    left: 5px
    content: "*"
    z-index: 1
    font-size: 1.3em
    color: $prime-color

.down-sfift-icon
  position: absolute
  top: 20px
  right: 3px
  background-color: $input-bg
  z-index: 1

.comm-in-main-title
  opacity: 0.6
  margin-top: 10px
  margin-bottom: 0
  font-size: 0.8em

.f-prime-color
  color: $prime-color

.h-max-cont
  height: max-content !important

  .wrapper_form-block
    .form-item__gender
      width: 100%
</style>
