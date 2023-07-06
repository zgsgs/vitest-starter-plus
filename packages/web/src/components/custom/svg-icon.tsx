import { Icon } from '@iconify/vue'
import { computed, defineComponent, useAttrs } from 'vue'

/**
 * 图标组件
 * - 支持iconify和本地svg图标
 * - 同时传递了icon和localIcon，localIcon会优先渲染
 */
export const SvgIcon = defineComponent({
  name: 'SvgIcon',
  props: {
  /** 图标名称 */
    icon: {
      type: String,
    },
    /** 本地svg的文件名 */
    localIcon: {
      type: String,
    },
  },
  setup(props) {
    const attrs = useAttrs()

    const bindAttrs = computed<{ class: string; style: string }>(() => ({
      class: (attrs.class as string) || '',
      style: (attrs.style as string) || '',
    }))

    const symbolId = computed(() => {
      const { VITE_ICON_LOCAL_PREFFIX: preffix } = import.meta.env

      const defaultLocalIcon = 'no-icon'

      const icon = props.localIcon || defaultLocalIcon

      return `#${preffix}-${icon}`
    })

    /** 渲染本地icon */
    const renderLocalIcon = computed(() => props.localIcon || !props.icon)

    return () => (<>
      {
        renderLocalIcon.value
          ? (<svg aria-hidden="true" width="1em" height="1em" {...bindAttrs.value}>
            <use xlinkHref={symbolId.value} fill="currentColor" />
          </svg>)
          : (props.icon && <Icon icon={props.icon} {...bindAttrs.value} />)
      }
    </>)
  },
})
