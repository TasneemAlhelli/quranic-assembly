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
      characters: null,
      length: 8
    }
  },
  mounted() {
    this.getAllCharacters()
  },
  methods: {
    async getAllCharacters() {
      const characters = await index()
      this.characters = characters
    },
    loadMore() {
      if (this.length > this.characters.length) return
      this.length = this.length + 8
    },
    async download(title, url) {
      const link = document.createElement('a')
      link.href = url
      link.download = title

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  },
  computed: {
    charactersLoaded() {
      if (this.characters && this.characters.length > 0)
        return this.characters.slice(0, this.length)
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
      <div class="portfolio-pages-wrapper section-space--ptb_100 border-bottom">
        <div class="container">
          <div class="row align-center">
            <div
              class="col-lg-3 col-md-6 mb-30 wow move-up"
              v-if="characters != null && characters.length != 0"
              v-for="character in charactersLoaded"
              :key="character.id"
            >
              <div class="portfolio-grid-caption">
                <div class="post-info">
                  <h5
                    class="post-title"
                    @click="download(character.cv, character.cv_url)"
                  >
                    {{ character.name }}
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div
                class="load-more-button text-center"
                v-if="characters != null && characters.length > 0"
              >
                <button
                  class="ht-btn ht-btn-md ht-btn--outline loadMore"
                  v-if="length < characters.length"
                  @click="loadMore"
                >
                  عرض المزيد
                </button>
              </div>
              <h5 class="text-default-color" v-else>لا توجد شخصيات قرآنية</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
