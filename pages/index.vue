<template>
  <div class="grid">
    <!-- Left Widget Start -->
    <div>
      <div class="box"><Profile /></div>
      <div class="box-purple">
        <client-only>
          <v-icon x-large color="white">fa-envelope</v-icon>
        </client-only>
        <span class="white--text pl-3"
          ><a href="mailto:coolman555@me.com">coolman555@me.com</a></span
        >
      </div>
      <div class="box-purple">
        <v-icon x-large color="white">fab fa-github-square</v-icon>
        <span class="white--text pl-3"
          ><a href="https://github.com/devxian96" target="_black"
            >@devxian96</a
          ></span
        >
      </div>
      <div class="box pt-2 pb-2">
        <h3>가치관</h3>
        <hr />
        어떤 프레임워크나 라이브러리를 사용 할 줄 아는가는 중요하지 않습니다.
        <strong>중요한 것은 기본기</strong>입니다. 기본기가 잘 잡혀있다면 더
        오래가는 개발자가 될겁니다.
      </div>
      <div class="box pt-2 pb-2">
        <h3>관심사</h3>
        <hr />
        <strong>최신 트랜드</strong>와 <strong>클린코드</strong>에 관심이
        많으며, 자신만 이해 가능한 코드가 아닌 모든 이가 이해 할 수 있는 코드를
        작성 하고자 합니다.
      </div>
    </div>
    <!-- Left Widget End -->

    <!-- Center Widget Start -->
    <div>
      <div class="box pt-2 pb-2">
        <h3>주요 Front-End 기술스택</h3>
        <hr />
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-vuejs </v-icon>
          </template>
          <span>vue.js (Nuxt.js, Vuex)</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-react </v-icon>
          </template>
          <span>react (Next.js, Redux)</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-js-square </v-icon>
          </template>
          <span>ES6 이상</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-html5 </v-icon>
          </template>
          <span>HTML5 (DOM, Paint, Reflow)</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-css3 </v-icon>
          </template>
          <span>css3 (Triger, Module)</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fas fa-cube </v-icon>
          </template>
          <span>Webpack</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fas fa-bold </v-icon>
          </template>
          <span>Babel</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fas fa-poll </v-icon>
          </template>
          <span>Polyfill</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fas fa-check </v-icon>
          </template>
          <span>TypeScript</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-bootstrap </v-icon>
          </template>
          <span>Bootstrap (Vuetify)</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-mdb </v-icon>
          </template>
          <span>Material UI</span>
        </v-tooltip>
      </div>
      <div class="box pt-2 pb-2">
        <h3>주요 Back-End 기술스택</h3>
        <hr />
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-node </v-icon>
          </template>
          <span>node.js (Express, http, ejs)</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-php </v-icon>
          </template>
          <span>PHP5,7</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-java </v-icon>
          </template>
          <span
            >Spring MVC, Spring Boot (thymeleaf, jpa, mybatis,
            전자정부프레임워크)</span
          >
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-python </v-icon>
          </template>
          <span>Flask (TF, Keras, Orion)</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fas fa-database </v-icon>
          </template>
          <span>RDBMS(MySQL, Oracle, PostgreSQL), TSDBMS(influxDB)</span>
        </v-tooltip>
      </div>
      <div class="box">
        <h3>주요 DevOps</h3>
        <hr />
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-aws </v-icon>
          </template>
          <span>EC2, RDB, Route53, lightsail</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fas fa-server </v-icon>
          </template>
          <span
            >VPS (Hostinger, Vultr...), Cloud (FireBase, Github Page,
            Vercel)</span
          >
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-slack </v-icon>
          </template>
          <span>Slack, notion</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-git </v-icon>
          </template>
          <span>GIT 형상관리도구</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-windows </v-icon>
          </template>
          <span>Windows Server (구축, 최적화)</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fab fa-linux </v-icon>
          </template>
          <span>Linux Server (구축, 최적화)</span>
        </v-tooltip>
      </div>

      <div class="box">
        <h3>기타 기술스택</h3>
        <hr />
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fas fa-scroll </v-icon>
          </template>
          <span>사무자동화(Autoit)</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on">
              fas fa-shield-alt
            </v-icon>
          </template>
          <span>모의침투테스팅</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon x-large v-bind="attrs" v-on="on"> fas fa-code </v-icon>
          </template>
          <span>C, C#</span>
        </v-tooltip>
      </div>
    </div>
    <!-- Center Widget End -->

    <!-- Right Widget Start -->
    <div>
      <div class="box-purple">test5</div>
    </div>
    <!-- Right Widget End -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Profile from '@/components/widget/profile.vue'

export default Vue.extend({
  components: { Profile },
  head: {
    title: '홈',
  },
})
</script>
