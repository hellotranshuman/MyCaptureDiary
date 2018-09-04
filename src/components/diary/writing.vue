<template>
  <v-container px-0 py-0>
    <v-layout align-baseline pb-3>
      <v-spacer></v-spacer>
      <v-flex xs10>
        <v-btn large round block id="capature-but" class="title" v-html="captureButStr" @click="captureDiary"></v-btn>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>

    <v-layout px-2> 
      <v-flex>
        <v-flex xs5 class="title">
          {{this.todayDate}}
        </v-flex>
      </v-flex>
    </v-layout>
    <!-- v-bind:style="pageStyle" -->
    <!-- <v-textarea solo flat large auto-grow background-color="primary" rows="20" label="write" v-bind:style="pageStyle"></v-textarea> -->
    <!-- <v-text-field multi-line auto-grow label="write" v-bind:style="pageStyle"></v-text-field> -->
    <v-layout>
      <v-flex>
        <textarea :rows="textareaRows" placeholder="write" autofocus v-model="textareaText" id="textarea-style" 
        v-bind:style="pageStyle"></textarea>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      todayDate : null,
      pageStyle : {},
      getFontColor : null,
      getBgColor : null,
      textareaText: '',
      textareaRows : 12,
      captureButStr : 'Capture',
    }
  },

  watch:{
    textareaText:function(){
      console.log('rows start ~~~~~~~');
      console.log(this.textareaText);

      var textareaRowsNum = this.textareaText.split('\n').length;
      console.log(textareaRowsNum);

      if(textareaRowsNum > 12){
        this.textareaRows = textareaRowsNum;
      }

      console.log('rows end~~~')
    }
  },

  methods:{
    // 오늘 날자를 구하는 함수
    getWriteToday(){
      var date = new Date();

      // 오늘 날짜를 구합니다.
      var dateOption = {year: 'numeric', month: '2-digit', day: 'numeric'};
      var todayDate = new Intl.DateTimeFormat('en-US', dateOption).format(date);

      // 구한 날짜를 월,일,년 순으로 변수에 저장합니다.
      var dateArr = todayDate.split('/');
      this.todayDate = dateArr[0];
      this.todayDate += '/' + dateArr[1];
      this.todayDate += '/' + dateArr[2];
    },

    // 현재 페이지의 style 설정을 구하는 함수
    getPageStyle(){
      this.pageStyle = {
        'background': localStorage.getItem('bgColor'),
        'font-size': localStorage.getItem('fontSize') + 'px',
        'font-family' : localStorage.getItem('fontStyle'),
        'text-align' : localStorage.getItem('fontAlign'),
        'color' : localStorage.getItem('fontColor'),
      }
    },

    captureDiary(){
      alert('capture Diary start~');
    },

  },

  created() {
    console.log('created start!');

    this.getWriteToday();
    this.getPageStyle();
  },

  mounted(){
    console.log('mounted start!');
  },
}
</script>

<style>
  /* CSS goes here */
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons';

  #capature-but{
    background: linear-gradient(to right, #d74177, #ffe98a);
    color: white;
  }

  .test{
    width: 100%;
    height: 100%;
  }

  #textarea-style{
    width: 100%;
    height: 100%;
    outline: none;
  }
</style>