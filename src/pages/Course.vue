<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { show } from '../services/courses'
export default {
  name: 'Course',
  components: {
    Header,
    Footer
  },
  data: () => ({
    courseId: null,
    course: {}
  }),
  mounted() {
    this.courseId = this.$route.params.id
    this.getCourse(this.courseId)
  },
  methods: {
    async getCourse(courseId) {
      this.course = await show(courseId)
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
                <h4 class="breadcrumb-title">{{ course.name }}</h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li>
                    <router-link to="/courses">التدريب والتأهيل</router-link>
                  </li>
                  /
                  <li class="active">{{ course.name }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="blog-pages-wrapper section-space--ptb_30">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="main-blog-wrap">
                <div class="single-blog-item">
                  <div class="post-info lg-blog-post-info wow move-up">
                    <h4 class="post-title font-weight--light">
                      {{ course.name }}
                    </h4>
                    <div class="post-description mt-15">
                      <p>
                        {{ course.description }}
                      </p>
                    </div>

                    <ul
                      class="attribute_list_one section-space--mt_30 wow move-up"
                    >
                      <li class="item">
                        <div class="name">
                          <h6>نوع الدورة</h6>
                        </div>
                        <div class="value">{{ course.type }}</div>
                      </li>
                      <li class="item">
                        <div class="name">
                          <h6>مكان انعقاد الدورة</h6>
                        </div>
                        <div class="value">{{ course.place }}</div>
                      </li>
                      <li class="item">
                        <div class="name">
                          <h6>تاريخ انعاقد الدورة</h6>
                        </div>
                        <div class="value">{{ course.date }}</div>
                      </li>
                    </ul>

                    <h6 class="post-title mt-30">{{ course.content_heading }}</h6>
                    <div class="post-excerpt mt-15">
                      <p>
                        {{ course.content }}
                      </p>
                    </div>

                    <table>
                      <tr>
                        <td v-for="subject in course.subjects">{{ subject.subject }}</td>
                      </tr>
                    </table>

                    <table>
                      <tr>
                        <td v-for="attendee in course.attendees">{{ attendee.name }}</td>
                      </tr>
                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
