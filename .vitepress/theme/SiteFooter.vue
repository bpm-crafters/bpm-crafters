<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__cols">
        <div class="site-footer__col">
          <h3 class="site-footer__title">More</h3>
          <ul>
            <li>
              <a href="https://github.com/bpm-crafters" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
        <div class="site-footer__col">
          <h3 class="site-footer__title">Legal</h3>
          <ul>
            <li>
              <a href="https://miragon.io/impressum" target="_blank" rel="noopener noreferrer">Imprint</a>
            </li>
            <li>
              <a href="https://miragon.io/datenschutz" target="_blank" rel="noopener noreferrer">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="site-footer__copyright">Copyright © {{ year }} Miragon</div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  z-index: 1;
  width: 100%;
  background-color: #1b1b1d;
  color: #ebedf0;
  padding: 3rem 1.5rem 2.5rem;
}

/* On desktop the doc sidebar is position:fixed and would cover the left of the
   full-width footer. Lift the footer above the sidebar (z-index 25) so the dark
   bar spans the full width. Mobile is left alone so the slide-out menu (z 60)
   still overlays correctly. */
@media (min-width: 960px) {
  .site-footer {
    z-index: calc(var(--vp-z-index-sidebar, 25) + 1);
  }
}

.site-footer__inner {
  max-width: 1152px;
  margin: 0 auto;
}

.site-footer__cols {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}

.site-footer__title {
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: #fff;
}

.site-footer__col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.site-footer__col li {
  margin-bottom: 0;
}

.site-footer__col a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: #cfd2d6;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.site-footer__col a:hover {
  color: #fff;
  text-decoration: underline;
}

.site-footer__copyright {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.85rem;
  color: #9da3ab;
}
</style>
