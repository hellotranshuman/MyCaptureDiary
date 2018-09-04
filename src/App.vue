<template>
<v-app>
<v-content id="content-css">
  <!-- 좌측바 -->
    <v-navigation-drawer v-model="drawer" app dark fixed temporary id="sideMenu">
      <v-list two-line>
        <!-- 좌측바 로고표시 -->
        <v-layout align-center justify-center pa-4>
          <v-flex align-center justify-center xs5>
            <img src="./assets/logo2.png" height="100">
          </v-flex>
        </v-layout>
        <v-divider :inset="false"></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.url" @click="pageChange">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="title">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- 상단바 -->
    <!-- <div class="hide-overflow" style="position: relative;"> -->
      <v-toolbar
        app
        dark
        scroll-off-screen
        :scroll-threshold="0"
        id="topBar"
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">My Capture Diary</v-toolbar-title>
        <v-spacer></v-spacer>

      </v-toolbar>
      <!-- </div> -->
      <v-container pa-0 ma-0>
        <!-- 메인페이지 일경 출력 -->
        <v-layout v-if="this.url === '/'" align-center justify-center pa-5 class="white--text">
          <v-flex pt-5>
            <v-layout align-baseline justify-center class="display-1">
              <v-flex xs8 sm5>
                {{this.monthAndDay}}
              </v-flex>
            </v-layout>
            <v-layout justify-center class="display-3">
              <v-flex xs12 sm5>
                {{this.time}}
              </v-flex>
            </v-layout>

            <v-layout pt-4 mt-5 align-baseline justify-center>
              <v-flex xs10 pt-5 mt-5 align-baseline justify-center>
                <v-btn large round block to="/writing" @click="pageChange" id="writing-button" class="white--text">{{this.writingBut}}</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <!-- 컴포넌트 출력, 메인페이지일 경우에는 출력 안합니다. -->
        <router-view v-if="this.url != '/'"></router-view>
      </v-container>
    </v-content>
</v-app>
</template>

<script>
export default{
  data(){
    return {
      items: [
        { title: 'home', icon: 'home', url: '/'},
        { title: 'writing', icon: 'create', url:'/writing' },
        { title: 'settings', icon: 'settings', url: '/settings' }
      ],

      drawer: null,
      url : '/',
      monthAndDay : null,
      day   : null,
      time  : null,
      writingBut  : 'Write',
    }
  },

  watch:{
    // url이 /writing 또는 /settings일 경우 배경화면 색상을 흰색으로 변경합니다.
    url: function(){
      var contentBox = document.getElementById('content-css');

      if(this.url == '/writing' || this.url == '/settings'){
        contentBox.style.background = 'white';
      } else {
        contentBox.style.background = 'linear-gradient(to top, #ffe98a, #d74177)'; 
      }
    }
  },

  methods:{
    // 오늘 날짜를 구하는 함수
    getToday(){
      var date = new Date();

      // 오늘 날짜를 구합니다.
      var dateOption = {year: 'numeric', month: '2-digit', day: 'numeric'};
      var todayDate = new Intl.DateTimeFormat('en-US', dateOption).format(date);

      // 구한 날짜를 월,일,년 순으로 변수에 저장합니다.
      var dateArr = todayDate.split('/');
      this.monthAndDay = dateArr[0];
      this.monthAndDay += '/' + dateArr[1];
      this.monthAndDay += ' ' + dateArr[2];

      // 현재 시간을 구합니다.
      var timeOption = {hour: '2-digit', hour12: true, minute: '2-digit'};
      this.time = new Intl.DateTimeFormat('en-US', timeOption).format(date);
    },

    // 페이지를 이동할때 마다 호출되는 함수
    pageChange(){
      this.url = window.location.pathname;
    },

    // setup 설정을 확인하는 함수
    setupCheck(){
      if(localStorage.getItem('bgColor') == null){
        localStorage.setItem('bgColor', 'white');
      }

      if(localStorage.getItem('fontColor') == null){
        localStorage.setItem('fontColor', 'black');
      }

      if(localStorage.getItem('fontSize') == null){
        localStorage.setItem('fontSize', '20');
      }

      if(localStorage.getItem('fontStyle') == null){
        localStorage.setItem('fontStyle', 'Arial');
      }

      if(localStorage.getItem('fontAlign') == null){
        localStorage.setItem('fontAlign', 'left');
      }
    },
  },
//window.location.href = '/';
  created() {
    setInterval(this.getToday, 1000);

    // setup 설정을 확인하는 함수
    this.setupCheck();

    console.log('created~ start~');
  },
}
</script>

<style>
  /* CSS goes here */
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons';

  #sideMenu{
    background: linear-gradient(to left, #d74177, #ffe98a);
  }

  #topBar{
    background: linear-gradient(to right, #d74177, #ffe98a);
  }

  #content-css {
    background: linear-gradient(to bottom, #d74177, #ffe98a);

    /* 여기 부터는 드래그 방지 */
    -webkit-touch-callout : none;
    -webkit-user-select   : none;
    -khtml-user-select    : none;
    -moz-user-select      : none;
    -ms-user-select       : none;
    user-select           : none;
  }

  #writing-button {
    background: linear-gradient(to left, #d74177, #ffe98a);
  }
</style>