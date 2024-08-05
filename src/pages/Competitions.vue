<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { index } from '../services/competitions'

export default {
  name: 'Competitions',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      competitions: null
    }
  },
  mounted() {
    this.getAllCompetitions()
  },
  methods: {
    async getAllCompetitions() {
      const competitions = await index()
      this.competitions = competitions
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
                  دليل المسابقات القرآنية النسائية في البحرين
                </h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li class="active">المسابقات القرآنية</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="portfolio-pages-wrapper section-space--ptb_100 border-bottom gray-gradient"
      >
        <div class="container">
          <div class="row align-center">
            <div
              class="col-lg-4 col-md-6 wow move-up"
              v-for="competition in competitions"
              :key="competition.id"
            >
              <div class="portfolio-wrapper mb-30">
                <router-link
                  :to="'/competitions/' + competition.id"
                  class="single-portfolio-item"
                >
                  <div class="single-portfolio__thumbnail">
                    <img
                      class="img-fluid border-radus-5"
                      src="../assets/img/centers-default.png"
                      :alt="competition.name"
                    />
                  </div>
                  <div class="post-overlay gradient-background"></div>
                  <div class="single-portfolio__content">
                    <div class="post-overlay-info">
                      <h5 class="post-overlay-title text-white">
                        {{ competition.name }}
                      </h5>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="col-lg-12" v-if="competitions">
              <div class="load-more-button text-center">
                <button class="ht-btn ht-btn-md ht-btn--outline loadMore">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
