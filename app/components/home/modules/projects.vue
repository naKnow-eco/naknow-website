<template>
  <section class="projects" id="projects">
    <div class="header">
      <ui-icon-lines />
      <h2>{{ $t('home.projects.title') }}</h2>
      <ui-icon-lines />
    </div>

    <div class="project project-first">
      <div class="text">
        <div class="project-heading">
          <span class="project-name">{{ $t('home.projects.project1.name') }}</span>
          <h3>{{ $t('home.projects.project1.subtitle') }}</h3>
        </div>
        <p class="lead">{{ $t('home.projects.project1.description') }}</p>
        <p class="details">{{ $t('home.projects.project1.details') }}</p>
      </div>
      <div class="visual">
        <nuxt-img src="/img/projects-five-fantastics.svg" alt="Illustration of the five core component families" />
      </div>
    </div>

    <div class="project project-second">
      <div class="visual">
        <nuxt-img src="/img/projects-data-gap.svg" alt="Periodic table illustration highlighting a data gap for critical elements" />
      </div>
      <div class="text">
        <div class="project-heading">
          <span class="project-name">{{ $t('home.projects.project2.name') }}</span>
          <h3>{{ $t('home.projects.project2.subtitle') }}</h3>
        </div>
        <p class="lead">{{ $t('home.projects.project2.description') }}</p>
        <p class="details">{{ $t('home.projects.project2.details') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.projects {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  @add-mixin section-padding;

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-content: stretch;

    h2 {
      width: max(33%, 16rem);
      margin: 0;
      text-transform: uppercase;
      text-align: center;
      color: $blue-dark;
    }

    .home-lines {
      flex: 1;
      height: 6rem;
      color: $gold-light;
    }
  }

  .project {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 3rem;
    width: 100%;
    max-width: 80rem;

    @add-mixin media lt-WXGA {
      grid-template-columns: 1fr;
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      color: $blue-dark;

      .project-heading {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .project-name {
          font-size: $text-sm;
          font-weight: 600;
          text-transform: uppercase;
          color: $gold-dark;
        }

        h3 {
          margin: 0;
          font-size: $text-3xl;
        }
      }

      .lead {
        font-size: $text-xl;
        font-weight: 500;
        line-height: 1.5;
        margin: 0;
      }

      .details {
        font-size: $text-lg;
        line-height: 1.6;
        white-space: pre-wrap;
        margin: 0;
      }
    }

    .visual {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        max-width: 28rem;
        height: auto;
        border-radius: $radius-xl;
        @add-mixin shadow;
      }
    }
  }

  .project-first {
    .visual {
      @add-mixin media lt-WXGA { order: -1; }
    }
  }

  .project-second {
    .visual {
      @add-mixin media lt-WXGA { order: -1; }
    }
  }
}
</style>
