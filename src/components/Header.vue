<script>
export default {
  data() {
    return {
      isSticky: true
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY
      if (scroll >= 200) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    })
  },

  methods: {
    // offcanvas searchbox
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector('#search-overlay')
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },
    menuCollapseOnLinkClick() {
      document.getElementById('navbarSupportedContent').classList.remove('show')
    }
  }
}
</script>

<template>
  <header
    class="header-area navbar-light fixed-top"
    :class="{ 'is-sticky': isSticky }"
  >
    <div class="container-fluid container-fluid--cp-150">
      <nav class="navbar navbar-expand-lg" id="navbar-example2">
        <router-link to="/"><img src="" alt="logo" /></router-link>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="nav main-menu">
            <li class="nav-item">
              <a class="nav-link" href="" @click="menuCollapseOnLinkClick">
                <span>المراكز والشخصيات</span>
              </a>
            </li>
            <li>
              <a class="nav-link" href="" @click="menuCollapseOnLinkClick">
                <span>الامسيات القرآنية</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
