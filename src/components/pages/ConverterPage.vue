<template>
    <div class="container">
        <h1>
        Конвертер валюты
        </h1>
        <CurrencyConverter
         :currencies="currencies"
         :result="result"
         :default-corrency="service.defaultCurrency"
         @on-convert="onClickConvert"
         />
    </div>
</template>

<script>
  import {CurrencyService} from "@/services/CurrencyService";
  import CurrencyConverter from "@/components/CurrencyConverter.vue"

  export default {
  components: { CurrencyConverter },
  data() {
    return {
      service: new CurrencyService(),
      currencies: [],
      result: ''
    }
  },
  async mounted() {
    this.currencies = await this.service.getCurrency()
  },
  methods: {
    async onClickConvert (data) {
      this.result = await this.service.convert(
        data.value,
        data.from,
        data.to
      )
    }
  }
}
</script>

<style>
input,button {
background: none;
outline: none;
border: none;
font-size: 16px;
color: white;
}

* {
box-sizing: border-box;
}

.container {
width: 1024px;
margin: 0 auto;
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
row-gap: 30px;}

h1 {
width: 100%;
text-align: center;
font-size: 22px;
color: white;
margin: 30px;
line-height: 27px;
font-weight: 700;
}

.main {
width: 100%;
position: relative;
}

.form {
margin-top: 40px;
}

label {
display: block;
font-weight: 600;
font-size: 20px;
line-height: 16px;
color: #b7b7b7;
margin-bottom: 10px;
padding-left: 30px;
}

.sum {
display: block;
font-weight: 600;
font-size: 20px;
line-height: 16px;
color: #b7b7b7;
margin-bottom: 20px;
padding-left: 16px;
}


.form > .form-inputs {
background-color:#28244064;
border-radius: 12px;
padding: 9px 45px 37px 45px;
width: 100%;
border: 2px solid rgba(185, 23, 23, 0.355);

}

input {
width: 100%;
background: #282440;
border-radius: 12px;
font-weight: 600;
line-height: 19px;
color: #f5f5f5;
border: 2px solid rgba(185, 23, 23, 0.355);
padding: 14px;
gap: 25px;
display: flex;
align-items: center;
}

.form-group {
display: flex;
align-items: flex-end;
column-gap: 25px;
margin-top: 20px;
}

.form-selects {
display: flex;
align-items: flex-end;
column-gap: 25px;
margin-top: 20px;
}

.form-selects > .form-select {
flex-grow: 1;
}

.form-submit {
background: #282440;
border-radius: 12px;
font-weight: 600;
line-height: 19px;
color: #f5f5f5;
border: 2px solid rgba(185, 23, 23, 0.355);
padding: 14px;
gap: 25px;
display: flex;
align-items: center;
cursor: pointer;
}

.total {
width: 100%;
background: #282440;
border-radius: 12px;
font-weight: 600;
line-height: 19px;
color: #f5f5f5;
border: 2px solid rgba(185, 23, 23, 0.355);
gap: 25px;
display: flex;
align-items: center;
margin: 0px;
height: 52px;
}

select {
background: #282440;
border-radius: 12px;
font-weight: 600;
line-height: 19px;
color: #f5f5f5;
border: 2px solid rgba(185, 23, 23, 0.355);
padding: 14px;
}

</style>
