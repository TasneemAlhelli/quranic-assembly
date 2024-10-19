<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { statistics } from '../services/home'

export default {
  name: 'HomePage',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      bgImg: {
        backgroundImage: `url(${require('../assets/img/bg/homepage-banner.jpg')})`
      },
      statistics: null
    }
  },
  mounted() {
    this.getStatistics()
  },
  methods: {
    async getStatistics() {
      this.statistics = await statistics()
    }
  }
}
</script>

<template>
  <div class="main-container">
    <Header />
    <section class="main">
      <div
        class="banner-background-area banner-background-area-bg bg-img bg-cover"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 hompage-banner">
              <router-link to="/timeline">
                <button class="timeline-btn">واقع الحراك القرآني النسوي</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div
            class="row section-space--ptb_100 align-center"
            v-if="statistics"
          >
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="statistics-container">
                <router-link to="/achievements">
                  <div class="post-info">
                    <h5 class="post-title font-weight--bold" @click="">
                      الانجازات القرآنية
                    </h5>
                    <h6>{{ statistics.achievements }}</h6>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="statistics-container">
                <router-link to="/achievements">
                  <div class="post-info">
                    <h5 class="post-title font-weight--bold" @click="">
                      قصص النجاح
                    </h5>
                    <h6>{{ statistics.awards }}</h6>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="statistics-container">
                <router-link to="/centers">
                  <div class="post-info">
                    <h5 class="post-title font-weight--bold" @click="">
                      المراكز والمؤسسات
                    </h5>
                    <h6>{{ statistics.centers }}</h6>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="statistics-container">
                <router-link to="/courses">
                  <div class="post-info">
                    <h5 class="post-title font-weight--bold" @click="">
                      التدريب والتأهيل
                    </h5>
                    <h6>{{ statistics.courses }}</h6>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="statistics-container">
                <router-link to="/soirees">
                  <div class="post-info">
                    <h5 class="post-title font-weight--bold" @click="">
                      الامسيات القرآنية
                    </h5>
                    <h6>{{ statistics.soirees }}</h6>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="statistics-container">
                <router-link to="/competitions">
                  <div class="post-info">
                    <h5 class="post-title font-weight--bold" @click="">
                      المسابقات القرآنية
                    </h5>
                    <h6>{{ statistics.competitions }}</h6>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="statistics-container">
                <router-link to="/poetries">
                  <div class="post-info">
                    <h5 class="post-title font-weight--bold" @click="">
                      فرق التواشيح
                    </h5>
                    <h6>{{ statistics.poetries }}</h6>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="statistics-container">
                <router-link to="/characters">
                  <div class="post-info">
                    <h5 class="post-title font-weight--bold" @click="">
                      الشخصيات القرآنية
                    </h5>
                    <h6>{{ statistics.characters }}</h6>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
