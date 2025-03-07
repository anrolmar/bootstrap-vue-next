import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference, SlotScopeReference} from '../../types'
import {buildCommonProps, pick, showHideProps} from '../../utils'

const sharedSlots: SlotScopeReference[] = [
  {
    prop: 'hide',
    type: '() => void',
    description: "Hides the collapse and fires the 'hide' event",
  },
  {
    prop: 'id',
    type: 'string',
    description: 'The id of the collapse element',
  },
  {
    prop: 'show',
    type: '() => void',
    description: "Shows the collapse and fires the 'show' event",
  },
  {
    prop: 'toggle',
    type: '() => void',
    description: "Toggles the collapse and fires the 'hide' or 'show' event, as appropriate",
  },
  {
    prop: 'visible',
    type: '() => void',
    description: 'Visible state of the collapse. `true` if the collapse is visible',
  },
]

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCollapse',
      sourcePath: '/BCollapse/BCollapse.vue',
      props: {
        '': {
          horizontal: {
            type: 'boolean',
            default: false,
          },
          isNav: {
            type: 'boolean',
            default: false,
            description:
              'When set, signifies that the collapse is part of a navbar, enabling certain features for navbar support',
          },
          ...showHideProps,
          ...pick(buildCommonProps(), ['id', 'tag']),
        } satisfies Record<keyof BvnComponentProps['BCollapse'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Used to update the v-model',
          args: [
            {
              arg: 'value',
              type: 'boolean',
              description: 'Will be true if the collapse is visible',
            },
          ],
        },
        {
          event: 'hide',
          description: 'Emitted when collapse has started to close',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          ],
        },
        {
          event: 'hidden',
          description: 'Emitted when collapse has finished closing',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          ],
        },
        {
          event: 'hide-prevented',
          description: 'Emitted when the Collapse tried to close, but was prevented from doing so.',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          ],
        },
        {
          event: 'show',
          description: 'Emitted when collapse has started to open',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          ],
        },
        {
          event: 'shown',
          description: 'Emitted when collapse has finished opening',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          ],
        },
        {
          event: 'show-prevented',
          description: 'Emitted when the Collapse tried to open, but was prevented from doing so.',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          ],
        },
        {
          event: 'toggle',
          description: 'Emitted when collapse has started to toggle',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'The content shown and hidden by the collapse',
          scope: sharedSlots,
        },
        {
          name: 'footer',
          description:
            'Used to create custom toggles for your collapsible content. Placed directly below the content',
          scope: sharedSlots,
        },
        {
          name: 'header',
          description:
            'Used to create custom toggles for your collapsible content. Placed directly above the content',
          scope: sharedSlots,
        },
      ],
    },
  ],
}
