<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { index } from '../services/achievements'
import { getAwards } from '../services/awards'

export default {
  name: 'Achievemetns',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      achievements: null,
      awards: null
    }
  },
  mounted() {
    this.getAllAchievements(), this.getAllAwards()
  },
  methods: {
    async getAllAchievements() {
      const achievements = await index()
      this.achievements = achievements
    },
    async getAllAwards() {
      const awards = await getAwards()
      this.awards = awards
    },
    redirect(link) {
      this.$router.push(link)
    }
  }
}
</script>

<template>
  <div class="main-container">
    <Header />
    <section class="main">
      <div class="breadcrumb-area gradient--secondary">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb_box text-center">
                <h4 class="breadcrumb-title">
                  إنجازات المجمع القرآني النسوي في البحرين
                </h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li class="active">إنجازات المجمع القرآني</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-wrapper section-space--ptb_90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ht-tab-wrap ht-tab-menu">
                <ul
                  class="nav nav-tabs wow move-up"
                  id="myTabOne"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="achievment-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#achievment-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="achievment-tab-pane"
                      aria-selected="true"
                    >
                      إنجازات المجمع القرآني
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="stories-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#stories-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="stories-tab-pane"
                      aria-selected="false"
                    >
                      قصص النجاح
                    </button>
                  </li>
                </ul>
                <div class="tab-content">
                  <div
                    class="faq-wrapper section-space--pt_90 tab-pane fade show active"
                    id="achievment-tab-pane"
                    role="tabpanel"
                    aria-labelledby="achievment-tab"
                    tabindex="0"
                  >
                    <div class="accordion-faq wow move-up">
                      <div class="accordion" id="accordionOne">
                        <div
                          class="accordion-item"
                          v-if="achievements != null && achievements.length > 0"
                          v-for="achievement in achievements"
                          :key="achievement.id"
                        >
                          <h2
                            class="accordion-header"
                            :id="'heading' + achievement.id"
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              :data-bs-target="'#collapse' + achievement.id"
                              :aria-expanded="
                                achievement.description != null
                                  ? 'false'
                                  : undefined
                              "
                              :aria-controls="'collapse' + achievement.id"
                            >
                              <a
                                v-if="achievement.link != null"
                                @click="redirect(achievement.link)"
                                >{{ achievement.name }}</a
                              >

                              <span v-else>{{ achievement.name }}</span>
                            </button>
                          </h2>
                          <div
                            :id="'collapse' + achievement.id"
                            class="accordion-collapse collapse"
                            :aria-labelledby="'heading' + achievement.id"
                            :data-bs-parent="'#accordion' + achievement.id"
                            v-if="achievement.description != null"
                          >
                            <div class="accordion-body">
                              {{ achievement.description }}
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 align-center" v-else>
                          <h5 class="text-default-color">لا توجد انجازات</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="section-space--pt_90 tab-pane fade shpw"
                    id="stories-tab-pane"
                    role="tabpanel"
                    aria-labelledby="stories-tab"
                    tabindex="0"
                  >
                    <div
                      class="portfolio-pages-wrapper section-space--pb_90 border-bottom"
                    >
                      <div class="container">
                        <div class="row align-center">
                          <div
                            class="col-lg-4 col-md-6 mb-30 wow move-up"
                            v-if="awards != null && awards.length > 0"
                            v-for="award in awards"
                            :key="award.id"
                          >
                            <div class="portfolio-grid-caption">
                              <div class="single-portfolio__thumbnail award">
                                <img
                                  class="img-fluid"
                                  :src="award.image_url"
                                  alt="award"
                                />
                              </div>
                              <div class="post-info">
                                <h5 class="post-title font-weight--bold">
                                  {{ award.name }}
                                  -
                                  {{ award.date }}
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12" v-else>
                            <h5 class="text-default-color">لا توجد قصص نجاح</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
