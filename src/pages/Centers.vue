<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { index } from '../services/centers'

export default {
  name: 'Centers',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      centers: null,
      length: 6
    }
  },
  mounted() {
    this.getAllCenters()
  },
  methods: {
    async getAllCenters() {
      const centers = await index()
      this.centers = centers
    },
    showCenter(id) {
      this.$router.push(`/centers/${id}`)
    },
    loadMore() {
      if (this.length > this.centers.length) return
      this.length = this.length + 6
    }
  },
  computed: {
    centersLoaded() {
      if (this.centers && this.centers.length > 0)
        return this.centers.slice(0, this.length)
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
                  دليل المؤسسات والمراكز القرآنية النسوية في البحرين
                </h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li class="active">المراكز والمؤسسات القرآنية</li>
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
              class="col-lg-4 col-md-6 mb-30 wow move-up"
              v-if="centers != null && centers.length != 0"
              v-for="center in centersLoaded"
              :key="center.id"
            >
              <div
                class="portfolio-grid-caption"
                @click="showCenter(center.id)"
              >
                <div class="single-portfolio__thumbnail">
                  <img
                    class="img-fluid"
                    :src="
                      center.image_url != null
                        ? center.image_url
                        : require('@/assets/img/centers-default.png')
                    "
                    :alt="center.name"
                  />
                </div>
                <div class="post-info">
                  <h5
                    class="post-title font-weight--bold"
                    @click="showCenter(center.id)"
                  >
                    {{ center.name }}
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div
                class="load-more-button text-center"
                v-if="centers != null && centers.length != 0"
              >
                <button
                  class="ht-btn ht-btn-md ht-btn--outline loadMore"
                  v-if="length < centers.length"
                  @click="loadMore"
                >
                  عرض المزيد
                </button>
              </div>
              <h5 class="text-default-color" v-else>
                لا توجد مؤسسات ومراكز القرآنية
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
