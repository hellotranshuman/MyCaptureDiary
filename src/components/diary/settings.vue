<template>
  <v-container pa-0>
    <v-list>
      <template v-for="(item, index) in items">
        <v-subheader v-if="index == 0" :key="index" class="title">{{SettingPageTitle}}</v-subheader>
        <v-divider :inset="false" :key="index + '_' + 'line'"></v-divider>
          <v-list-tile :key="item.title" :to="item.url">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </template>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      items: [
        { title: 'font', icon: 'format_size', url: '/settings/font'},
        { title: 'date', icon: 'date_range', url: '/settings/date'},
        { title: 'clock', icon: 'access_time', url: '/settings/clock'},
        { title: 'capture', icon: 'crop_free', url: '/settings/capture'},
        { title: 'push message', icon: 'message', url: '/settings/pushmessage'},
      ],

      SettingPageTitle : 'Settings',
    }
  },

  methods:{

  },
}
</script>

<style>
  /* CSS goes here */
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons';

  .settings-topBar{
    background: linear-gradient(to right, #d74177, #ffe98a);
  }
</style>