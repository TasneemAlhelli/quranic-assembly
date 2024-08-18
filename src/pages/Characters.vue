<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { index } from '../services/characters'

export default {
  name: 'Characters',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      characters: null
    }
  },
  mounted() {
    this.getAllCharacters()
  },
  methods: {
    async getAllCharacters() {
      const characters = await index()
      this.characters = characters
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
                  دليل الشخصيات القرآنية النسائية في البحرين
                </h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li class="active">الشخصيات القرآنية</li>
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
              class="col-lg-4 col-md-6 mb-30 wow move-up"
              v-for="character in characters"
              :key="character.id"
            >
              <div class="portfolio-grid-caption">
                <div class="post-info">
                  <h5
                    class="post-title font-weight--bold"
                  >
                    {{ character.name }}
                  </h5>
                </div>
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
