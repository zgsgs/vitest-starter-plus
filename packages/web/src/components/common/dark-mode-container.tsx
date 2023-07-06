import { computed, defineComponent } from 'vue'

export const DarkModeContainer = defineComponent({
  name: 'DarkModeContainer',
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const className = computed(() => {
      return props.inverted ? 'bg-#001428 text-white' : 'bg-white text-#333639'
    })

    return () => (
      <div
        class={`transition-all dark:bg-dark dark:text-white dark:text-opacity-82 ${className.value}`}
      >
        {
          slots.default?.()
        }
      </div>
    )
  },
})
