<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
export default {
  name: 'Timeline',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      timeline_events: [
        {
          color: '#004C54',
          date: '1997',
          title: '',
          description: [
            'أول أمرأة تنال شهادة الرواية: الأستاذة زينب أمان الله الخاجة، باعتبارها أول امرأة من أتباع مدرسة أهل البيت عليهم السلام في البحرين تنال هذه الشهادة، وبمبادرة منها بدأ في هذا العام تنفيذ أول مشروع لتخريج أول دفعة من النساء من حملة رواية حفص عن عاصم في مدرسة القرآن الكريم في القفول.'
          ]
        },
        {
          color: '#E5E0AE',
          date: '1999',
          title: '',
          description: [
            'تم فيه تخرج الدفعة الأولى من النساء (9 خريجات) وكانت تمثل مدة قياسية فريدة لنيل هذه الشهادة (رواية حفص) التي كانت تنالها المرأة في دراسة بطيئة تمتد ست سنوات في المراكز القرآنية الرسمية التابعة للعامة طوال عقود، حتى تم اعتماد هذا البرنامج في مدرسة القرآن الكريم في القفول، ومنها انتقلت الفكرة بتفاصيلها مع الخريجات إلى مختلف المناطق والمراكز التي تم تأسيسها لاحقًا. وقامت الخريجات بفتح صفوف في المدرسة وفي المناطق الأخرى بتوجيه وتنسيق بين الناشطات أنفسهن حرصًا على نشر علم التجويد في المناطق وخاصة مع تزايد الإقبال من الكبار والصغار، فقد بلغ عدد الطالبات في قسم النساء 450 طالبة قرآن من جميع المستويات، واستحالة استيعاب مدرسة القرآن في القفول للأعداد المتزايدة في قوائم الاحتياط.'
          ]
        },
        {
          color: '#347176',
          date: '2000',
          title: 'مشروع التحفيظ',
          description: [
            'كانت مبادرة من إحدى خريجات الرواية المتفوقات والمتميزات، أ. إيمان علي حاجي، بدأت بفكرة تحفيظ جزء عم للصغار من الإناث والذكور، في صفوف منفصلة، واقتصر الذكور على الفئة العمرية للحلقة الأولى، وكانت النتائج باهرة، فقد تمكن الطلبة الذكور من حفظ جزء عم والجزء التاسع والعشرون وسورة البقرة في مدة عامين، مما جعلت الطموحات ترتفع لتصل إلى تبني مشروع لحفظ كل القرآن في ثلاث سنوات ولكنه للكبار من الإناث فقط وبشروط خاصة.'
          ]
        },
        {
          color: '#eae7be',
          date: '2002',
          title: '',
          description: [
            'بداية مشاركة المرأة القرآنية في المسابقة وفي التحكيم في مسابقات الذكر الحكيم القرآنية التي كانت قد بدأت للرجال منذ عام 1999م',
            'مشاركة النساء في التحكيم في مسابقات الذكر الحكيم: بدأت المسابقة للرجال عام 1997م، ثم للنساء عام 2002م تم اتعماد الخريجات للتحكيم في المسابقة، ومن هنا بأت التجربة فتم الاهتمام بتنميتها وتطويرها وتقنينها بالاستفادة من تجربة الأخوة ورعاية الخصوصية النسائية في هذا الحقل القرآني.'
          ]
        },
        {
          color: '#004C54',
          date: '2004',
          title: '',
          description: [
            'ولادة فكرة المجمع القرآني النسوي: مع تنامي الحراك القرآني النسوي وخاصة في مجال المسابقات القرآنية التي كانت جمعية الذكر الحكيم رائدة فيها، واهتمام المرأة القرآنية بالمضي قدمًا نحو تحقيق تلك الطموحات القرآنية، تواردت فكرة تأسيس كيان لجمع الجهود والطاقات في بوتقة واحدة لتوحيدها وتنظيمها وتطويرها وصيانتها من المخاوف المختلفة، فكانت فكرة النساء تحت مسمى (المَجْمَع)، وفي ليلتها تقرر إبلاغ الفكرة إلى الأخوة القائمين على المسابقة للنظر فيها كفكرة ودراسة مدى إمكانية اجتماع الحراك القرآني للجنسين تحت سقف واحد، وتفاجأنا أن الأخوة قد أعلنوا خبرًا سارًا وهو تأسيس (الرابطة القرآنية)، فتقرر انضمام الأخوات للرابطة، واستمر العمل تحت هذا المسمى إلى عام 2012م تقريبا.',
            'رحلة إلى مراكز التحفيظ في قم ومشهد: بمبادرة كريمة ورائدة من الوجيه الحاج مجيد الزيرة تمت الزيارة للاطلاع على التجربة القرآنية الفريدة للجمهورية الإسلامية في إيران، وترتب على إثرها التخطيط لمشروع حفظ كل القرآن في ثلاث سنوات في البحرين بإدارة وتخطيط وتنفيذ وإشراف بحريني نسائي 100%.'
          ]
        },
        {
          color: '#E5E0AE',
          date: '2005',
          title: '',
          description: [
            'أول مشروع لحفظ كل القرآن للنساء في البحرين تحت مسمى مشروع العهد (حفظ كل القرآن في 3 سنوات) بدأ في 2005م وانتهى في 2008م، تخرجت 6 حافظات لكل القرآن من مجموع 14 طالبة.'
          ]
        },
        {
          color: '#347176',
          date: '2007',
          title: '',
          description: [
            'دورة مكتب القرآن الكريم في قم المقدسة: أول دورة قرآنية للناشطات القرآنيات من البحرين، وكانت في قم المقدسة تحت عنوان (دورة مكتب القرآن الكريم) وهي مؤسسة قرآنية رائدة، ومتميزة في المنهج والمتخصصين، وتستهدف فئة رياض الأطفال والحلقة الأولى في تعلم قراءة القرآن الكريم وتلاوته وحفظه والتواشيح والمفاهيم القرآنية، واستمرت الدورات الخارجية حتى عام 2015م ومن بعدها تحولت الفكرة إلى مشاريع خاصة تقوم بها المؤسسات القرآنية لكوادرها فقط أو بالتعاون بين عدد من المراكز ولا تزال على هذا المنوال، وهي حالة صحية؛ لكنها تتطلب المتابعة والتوجيه لضمان المعايير واعتماديتها من كل الأبعاد.',
            'تدشين مشروع الأمسيات القرآنية النسائية.'
          ],
          link: {
            text: 'الأمسيات القرآنية',
            route: '/soiaress'
          }
        },
        {
          color: '#eae7be',
          date: '2008',
          title: '',
          description: [
            'دورة لآلئ القرآن في البحرين: تم تقديم دورة مكتب القرآن الكريم للأخوات في البحرين بحضور ما يزيد عن 80 أختًا من المهتمات بالتعليم القرآني حينها من مختلف المناطق، وتلقين محتوى الدورة باللغة العربية على يد المعلمات اللاتي تلقين الدورة في قم، وقدمنها في قالب أكثر تطورًا باستخدام التكنولوجيا، وكان ذلك في مركز جدحفص الاجتماعي.',
            'دورة تعليم مفاهيم القرآن بالإشارات للأطفال دون سن المدرسة، وهو منهج خاص أسسته دار القرآن الكريم في الحرم الرضوي، وقدمته أ. مريم نوري من العتبةالرضوية، باللغة الفارسية مع توفير مترجمة، وكانت الدورة ذات أثر كبير في الحراك نظرًا لعمق تجربتها وجودة وجاذبية أساليبها، وحضرتها ما يقارب المئة من معلمات القرآن ومعلمات رياض الأطفال.'
          ]
        },
        {
          color: '#004C54',
          date: '2011',
          title: '',
          description: [
            'ورقة المؤتمر الخامس للمرأة المسلمة في البحرين، تناولت واقع الحراك القرآني النسوي في البحرين.'
          ],
          link: {
            text: 'ورقة مؤتمر المرأة المسلمة',
            route: '/about'
          }
        },
        {
          color: '#eae7be',
          date: '2012',
          title: '',
          description: [
            'اعتماد مسمى (المَجْمَع): ولأن المرأة القرآنية تعمل وفق الضوابط الشرعية التي تضمن لها استقلاليتها الحقيقية في عدم الاختلاط، وتنفيذ مشاريعها في فضاء نسائي، فقد كان بقاء هذا الكيان الجامع للحراك القرآني النسوي في البحرين أمرًا متحققًا، ولا يمنع استمراره توقف الأخوة في (الرابطة القرآنية)، فاستمر (المَجْمَع) في تحقيق أهدافه ورسالته ككيان قرآني نسوي جامع ومعتمد في مملكة البحرين (المَجْمَع القرآني النسوي في البحرين).'
          ]
        },
        {
          color: '#347176',
          date: '2016',
          title: '',
          description: [
            'دورة التثبيت لحافظات كل القرآن، والهدف هو تعلم استرتيجيات التثبيت، وتعاهد المحفوظات لحفظها من النسيان مع مرور الزمن، قدمتها أ. إيمان حاجي للمجموعة التي تخرجت من مشروع العهد لحفظ الكل.'
          ]
        },
        {
          color: '#eae7be',
          date: '2017',
          title: '',
          description: [
            'التكريم الدولي للناشطات القرآنيات في الجمهورية الإسلامية، وتم انتخاب أ. إيمان حاجي من ضمن قائمة الترشيح لعشر ناشطات من البحرين رشحهن المجمع القرآني النسوي في البحرين.'
          ]
        },
        {
          color: '#004C54',
          date: '2018',
          title: '',
          description: [
            'مشاركة أول محكمة من البحرين في التحكيم للمسابقات القرآنية الدولية للنساء في طهران، وهي أ. إيمان حاجي وتم اختيارها من قبل الجمهورية بعد تكريمها للتحكيم في فرع الابتداء والوقف.'
          ]
        },
        {
          color: '#E5E0AE',
          date: '2019',
          title: '',
          description: [
            'رشح المجمع أ. معصومة المخلوق للتحكيم في المسابقا الدولية في طهران في فرع التجويد، ورافقتها أ. إيمان حاجي.'
          ]
        },
        {
          color: '#347176',
          date: '2022',
          title: '',
          description: [
            'رشح المجمع مجموعة من الأخوات للتحكيم في مختلف الفروع، وتانتخبت إدارة المسابقة أ. رملة مكي مفتاح للتحكيم في المسابقات الدولية للقرآن الكريم للنساء في طهران في فرع الصوت، كما تم انتخاب أ.نازي كريمي لرئاسة لجنة التحكيم النسائية إلى جانب الرئيسة الإيرانية المعتمدة للتصفيات الأولى بسبب ظروف جائحة الكورونا التي جعلت المسابقة مجازية وغير حضورية للمتسابقات.'
          ]
        },
        {
          color: '#eae7be',
          date: '2023',
          title: '',
          description: [
            'رغم أن المسابقة لا تكرر المحكمات إلا نادرًا ولأسباب خاصة، فقد تكرر انتخاب أ. رملة مكي مفتاح للتحكيم في فرع الصوت في المسابقة الدولية مرتين.'
          ]
        },
        {
          color: '#004C54',
          date: '2024',
          title: '',
          description: [
            'انتخاب أ. زينب المخلوق للتحكيم في فرع حسن الحفظ في المسابقة الدولية في طهران.',
            'تكريم أ.نازي كريمي في مشروع (خيرات حسان) للناشطات القرآنيات الدولي في طهران.'
          ]
        }
      ]
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
                  سِجِلّ الحراك الزمني للمجمع القرآني النسوي في البحرين
                </h4>
                <ul class="breadcrumb-list">
                  <li>
                    <router-link to="/">الصفحة الرئيسية</router-link>
                  </li>
                  /
                  <li class="active">سجل الحراك الزمني</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="blog-pages-wrapper section-space--ptb_30">
        <div class="container">
          <div class="row align-center">
            <div class="timeline col-lg-12">
              <ul class="timeline-list">
                <li
                  v-for="(event, index) in timeline_events"
                  :style="{ '--accent-color': event.color }"
                  :key="index"
                >
                  <div class="date">{{ event.date }}</div>
                  <div class="title">{{ event.title }}</div>
                  <div class="descr">
                    <span v-for="(el, index) in event.description">
                      <template v-if="index === 1"><br /><br /></template>
                      {{ el }}</span
                    >
                    <router-link v-if="event.link" :to="event.link.route">{{
                      event.link.text
                    }}</router-link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style scoped></style>
