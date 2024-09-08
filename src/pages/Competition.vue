<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { show } from '../services/competitions'
export default {
  name: 'Competition',
  components: {
    Header,
    Footer
  },
  data: () => ({
    competitionId: null,
    competition: {}
  }),
  mounted() {
    this.competitionId = this.$route.params.id
    this.getCompetition(this.competitionId)
  },
  methods: {
    async getCompetition(competitionId) {
      this.competition = await show(competitionId)
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
                <h4 class="breadcrumb-title">{{ competition.name }}</h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li>
                    <router-link to="/competitions"
                      >المسابقات القرآنية</router-link
                    >
                  </li>
                  /
                  <li class="active">{{ competition.name }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="blog-pages-wrapper section-space--ptb_30">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="portfolio-details-one-images">
                <img
                  class="img-fluid border-radus-5"
                  :src="competition.image_url"
                  alt="Competition logo"
                />
              </div>
            </div>

            <div class="col-lg-8">
              <div class="main-blog-wrap">
                <div class="single-blog-item">
                  <div class="post-info lg-blog-post-info wow move-up">
                    <h4 class="post-title font-weight--light">
                      {{ competition.name }}
                    </h4>
                    <div class="post-meta mt-20">
                      <div class="post-comments">
                        <span class="fa fa-user meta-icon"></span>
                        <span style="font-weight: bold">المؤسس: </span>

                        {{ competition.founder }}
                      </div>
                      <div class="post-date">
                        <span class="fa fa-user meta-icon"></span>
                        <span style="font-weight: bold">المشرف: </span>
                        {{ competition.supervisor }}
                      </div>
                      <div class="post-date">
                        <span class="far fa-calendar meta-icon"></span>
                        <span style="font-weight: bold">تاريخ التأسيس: </span>
                        {{ competition.founded }}
                      </div>
                    </div>
                  </div>

                  <ul
                    class="attribute_list_two section-space--mt_30 wow move-up"
                  >
                    <li class="item">
                      <div class="name">
                        <h6>اهداف المسابقة</h6>
                      </div>
                      <div class="value">{{ competition.goal }}</div>
                    </li>
                    <li class="item">
                      <div class="name">
                        <h6>اسباب نشوء المسابقة</h6>
                      </div>
                      <div class="value">{{ competition.reason }}</div>
                    </li>
                    <li class="item">
                      <div class="name">
                        <h6>فروع المسابقة</h6>
                      </div>
                      <div class="value">{{ competition.section }}</div>
                    </li>
                  </ul>

                  <ul
                    class="attribute_list_one section-space--mt_30 wow move-up"
                  >
                    <li class="item">
                      <div class="name">
                        <h6>الفئة العمرية</h6>
                      </div>
                      <div class="value">{{ competition.age }}</div>
                    </li>
                    <li class="item">
                      <div class="name">
                        <h6>موعد المسابقة الدوري</h6>
                      </div>
                      <div class="value">{{ competition.occurrence }}</div>
                    </li>
                    <li class="item">
                      <div class="name">
                        <h6>هاتف التواصل</h6>
                      </div>
                      <div class="value">{{ competition.phone_number }}</div>
                    </li>
                    <li>
                      <div class="name">
                        <h6> موقع المسابقة الإلكتروني / انستقرام</h6>
                      </div>
                      <a
                        class="value hint--bounce hint--top hint--primary instagram"
                        target="_blank"
                        aria-label="ْURL"
                        :href="competition.url"
                      >
                        {{ competition.url }}
                      </a>
                    </li>
                  </ul>
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
