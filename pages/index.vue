<template>
  <div class="grid">
    <!-- Left Widget Start -->
    <div>
      <div class="box"><WidgetProfile /></div>
      <div class="box-purple">
        <v-icon x-large color="white">fa-envelope</v-icon>
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
        <h3>목표</h3>
        <hr />
        React, Vue, Angular, Svelte와 같은 Front-End 프레임워크를 개발해 보고
        싶습니다. 많은 사람들이 제가 개발한 라이브러리나, 프레임워크, 제품을
        사용하여 좋은 경험을 하였으면 좋겠습니다.
      </div>
      <div class="box pt-2 pb-2">
        <h3>관심사</h3>
        <hr />
        새로운 기술을 학습하는 것을 좋아하며 그중에서도 Svelte에 관심이
        있습니다. 서비스를 운영, 이슈 처리를 하며 얻은 경험을 서로 공유하며
        배우기도 하며 기획자, 디자이너, 마케터와 의견을 나누며 새로운 시각을
        알아가기도 합니다.
      </div>
    </div>
    <!-- Left Widget End -->

    <!-- Center Widget Start -->
    <div>
      <div class="box pt-2 pb-2">
        <h3>주요 Front-End 기술스택</h3>
        <hr />
        <WidgetStack
          v-for="{ icon, summary } in frontEnd"
          :key="icon"
          :icon="icon"
          :summary="summary"
        />
      </div>
      <div class="box pt-2 pb-2">
        <h3>주요 Back-End 기술스택</h3>
        <hr />
        <WidgetStack
          v-for="{ icon, summary } in backEnd"
          :key="icon"
          :icon="icon"
          :summary="summary"
        />
      </div>
      <div class="box pt-2 pb-2">
        <h3>주요 DevOps</h3>
        <hr />
        <WidgetStack
          v-for="{ icon, summary } in devOps"
          :key="icon"
          :icon="icon"
          :summary="summary"
        />
      </div>

      <div class="box pt-2 pb-2">
        <h3>기타 기술스택</h3>
        <hr />
        <WidgetStack
          v-for="{ icon, summary } in elseSkill"
          :key="icon"
          :icon="icon"
          :summary="summary"
        />
      </div>
    </div>
    <!-- Center Widget End -->

    <!-- Right Widget Start -->
    <div>
      <div class="box pt-4 pb-4">
        <v-carousel
          continuous
          height="auto"
          hide-delimiter-background
          hide-delimiters
        >
          <v-carousel-item
            v-for="{ img, link, summary } in cards"
            :key="link"
            eager
          >
            <a :href="link" target="_black">
              <v-img
                :lazy-src="img"
                :src="img"
                :alt="summary"
                class="max-img"
                max-width="80vw"
                max-height="340"
                width="100%"
                height="100%"
              />
            </a>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="box-purple pt-3 pb-3">
        <h3 class="text-center">이 웹사이트는 무엇으로 만들었을까?</h3>
        <p class="text-center">
          개발에 사용된 기술 스택과 최적화, UX 등 어떤 것이 사용되었는지
          궁금하다면 확인하기 버튼을 눌러 확인해 보세요.
        </p>
        <v-btn
          depressed
          dark
          elevation="2"
          block
          color="white--text"
          to="/blog/intro"
          aria-label="기술스택 확인하기"
          >기술스택 확인하기</v-btn
        >
      </div>
    </div>
    <!-- Right Widget End -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  scrollToTop: true,
  data() {
    return {
      cards: [
        {
          img: require('../assets/phpExpressLogo.png'),
          link: 'https://github.com/devxian96/phpExpress',
          summary: 'PHP RestAPI 프레임워크',
        },
        {
          img: require('../assets/neomo.png'),
          link: 'https://github.com/neomorphism/neomo',
          summary: '뉴모피즘 웹 디자인 프레임워크',
        },
      ],
      frontEnd: [
        {
          icon: 'fab fa-vuejs',
          summary: 'vue.js (Nuxt.js, Vuex)',
        },
        {
          icon: 'fab fa-react',
          summary: 'react (Next.js, Redux)',
        },
        {
          icon: 'fab fa-js-square',
          summary: 'ES6 이상',
        },
        {
          icon: 'fab fa-html5',
          summary: 'HTML5 (DOM, Repaint, Reflow)',
        },
        {
          icon: 'fab fa-css3',
          summary: 'css3 (Triger, Module)',
        },
        {
          icon: 'fas fa-cube',
          summary: 'Webpack',
        },
        {
          icon: 'fas fa-bold',
          summary: 'Babel',
        },
        {
          icon: 'fas fa-poll',
          summary: 'Polyfill',
        },
        {
          icon: 'fas fa-check',
          summary: 'Typescript',
        },
        {
          icon: 'fab fa-bootstrap',
          summary: 'Bootstrap (Vuetify)',
        },
        {
          icon: 'fab fa-mdb',
          summary: 'Material UI',
        },
      ],
      backEnd: [
        { icon: 'fab fa-node', summary: 'node.js (Express, http, ejs)' },
        { icon: 'fab fa-php', summary: 'PHP5,7' },
        {
          icon: 'fab fa-java',
          summary:
            'Spring MVC, Spring Boot (thymeleaf, jpa, mybatis, 전자정부프레임워크)',
        },
        {
          icon: 'fab fa-python',
          summary: 'Flask (TF, Keras, Orion)',
        },
        {
          icon: 'fas fa-database',
          summary: 'RDBMS(MySQL, Oracle, PostgreSQL), TSDBMS(influxDB)',
        },
      ],
      devOps: [
        {
          icon: 'fab fa-aws',
          summary: 'EC2, RDB, Route53, lightsail',
        },
        {
          icon: 'fas fa-server',
          summary:
            'VPS (Hostinger, Vultr...), Cloud (FireBase, Github Page, Vercel)',
        },
        {
          icon: 'fab fa-slack',
          summary: 'Slack, notion',
        },
        {
          icon: 'fab fa-git',
          summary: 'GIT 형상관리도구',
        },
        {
          icon: 'fab fa-windows',
          summary: 'Windows Server (구축, 최적화)',
        },
        {
          icon: 'fab fa-linux',
          summary: 'Linux Server (구축, 최적화)',
        },
      ],
      elseSkill: [
        {
          icon: 'fas fa-scroll',
          summary: '사무자동화(Autoit)',
        },
        {
          icon: 'fas fa-shield-alt',
          summary: '모의침투테스팅',
        },
        {
          icon: 'fas fa-code',
          summary: 'C, C#',
        },
      ],
    }
  },
  head() {
    return {
      title: '홈',
    }
  },
})
</script>
