<script>
export default {
  name: 'Footer',
  props: ['FooterStyle']
}
</script>

<template>
  <div class="footer-area-wrapper" :class="FooterStyle">
    <div class="footer-copyright-area border-top section-space--ptb_30">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="text-center">
            <span class="copyright-text">
              &copy; 2024 <b>المجمع القرآني النسوي في البحرين</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.footer-area-wrapper {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
