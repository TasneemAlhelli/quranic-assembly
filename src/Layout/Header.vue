<script>
export default {
  name: 'Header',
  data() {
    return {
      isSticky: false,
      isMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY
      if (scroll >= 50) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    })
  },
  methods: {
    menuCollapseOnLinkClick() {
      document.getElementById('navbarSupportedContent').classList.remove('show')
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<template>
  <header :class="{ open: isMenuOpen, 'is-sticky': isSticky }" class="header">
    <div class="container">
      <div class="logo">
        <img src="../assets/img/logo.png" alt="Logo" />
      </div>
      <nav class="nav">
        <ul>
          <li><a class="link" href="/">الصفحة الرئيسية</a></li>
          <li class="dropdown">
            <a class="link"
              >المجمع القرآني
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="link" href="/achievements">إنجازات المجمع القرآني</a>
              </li>
              <li>
                <a class="link" href="/centers"
                  >دليل المؤسسات والمراكز القرآنية</a
                >
              </li>
              <li><a class="link" href="/soiaress">الأمسيات القرآنية</a></li>
              <li>
                <a class="link" href="/competitions">المسابقات القرآنية</a>
              </li>
              <li>
                <a class="link" href="/poetries">فرق التواشيج النسائية</a>
              </li>
              <li><a class="link" href="/characters">الشخصيات القرآنية</a></li>
              <li><a class="link" href="/courses">التدريب والتأهيل</a></li>
            </ul>
          </li>
          <li><a class="link" href="/timeline">سجل الحراك القرآني</a></li>
          <li><a class="link" href="/about">من نحن</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
