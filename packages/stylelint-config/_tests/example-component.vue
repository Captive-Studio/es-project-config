<style scoped lang="scss">
.list {
  &-item {
    display: flex;
    align-items: center;
    height: 25px;
    margin-bottom: 2rem;
    color: $color-text-dark;

    &--active {
      color: $color-primary;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &__icon {
      margin-right: 1rem;

      &::before {
        color: $color-icon;
        font-size: 24px;
        line-height: 24px;
      }
    }

    &__link {
      display: flex;
      align-items: center;
      width: 100%;
      color: inherit;
      text-decoration: none;

      &:hover {
        color: $color-primary;
      }
    }

    &__link:hover &__graphic--icon,
    &__link:hover &__graphic--icon::before {
      color: $color-primary;
    }
  }
}
</style>
