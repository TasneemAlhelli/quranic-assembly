<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { show } from '../services/poetries'
export default {
  name: 'Poetry',
  components: {
    Header,
    Footer
  },
  data: () => ({
    poetryId: null,
    poetry: {}
  }),
  mounted() {
    this.poetryId = this.$route.params.id
    this.getOnePoetry(this.poetryId)
  },
  methods: {
    async getOnePoetry(poetryId) {
      this.poetry = await show(poetryId)
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
                <h4 class="breadcrumb-title">{{ poetry.name }}</h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li>
                    <router-link to="/poetries"
                      >فرق التواشيح النسائية</router-link
                    >
                  </li>
                  /
                  <li class="active">{{ poetry.name }}</li>
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
                    <h4 class="post-title">
                      {{ poetry.name }}
                    </h4>
                    <div class="post-description mt-15">
                      <p>
                        <span>نوعية النشاط:</span>
                        {{ poetry.activity_type }}
                      </p>
                    </div>

                    <ul
                      class="attribute_list_one section-space--mt_30 wow move-up"
                    >
                      <li class="item">
                        <div class="name">
                          <h6>الجهة المؤسسة</h6>
                        </div>
                        <div class="value">{{ poetry.founder }}</div>
                      </li>
                      <li class="item">
                        <div class="name">
                          <h6>تاريخ التأسيس</h6>
                        </div>
                        <div class="value">{{ poetry.founded }}</div>
                      </li>
                      <li class="item">
                        <div class="name">
                          <h6>عدد العضوات</h6>
                        </div>
                        <div class="value">{{ poetry.member }}</div>
                      </li>
                      <li class="item">
                        <div class="name">
                          <h6>هاتف التواصل</h6>
                        </div>
                        <div class="value">{{ poetry.phone_number }}</div>
                      </li>
                      <li class="item">
                        <div class="name">
                          <h6>حساب الانستقرام</h6>
                        </div>
                        <div class="value">{{ poetry.instagram }}</div>
                      </li>
                    </ul>

                    <h6 class="post-title mt-30">أهداف الفرقة</h6>
                    <div class="post-excerpt mt-15">
                      <p>
                        {{ poetry.goal }}
                      </p>
                    </div>

                    <h6 class="post-title mt-30">نماذج من الإنجازات</h6>
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
