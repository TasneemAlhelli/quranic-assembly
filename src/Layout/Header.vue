<script>
export default {
  name: 'Header',
  data() {
    return {
      isSticky: false
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
        <router-link to="/" class="navbar-brand logo-dark">
          <img src="../assets/img/logo/logo-dark.png" alt="logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="nav main-menu">
            <li class="nav-item">
              <a class="nav-link" href="/" @click="menuCollapseOnLinkClick">
                <span>الصفحة الرئيسية</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/about"
                @click="menuCollapseOnLinkClick"
              >
                <span>من نحن</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
