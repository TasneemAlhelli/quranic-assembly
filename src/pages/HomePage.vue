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
          <div class="row section-space--pt_30 align-center" v-if="statistics">
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="service-grid">
                <div class="ht-service-box--two text-center style-03">
                  <router-link to="/achievements">
                    <div class="content statistics">
                      <h6 class="heading">الانجازات القرآنية</h6>
                      <div class="service_text">
                        {{ statistics.achievements }}
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="service-grid">
                <div class="ht-service-box--two text-center style-03">
                  <router-link to="/achievements">
                    <div class="content statistics">
                      <h6 class="heading">قصص النجاح</h6>
                      <div class="service_text">{{ statistics.awards }}</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="service-grid">
                <div class="ht-service-box--two text-center style-03">
                  <router-link to="/centers">
                    <div class="content statistics">
                      <h6 class="heading">المراكز والمؤسسات</h6>
                      <div class="service_text">{{ statistics.centers }}</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="service-grid">
                <div class="ht-service-box--two text-center style-03">
                  <router-link to="/courses">
                    <div class="content statistics statistics">
                      <h6 class="heading">التدريب والتأهيل</h6>
                      <div class="service_text">{{ statistics.courses }}</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="service-grid">
                <div class="ht-service-box--two text-center style-03">
                  <router-link to="/soirees">
                    <div class="content statistics">
                      <h6 class="heading">الامسيات القرآنية</h6>
                      <div class="service_text">{{ statistics.soirees }}</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="service-grid">
                <div class="ht-service-box--two text-center style-03">
                  <router-link to="/competitions">
                    <div class="content statistics">
                      <h6 class="heading">المسابقات القرآنية</h6>
                      <div class="service_text">
                        {{ statistics.competitions }}
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="service-grid">
                <div class="ht-service-box--two text-center style-03">
                  <router-link to="/poetries">
                    <div class="content statistics">
                      <h6 class="heading">فرق التواشيح</h6>
                      <div class="service_text">{{ statistics.poetries }}</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 wow move-up">
              <div class="service-grid">
                <div class="ht-service-box--two text-center style-03">
                  <router-link to="/characters">
                    <div class="content statistics">
                      <h6 class="heading">الشخصيات القرآنية</h6>
                      <div class="service_text">
                        {{ statistics.characters }}
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
