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
    courses: null,
    length: 3
  }),
  mounted() {
    this.getAllCourses()
  },
  methods: {
    async getAllCourses() {
      this.courses = await index()
    },
    loadMore() {
      if (this.length > this.courses.length) return
      this.length = this.length + 6
    }
  },
  computed: {
    coursesLoaded() {
      if (this.courses && this.courses.length > 0)
        return this.courses.slice(0, this.length)
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

      <div class="portfolio-pages-wrapper section-space--ptb_100 border-bottom">
        <div class="container">
          <div class="row align-center">
            <div
              class="col-lg-4 col-md-6 wow move-up"
              v-if="courses != null && courses.length != 0"
              v-for="course in coursesLoaded"
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
                      :src="
                        course.image_url
                          ? course.image_url
                          : require('@/assets/img/courses-default.png')
                      "
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
                        <b>مكان انعقاد الدورة: </b>{{ course.place }}
                      </h6>
                      <h6 class="post-overlay-title">
                        <b>تاريخ الدورة: </b>{{ course.date }}
                      </h6>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="col-lg-12">
              <div
                class="load-more-button text-center"
                v-if="courses != null && courses.length > 0"
              >
                <button
                  class="ht-btn ht-btn-md ht-btn--outline loadMore"
                  v-if="length < courses.length"
                  @click="loadMore"
                >
                  عرض المزيد
                </button>
              </div>
              <h5 class="text-default-color" v-else>لا توجد دورات تخصصية</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
