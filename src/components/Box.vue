<template>
  <div class="box">
    <div class="box__title-space">
      <div class="box__title">{{title}}</div>
    </div>
    <form class="box__form" @submit.prevent="">
      <div class="box__form-row">
        <label class="box__label">{{label}}</label>
        <input class="box__input" type="text" v-model="item"/>
        <button class="box__button" @click="addItem">Add</button>
      </div>
    </form>
    <div class="box__highlights">
        <div class="box__highlights-container">
            <div class="box__highlight" v-for="(it, i) in items" :key="i"
                :class="{'half-width': name === 'Opportunities'}"
            >
                {{it.name}}
                <button @click="deleteItem(it.id)">x</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    name: {
      type: String,
      default: ',',
    },
    title: {
      type: String,
      default: ',',
    },
    label: {
      type: String,
      default: ',',
    },
    items: {
      type: Array,
      default: (() => []),
    },
  },
  data: (() => ({
    item: '',
    competitors: [],
  })),
  methods: {
    addItem() {
      this.$emit('addItem', this.item);
      this.item = '';
    },
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .box {
    margin-bottom: 20px;

    &__title-space {
      width: 635px;
      height: 40px;
      border-width: 1px;
      border-style: solid;
      border-color: #333333;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      background-color: #575757;
      background-size: cover;

      .box__title {
        width: 203px;
        height: 14px;
        font-family: Montserrat;
        font-size: 11px;
        color: #ffffff;
        text-decoration: none solid rgb(255, 255, 255);
        text-transform: uppercase;
        margin: 12px 0px 14px 19px  ;
      }
    }

    &__form {
      width: 635px;
      height: 65px;
      border: 1px solid #404040;
      background-color: #404040;
      background-size: cover;
      border-bottom-color: #333333;

      &-row {
        margin: 15px 0px 15px 17px;
        .box__label {
          width: 124px;
          height: 20px;
          font-family: Roboto;
          font-size: 13px;
          color: #ffffff;
          text-decoration: none solid rgb(255, 255, 255);
          line-height: 20px;
          display: inline-block;
        }
        .box__input {
          width: 309px;
          height: 34px;
          padding: 0px 10px;
          border: 1px solid #5f5f5f;
          background-color: #404040;
          font-family: Roboto;
          font-size: 13px;
          color: #ffffff;
          text-decoration: none solid rgb(255, 255, 255);
          margin-right: 10px;
        }
        .box__button {
          width: 132px;
          height: 34px;
          padding: 0px 20px;
          border-radius: 3px;
          background-color: #57c046;
          font-family: Montserrat;
          font-size: 11px;
          color: #ffffff;
          text-decoration: none solid rgb(255, 255, 255);
          text-align: center;
        }
      }
    }

    &__highlights {
      width: 635px;
      height: 121px;
      border: 1px solid #404040;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
      background-color: #404040;
      background-size: cover;
      border-top-color: #333333;

      .box__highlights-container {
        margin-top: 15px;
        margin-left: 10px;
        .box__highlight {
            width: 180px;
            height: 40px;
            padding: 0px 0px 0px 15px;
            border-width: 1px;
            border-style: solid;
            border-color: #404040;
            border-radius: 3px;
            background-color: #333333;
            background-size: cover;
            font-family: Roboto;
            font-size: 13px;
            color: #ffffff;
            text-decoration: none solid rgb(255, 255, 255);
            display: inline-block;
            margin-right: 10px;
            margin-bottom: 10px;
            line-height: 40px;

            &.half-width {
            width: 282px;
            }
        }
      }
    }
  }
</style>
