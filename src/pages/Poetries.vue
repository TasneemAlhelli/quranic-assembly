<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { index } from '../services/poetries'
export default {
  name: 'Poetries',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      poetries: null
    }
  },
  mounted() {
    this.getAllPoetries()
  },
  methods: {
    async getAllPoetries() {
      const poetries = await index()
      this.poetries = poetries
    },
    showPoetry(id) {
      this.$router.push(`/poetries/${id}`)
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
                  دليل فرق التواشيح النسائية في البحرين
                </h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li class="active">فرق التواشيح النسائية</li>
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
              v-for="poetry in poetries"
              :key="poetry.id"
            >
              <div class="portfolio-wrapper mb-30">
                <router-link
                  :to="'/poetries/' + poetry.id"
                  class="single-portfolio-item"
                >
                  <div class="single-portfolio__thumbnail">
                    <img
                      class="img-fluid border-radus-5"
                      src="../assets/img/centers-default.png"
                      :alt="poetry.name"
                    />
                  </div>
                  <div class="post-overlay gradient-background"></div>
                  <div class="single-portfolio__content">
                    <div class="post-overlay-info">
                      <h5 class="post-overlay-title text-white">
                        {{ poetry.name }}
                      </h5>
                      <h6 class="post-overlay-title">
                        الجهة المؤسسة للفرقة: {{ poetry.founder }}
                      </h6>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="col-lg-12" v-if="poetries">
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
