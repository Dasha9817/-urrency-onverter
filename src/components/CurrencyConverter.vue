<template>
  <div class="contant">
    <form class="form">
      <div class="form-inputs">
        <div class="form-group">
          <label class="sum" for="Сумма">Сумма</label>
            <input @input="onInputChange" :value="value"
              type="number"
              placeholder="0"
              required
            />
            <p class="total"> {{ result }} </p> 
        </div>
        <div class="form-selects">
          <div class="form-select">
            <label for="Из">Из</label>
            <select class="select" @change="onChangeFrom" :value="from" required>
              <option
                v-for="currency of currencies"
                :key="currency"
                >
                {{ currency }}
              </option>
            </select>
          </div>
          <div class="form-select">
            <label for="В">В</label>
            <select class="select" @change="onChangeTo" :value="to">
              <option 
                v-for="currency of currencies" 
                :key="currency">
                {{ currency }}
              </option>
            </select>
          </div>
          <button type="button" class="form-submit" @click="onClickConvert">Конвертировать</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

  export default {
    props: {
      currencies: { required: true },
      result: { required: true },
      defaultCurrency : { default : 'RUB' },
    },
  data() {
    return {
      value: 0,
      from: 'RUB',
      to: 'RUB',
    }
  },
  methods: {
    onInputChange (event) {
      this.value = event.target.value;
    },
    onChangeFrom (event) {
      this.from = event.target.value;
    },
    onChangeTo (event) {
      this.to = event.target.value;
    },
    async onClickConvert () {
      const data = {
        value: this.value,
        from: this.from,
        to: this.to,
      }
      this.$emit('on-convert', data);
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
