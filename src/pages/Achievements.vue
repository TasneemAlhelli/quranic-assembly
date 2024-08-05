<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { index } from '../services/achievements'

export default {
  name: 'Achievemetns',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      achievements: null
    }
  },
  mounted() {
    this.getAllAchievements()
  },
  methods: {
    async getAllAchievements() {
      const achievements = await index()
      this.achievements = achievements
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
                <h4 class="breadcrumb-title">إنجازات المجمع القرآني النسوي</h4>
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

      <div class="accordion-wrapper section-space--pb_90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="faq-wrapper section-space--pt_90">
                <div class="accordion-faq wow move-up">
                  <div class="accordion" id="accordionOne">
                    <div
                      class="accordion-item"
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
                          {{ achievement.name }}
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
