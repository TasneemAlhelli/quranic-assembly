<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { index } from '../services/soiaress'

export default {
  name: 'Soiaress',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      soiarees: null
    }
  },
  mounted() {
    this.getAllSoiaress()
  },
  methods: {
    async getAllSoiaress() {
      const soiarees = await index()
      this.soiarees = soiarees
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
                <h4 class="breadcrumb-title">الأمسيات القرآنية</h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li class="active">الأمسيات القرآنية</li>
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
              class="col-lg-6 col-md-8 wow move-up"
              v-for="soiaree in soiarees"
              :key="soiaree.key"
            >
              <div class="portfolio-wrapper mb-30">
                <router-link
                  to="portfolio-details"
                  class="single-portfolio-item"
                >
                  <div class="single-portfolio__thumbnail">
                    <img
                      class="img-fluid border-radus-5"
                      :src="soiaree.image"
                      :alt="soiaree.name"
                    />
                  </div>
                  <div class="post-overlay gradient-background"></div>
                  <div class="single-portfolio__content">
                    <div class="post-overlay-info">
                      <h4 class="post-overlay-title text-white">
                        {{ soiaree.name }} 
                        <br/>
                        {{ soiaree.date }}
                        <br/>
                        {{ soiaree.place }}

                      </h4>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="col-lg-12">
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
