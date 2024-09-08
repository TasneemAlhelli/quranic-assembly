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
      soiarees: null,
      length: 4
    }
  },
  mounted() {
    this.getAllSoiaress()
  },
  methods: {
    async getAllSoiaress() {
      const soiarees = await index()
      this.soiarees = soiarees
    },
    loadMore() {
      if (this.length > this.soiarees.length) return
      this.length = this.length + 4
    }
  },
  computed: {
    soiareesLoaded() {
      if (this.soiarees && this.soiarees.length > 0)
        return this.soiarees.slice(0, this.length)
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
                  مشروع الأمسيات القرآنية النسائية في البحرين
                </h4>
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

      <div class="portfolio-pages-wrapper section-space--ptb_100 border-bottom">
        <div class="container">
          <div class="row align-center">
            <div
              class="col-lg-5 col-md-8 wow move-up"
              v-if="soiarees != null && soiarees.length != 0"
              v-for="soiaree in soiareesLoaded"
              :key="soiaree.key"
            >
              <div class="portfolio-wrapper mb-30">
                <div class="single-portfolio-item">
                  <div class="single-portfolio__thumbnail">
                    <img
                      class="img-fluid border-radus-5"
                      :src="soiaree.image_url"
                      :alt="soiaree.name"
                    />
                  </div>
                  <div class="post-overlay gradient-background"></div>
                  <div class="single-portfolio__content">
                    <div class="post-overlay-info">
                      <h4 class="post-overlay-title text-white">
                        {{ soiaree.name }}
                      </h4>
                      <br/>
                      <h5>
                        الوقت: {{ soiaree.date }} 
                        <br />
                        المكان: {{ soiaree.place }} 
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div
                class="load-more-button text-center"3
                v-if="soiarees != null && soiarees.length != 0"
              >
                <button
                  class="ht-btn ht-btn-md ht-btn--outline loadMore"
                  v-if="length < soiarees.length"
                  @click="loadMore"
                >
                  عرض المزيد
                </button>
              </div>
              <h5 class="text-default-color" v-else>لا توجد امسيات قرآنية</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
