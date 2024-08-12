<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
export default {
  name: 'About',
  components: {
    Header,
    Footer
  },
  methods: {
    async download() {
      const link = document.createElement('a')
      link.href = '/docs/islamic-women.pdf'
      link.download = 'مؤتمر المرأة المسلمة.pdf'

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
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
                  هوية و نشأة المجمع القرآني النسوي في البحرين
                </h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/r">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li class="active">من نحن</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-app-showcase section-space--pt_60" id="about">
        <div class="container">
          <div class="feature-list__one">
            <div class="row">
              <div class="col-lg-12 wow move-up">
                <div class="grid-item animate">
                  <div class="ht-box-icon style-01">
                    <div class="icon-box-wrap">
                      <div class="content">
                        <h5 class="heading">الرؤية</h5>
                        <div class="text">
                          نطمح لأن نكون مؤسسة قرآنية جامعة وفاعلة ومعتمدة ومميزة
                          تقدم خدمات نوعية وشاملة في مجال علوم القرآن الكريم
                          لتمثل تجربة رائدة في العمل الإسلامي النسوي.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 wow move-up">
                <div class="grid-item animate">
                  <div class="ht-box-icon style-01">
                    <div class="icon-box-wrap">
                      <div class="content">
                        <h5 class="heading">الرسالة</h5>
                        <div class="text">
                          العمل على نشر علوم القرآن وتأصيل ثقافته، من خلال تقديم
                          خدمات نوعية للجهات المعنية بعلوم القرآن، وتنميتها
                          وتلبية احتياجاتها، وتفعيل أطر التكامل والتنسيق بينها
                          لأداء دورها الرسالي بكفاءة وتميز.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 wow move-up">
                <div class="grid-item animate">
                  <div class="ht-box-icon style-01">
                    <div class="icon-box-wrap">
                      <div class="content">
                        <h5 class="heading">القيم والمبادئ الاساسية</h5>
                        <div class="row aling-items-center">
                          <div class="col-md-12">
                            <div class="horizontal-list-display">
                              <ul>
                                <li>
                                  مؤسسة قرآنية جامعة وفاعلة ومعتمدة ومميزة
                                </li>
                                <li>خدمة القرآن ونشر علومه من أبرز مبادئنا</li>
                                <li>الابتكار والتميّز</li>
                                <li>الحرفية</li>
                                <li>تقدم خدمات نوعية وشاملة</li>
                                <li>الجودة العالية</li>
                                <li>الشراكة</li>
                                <li>التواصل الفعّال</li>
                                <li>
                                  التعاون والعمل الجماعي لتمثل تجربة رائدة
                                </li>
                                <li>الريادة والمبادرة</li>
                                <li>الأصالة</li>
                                <li>الوحدة</li>
                                <li>الانتماء والولاء</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 wow move-up">
                <div class="grid-item animate">
                  <div class="ht-box-icon style-01">
                    <div class="icon-box-wrap">
                      <div class="content">
                        <h5 class="heading">مؤتمر المرأة المسلمة</h5>
                        <div class="row aling-items-center">
                          <div class="col-md-12">
                            <div class="text download" @click="download()">
                              تحميل ورقة بحث مؤتمر المرأة المسلمة
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-wrapper section-space--pb_90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="faq-wrapper section-space--pt_90">
                <div class="accordion-faq wow move-up">
                  <div class="accordion" id="accordionOne">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          أهمية المجمع القرآني النسوي في البحرين
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionOne"
                      >
                        <div class="accordion-body">
                          <ol>
                            <li>
                              توحيد وتنسيق الحراك القرآني النسوي لأتباع مدرسة
                              أهل البيت عليهم السلام على المستوى المحلي داخل
                              البلد.
                            </li>
                            <li>
                              احتضان ورعاية المشاريع القرآنية النسوية بما تكفله
                              الإمكانيات المتاحة.
                            </li>
                            <li>
                              الاستجابة لتنامي واطراد الطلب في قبال محدودية
                              العرض المتوفر في المجال القرآني.
                            </li>
                            <li>
                              استحضار الدور التنسيقي بين المؤسسات والشخصيات
                              القرآنية في المجتمع المحلي.
                            </li>
                            <li>الحضور والتمثيل الدولي في الخارج.</li>
                            <li>تنمية الطاقات المتخصصة ورفع كفاءتها.</li>
                            <li>
                              تحقيق التكامل والشمولية في التخصصات القرآنية.
                            </li>
                            <li>
                              الحاجة إلى إحصائيات معتمدة لتنفيذ المشاريع
                              وتطويرها.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          الأهداف الاستراتيجية للمجمع القرآني النسوي
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionOne"
                      >
                        <div class="accordion-body">
                          <ol>
                            <li>
                              صيانة الحراك القرآني النسوي والحفاظ على أصالته في
                              المحتوى والأساليب من كافة الأبعاد.
                            </li>
                            <li>
                              التنسيق والتكامل مع كافة المؤسسات القرآنية ذات
                              العلاقة، من خلال إطار مؤسساتي تحدد الأدوار
                              والوظائف، وترشد الطاقات والموارد بالشكل الأمثل.
                            </li>
                            <li>
                              رفد المجتمع بالطاقات والكوادر المؤهلة تأهيلاً
                              متقدمًا وعاليًا.
                            </li>
                            <li>
                              تمكين المؤسسات المعنية بعلوم القرآن للقيام بدورها
                              بشكل فعال ومتميز في مجالات عملها.
                            </li>
                            <li>
                              دعم المؤسسات المعنية بعلوم القرآن من خلال نقل
                              وتبادل الخبرات، وتوفير الموارد البشرية والفنية
                              والعلمية اللازمة لها لأداء دورها وتحقيق اهدافها
                              العملية.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          استراتيجية المجمع القرآني النسوي في تحقيق أهدافه
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionOne"
                      >
                        <div class="accordion-body">
                          <ol>
                            <li>
                              اعتماد مبدأ التميز والإبداع في تقديم خدماته،
                              وتعزيز كل مقومات الريادة في عمله في مجال العلوم
                              القرآنية.
                            </li>
                            <li>
                              اعتماد مفهوم التطوير المستدام على مستوى الأداء،
                              والمواكبة والتأهيل المتقدم لكوادره بما ينعكس على
                              جودة وتميز الخدمات التي يقدمها.
                            </li>
                            <li>
                              توظيف الإعلام التفاعلي الملتزم بالضوابط الشرعية
                              وخصوصية المجتمع النسوي البحراني في إبراز صورة
                              نوعية ومتميزة للمجمع القرآني في الوعي العام،
                              وتفعيله للأدوات الإعلامية الفعالة والعلاقات العامة
                              التي تمكنه من كسب التعاطف والدعم والتعاون
                              المجتمعي.
                            </li>
                            <li>
                              الشراكة التفاعلية والتكاملية مع المجتمع والمؤسسات
                              المعنية في التنسيق والتكامل، وآليات اتخاذ القرار
                              والتخطيط والتنفيذ.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
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

<style scoped>
.download {
  position: relative;
  cursor: pointer;
  color: #9BC9B6;
  /* text-decoration: underline; */
  &::after {
    content: '';
    width: 0;
    height: 1px;
    bottom: 0;
    position: absolute;
    left: auto;
    right: 0;
    z-index: -1;
    transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
    background: currentColor;
  }
  &:hover {
    &::after {
      width: 100%;
      left: 0;
      right: auto;
      z-index: 0;
    }
  }
}
</style>
