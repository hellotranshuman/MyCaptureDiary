<template>
  <v-app>
    <v-content class="ma-0 pa-0">
      <v-layout pa-2 align-center justify-center>
        <v-spacer></v-spacer>
        <v-flex align-center justify-center xs4>
          <v-btn large dark round block class="font-but" to="/settings">
            <v-icon>reply</v-icon>
          </v-btn>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex align-center justify-center xs4>
          <v-btn large dark round block v-html="saveButtonStr" class="font-but" @click="saveSetup" to="/writing"></v-btn>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
      <!-- 배경색, 글자색, 글자 크기, 글자체, 글자 정렬 방향 -->
      <form>
        <!-- 배경색 -->
        <v-layout align-center px-3 pb-0 ma-0>
          <v-flex xs2>
            <v-icon large>format_color_fill</v-icon>
          </v-flex>
          <v-flex xs6>
            <!-- <v-select v-model="defaultSetup['bgColorDefault']" :items="bgColorItems" label="background color"></v-select> -->

            <v-menu v-model="menu">

              <v-btn slot="activator" color="black" flat>
                <span id="bg-span">
                  <v-icon v-bind:style="{color : defaultSetup['bgColorDefault']}">check_box</v-icon>
                </span>
                &nbsp; {{defaultSetup['bgColorDefault']}}
              </v-btn>

              <v-list dense v-for="(item, index) in bgColorItems" :key="index">
                <v-list-tile avatar @click="backgroundColorChange(item)">
                  <v-list-tile-avatar>
                    <span id="bg-span">
                      <v-icon v-bind:style="{color : item}">check_box</v-icon>
                    </span>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>{{item}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <!-- <v-divider></v-divider> -->
              </v-list>

            </v-menu>

          </v-flex>
        </v-layout>
        <!-- 글자색 -->
        <v-layout align-center px-3 pb-0 ma-0>
          <v-flex xs2>
            <v-icon large>format_color_text</v-icon>
          </v-flex>
          <v-flex xs6>
            <v-select v-model="defaultSetup['fontColorDefault']" :items="fontColorItems" label="font color"></v-select>
          </v-flex>
        </v-layout>
        <!-- 글자 크기 -->
        <v-layout align-center px-3 pb-0 ma-0>
          <v-flex xs2>
            <v-icon large>format_size</v-icon>
          </v-flex>
          <v-flex xs6>
            <v-select v-model="defaultSetup['fontSizeDefault']" :items="fontSizeItems" label="font size"></v-select>
          </v-flex>
        </v-layout>
        <!-- 글자체 -->
        <v-layout align-center px-3 pb-0 ma-0>
          <v-flex xs2>
            <v-icon large>font_download</v-icon>
          </v-flex>
          <v-flex xs6>
            <v-select v-model="defaultSetup['fontStyleDefault']" :items="fonStyleItems" label="font style"></v-select>
          </v-flex>
        </v-layout>
        <!-- 글자 정렬 -->
        <v-layout align-center px-3 pb-0 ma-0>
          <v-flex xs2>
            <v-icon large>format_align_center</v-icon>
          </v-flex>
          <v-flex xs6>
            <v-select v-model="defaultSetup['fontAlignDefault']" :items="fontAlignItems" label="font align"></v-select>
          </v-flex>
        </v-layout>
      </form>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      bgColorDefaultData : 'white',
      bgColorItems : ['white', 'black', 'HoneyDew', 'AliceBlue', 'Aquamarine', 'red', 'green', 'blue'],
      fontColorItems : ['white', 'black', 'red', 'green', 'blue'],
      fontSizeItems : ['8', '10', '12', '14', '16', '18', '20', '22', '24', '36', '48'],
      fonStyleItems : ['serif', 'sans-serif', 'cursive', 'fantasy', 'monospace', 'Agency FB', 'Calibri', 'Script', 'Garamond', 
      'Comic Sans MS', 'Trebuchet MS', 'Arial', 'Courier', 'Georgia', 'Verdana', 'Impact', 'Bookman', 'Garamond', 'Osaka', 
      '굴림', '굴림체', '바탕'],
      fontAlignItems : ['left', 'center', 'right'],

      saveButtonStr : 'save', // 버튼 문자값

      menu : false,

      defaultSetup : {
        bgColorDefault: 'white', 
        fontColorDefault: 'black', 
        fontSizeDefault: '20', 
        fontStyleDefault: 'Arial', 
        fontAlignDefault : 'left',
      },
      
      // defaultKeyArray : ['bgColor', 'fontColor', 'fontSize', 'fontStyle', 'fontAlign'],
    }
  },

  methods:{
    // 바탕화면의 색상을 나타내는 선택창을 바꾸는 함수
    backgroundColorChange(color){
      this.defaultSetup['bgColorDefault'] = color;
    },

    // 새로운 default값을 저장하는 함수
    saveSetup(){
      localStorage.setItem('bgColor', this.defaultSetup['bgColorDefault']);
      localStorage.setItem('fontColor', this.defaultSetup['fontColorDefault']);
      localStorage.setItem('fontSize', this.defaultSetup['fontSizeDefault']);
      localStorage.setItem('fontStyle', this.defaultSetup['fontStyleDefault']);
      localStorage.setItem('fontAlign', this.defaultSetup['fontAlignDefault']);

      console.log('save~~~~~~');
    },

    // default 설정을 가져오는 함수
    getSetup(){
      if(localStorage.getItem('bgColor') != null){
        this.defaultSetup['bgColorDefault'] = localStorage.getItem('bgColor');
      }

      if(localStorage.getItem('fontColor') != null){
        this.defaultSetup['fontColorDefault'] = localStorage.getItem('fontColor');
      }

      if(localStorage.getItem('fontSize') != null){
        this.defaultSetup['fontSizeDefault'] = localStorage.getItem('fontSize');
      }

      if(localStorage.getItem('fontStyle') != null){
        this.defaultSetup['fontStyleDefault'] = localStorage.getItem('fontStyle');
      }

      if(localStorage.getItem('fontAlign') != null){
        this.defaultSetup['fontAlignDefault'] = localStorage.getItem('fontAlign');
      }
    },
  },

  created() {
    this.getSetup();

    // console.log(localStorage.getItem('fontColor'));
  },
}
</script>

<style>
  .font-but{
    background: linear-gradient(to right, #d74177, #ffe98a);
    color: white;
  }

  #bg-span{
    border-radius: 2px;
    border-color: black;
    background: darkgray;
  }
</style>