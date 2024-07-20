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
      centers: null
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
                <h2 class="breadcrumb-title">دليل المراكز والمؤسسات</h2>
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
              v-for="center in centers"
              :key="center.id"
            >
              <div
                class="portfolio-grid-caption"
                @click="showCenter(center.id)"
              >
                <div class="single-portfolio__thumbnail">
                  <img
                    class="img-fluid"
                    src="https://img.freepik.com/free-photo/high-angle-students-learning-library_23-2149647043.jpg"
                    alt="portfolio.alt"
                  />
                </div>
                <div class="post-info">
                  <!-- <div class="post-categories">
                    <router-link to="">مركز المارج</router-link>
                  </div> -->
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
