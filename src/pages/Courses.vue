<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { index } from '../services/courses'

export default {
  name: 'Courses',
  components: {
    Header,
    Footer
  },
  data: () => ({
    courses: null
  }),
  mounted() {
    this.getAllCourses()
  },
  methods: {
    async getAllCourses() {
      this.courses = await index()
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
                  التدريب والتأهيل (الدورات التخصصية في الخارج والداخل)
                </h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li class="active">التدريب والتأهيل</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="portfolio-pages-wrapper section-space--ptb_100 border-bottom"
      >
        <div class="container">
          <div class="row align-center">
            <div
              class="col-lg-4 col-md-6 wow move-up"
              v-for="course in courses"
              :key="course.id"
            >
              <div class="portfolio-wrapper mb-30">
                <router-link
                  :to="'/courses/' + course.id"
                  class="single-portfolio-item"
                >
                  <div class="single-portfolio__thumbnail">
                    <img
                      class="img-fluid border-radus-5"
                      src="../assets/img/centers-default.png"
                      :alt="course.name"
                    />
                  </div>
                  <div class="post-overlay gradient-background"></div>
                  <div class="single-portfolio__content">
                    <div class="post-overlay-info">
                      <h5 class="post-overlay-title text-white">
                        {{ course.name }}
                      </h5>
                      <h6 class="post-overlay-title">
                        مكان انعقاد الدورة: {{ course.place }}
                      </h6>
                      <h6 class="post-overlay-title">
                        تاريخ الدورة: {{ course.date }}
                      </h6>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="col-lg-12" v-if="courses">
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
