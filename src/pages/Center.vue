<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { show } from '../services/centers'
export default {
  name: 'Center',
  components: {
    Header,
    Footer
  },
  data: () => ({
    centerId: null,
    center: {}
  }),
  mounted() {
    this.centerId = this.$route.params.id
    this.getCenter(this.centerId)
  },
  methods: {
    async getCenter(centerId) {
      this.center = await show(centerId)
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
                <h4 class="breadcrumb-title">{{ center.name }}</h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li>
                    <router-link to="/centers"
                      >المراكز والمؤسسات القرآنية</router-link
                    >
                  </li>
                  /
                  <li class="active">{{ center.name }}</li>
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
                  :src="
                    center.image_url != null
                      ? center.image_url
                      : require('@/assets/img/default/centers-default.png')
                  "
                  alt="center logo"
                />
              </div>
            </div>

            <div class="col-lg-8">
              <div class="main-blog-wrap">
                <div class="single-blog-item">
                  <div class="post-info lg-blog-post-info wow move-up">
                    <h4 class="post-title font-weight--light">
                      {{ center.name }}
                    </h4>

                    <div class="post-meta mt-20">
                      <div class="post-date">
                        <span class="far fa-calendar meta-icon"></span>
                        <span style="font-weight: bold">تاريخ التأسيس: </span>
                        {{ center.founded }}
                      </div>
                      <div class="post-comments">
                        <span class="fa fa-user meta-icon"></span>
                        <span style="font-weight: bold">المؤسس: </span>

                        {{ center.founder }}
                      </div>
                    </div>

                    <div class="post-excerpt mt-15">
                      <p>
                        {{ center.description }}
                      </p>
                    </div>

                    <ul
                      class="attribute_list_one section-space--mt_30 wow move-up"
                    >
                      <li class="item">
                        <div class="name">
                          <h6>المنطقة</h6>
                        </div>
                        <div class="value">{{ center.city }}</div>
                      </li>
                      <li class="item">
                        <div class="name">
                          <h6>العنوان</h6>
                        </div>
                        <div class="value">{{ center.address }}</div>
                      </li>
                      <li class="item">
                        <div class="name">
                          <h6>المشرف</h6>
                        </div>
                        <div class="value">
                          {{ center.supervisor }}
                        </div>
                      </li>
                      <li class="item">
                        <div class="name">
                          <h6>أرقام التواصل</h6>
                        </div>
                        <div class="value">
                          <span v-if="center.contacts">{{
                            center.contacts
                              .map((contact) => contact.phone_number)
                              .join('، ')
                          }}</span>
                        </div>
                      </li>
                      <li>
                        <div class="name">
                          <h6>البريد الالكتروني</h6>
                        </div>
                        <a
                          class="value hint--bounce hint--top hint--primary email"
                          target="_blank"
                          aria-label="Email"
                          href="https://mail.google.com/"
                        >
                          {{ center.email }}
                          <i class="fa fa-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <div class="name">
                          <h6>حساب الانستقرام</h6>
                        </div>
                        <a
                          class="value hint--bounce hint--top hint--primary instagram"
                          target="_blank"
                          aria-label="Instagram"
                          :href="'https://instagram.com/' + center.instagram"
                          v-if="center.instagram"
                        >
                          {{ center.instagram }}
                          <i class="fab fa-instagram"></i>
                        </a>
                        <span class="value hint--bounce hint--primary" v-else
                          >-</span
                        >
                      </li>
                    </ul>
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
