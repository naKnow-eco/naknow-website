<template>
  <footer>
    <div>
      <svgo-naknow-full filled class="naknow-logo" />
      <div class="social">
        <svgo-social-linkedin filled class="social-icon" />
        <span> | </span>
        <a href="mailto:contact@naknow.com">contact@naknow.com</a>
      </div>
    </div>
    <div>
      <p class="copyright">{{ $t('footer.copyright') }}</p>
    </div>
    <div>
      <nuxt-link to="#about">{{ $t('action.goToTop') }}</nuxt-link>
    </div>
    <svgo-navigation-footer filled class="background" />
  </footer>
</template>

<style scoped lang="postcss">
footer {
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 2rem;
  color: $white-light;

  padding: 2rem;

  @add-mixin gradient bottom right, 33%;
  overflow: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-end;
    width: 20rem;

    &:nth-child(1) { align-items: flex-start; }
    &:nth-child(2) { align-items: center; }
    &:nth-child(3) { align-items: flex-end; }

    .naknow-logo {
      width: 10rem;
      height: auto;
    }

    .copyright {
      white-space: pre;
    }

    .social {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: center;

      .social-icon {
        width: 2rem;
        height: auto;
      }
    }
  }

  .background {
    position: absolute;
    inset: 0;
    width: auto;
    height: 100%;
  }
}
</style>
