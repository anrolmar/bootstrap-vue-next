import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAccordion',
      sourcePath: '/BAccordion/BAccordion.vue',
      props: {
        '': {
          flush: {
            type: 'boolean',
            default: false,
            description:
              'Remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container',
          },
          free: {
            type: 'boolean',
            default: false,
            description: 'Accordion items will stay open when another item is opened',
          },
          modelValue: {
            type: 'string',
            default: undefined,
            description:
              'The Id of the accordion item that is currently open (not compatible with the `free===true`)',
          },
          lazy: {
            type: 'boolean',
            default: false,
            description: 'When set, the content will not be mounted until opened',
          },
          unmountLazy: {
            type: 'boolean',
            default: false,
            description: 'When set and `lazy` is true, the content will be unmounted when closed',
          },
          // transProps: {
          //   type: 'TransitionProps',
          //   default: undefined,
          //   description: 'Transition properties',
          // },
          // noAnimation: {
          //   type: 'boolean',
          //   default: false,
          //   description: 'When set, disables the animation',
          // },
          // noFade: {
          //   type: 'boolean',
          //   default: false,
          //   description: 'Alias for `noAnimation`',
          // },
          ...pick(
            buildCommonProps({
              id: {
                description:
                  'The Id to be injected to accordion items and used in BCollapse for state managment',
              },
            }),
            ['id']
          ),
        } satisfies Record<keyof BvnComponentProps['BAccordion'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Update the currently opened accordion item',
          args: [
            {
              arg: 'value',
              description: 'Id of the accordion item that is open',
              type: 'string',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the Accordion',
        },
      ],
    },
    {
      component: 'BAccordionItem',
      sourcePath: '/BAccordion/BAccordionItem.vue',
      props: {
        '': {
          bodyAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Attributes to be applied to the body of the accordion item',
          },
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class to be applied to the body of the accordion item',
          },
          buttonAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Attributes to be applied to the button in header',
          },
          buttonClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class to be applied to the button in header',
          },
          collapseClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class to be applied to the collapse',
          },
          headerAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Attributes to be applied to the header element',
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class to be applied to the header element',
          },
          headerTag: {
            type: 'string',
            default: 'h2',
            description: 'Tag to be used for the header element',
          },
          horizontal: {
            type: 'boolean',
            default: undefined,
            description:
              'Transition the `width` instead of `height` and set a `width` on the immediate child element',
          },
          isNav: {
            type: 'boolean',
            default: undefined,
            description:
              'When set, signifies that the accordion is part of a navbar, enabling certain features for navbar support',
          },
          modelValue: {
            type: 'boolean',
            default: false,
            description: 'Controls the visibility of the AccordionItem',
          },
          title: {
            type: 'string',
            default: undefined,
            description:
              'Text to place in the header of the AccordionItem (title slot takes precedence)',
          },
          show: {
            type: 'boolean',
            default: false,
            description:
              "When set, and prop 'visible' is false on mount, will animate from closed to open on initial mount",
          },
          visible: {
            type: 'boolean',
            default: false,
            description: "When 'true', open without animation",
          },
          lazy: {
            type: 'boolean',
            default: false,
            description: 'When set, the content will not be mounted until opened',
          },
          unmountLazy: {
            type: 'boolean',
            default: false,
            description: 'When set and `lazy` is true, the content will be unmounted when closed',
          },
          // transProps: {
          //   type: 'TransitionProps',
          //   default: undefined,
          //   description: 'Transition properties',
          // },
          //   noAnimation: {
          //   type: 'boolean',
          //   default: false,
          //   description: 'When set, disables the animation',
          // },
          // noFade: {
          //   type: 'boolean',
          //   default: false,
          //   description: 'Alias for `noAnimation`',
          // },
          ...pick(
            buildCommonProps({
              id: {
                description:
                  'The Id to be injected to accordion items and used to in BCollapse for state managment',
              },
            }),
            ['id', 'tag', 'wrapperAttrs']
          ),
        } satisfies Record<keyof BvnComponentProps['BAccordionItem'], PropertyReference>,
      },
      emits: [
        {
          event: 'hidden',
          description: 'Emitted when AccordionItem has finished closing',
          args: [],
        },
        {
          event: 'hide',
          description: 'Emitted when AccordionItem has started to close',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Native triggerable event',
            },
          ],
        },
        {
          event: 'hide-prevented',
          description:
            'Emitted when the AccordionItem tried to close, but was prevented from doing so.',
          args: [],
        },
        {
          event: 'show',
          description: 'Emitted when AccordionItem has started to show',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Native triggerable event',
            },
          ],
        },
        {
          event: 'shown',
          description: 'Emitted when AccordionItem has finished showing',
          args: [],
        },
        {
          event: 'show-prevented',
          description:
            'Emitted when the AccordionItem tried to open, but was prevented from doing so.',
          args: [],
        },
        {
          event: 'update:model-value',
          description: 'Emitted when the visibility of the AccordionItem is changed',
          args: [
            {
              arg: 'value',
              type: 'boolean',
              description: 'Current visibility state of the AccordionItem',
            },
          ],
        },
      ],
      slots: [
        {
          scope: [],
          name: 'default',
          description: 'Content to place in the AccordionItem',
        },
        {
          scope: [],
          name: 'title',
          description: 'Content to place in the header of the AccordionItem',
        },
      ],
    },
  ],
}
