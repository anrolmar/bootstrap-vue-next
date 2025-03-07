import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BForm',
      styleSpec: {kind: StyleKind.Tag, value: 'form'},
      sourcePath: '/BForm/BForm.vue',
      props: {
        '': {
          ...pick(buildCommonProps(), ['floating', 'id', 'novalidate', 'validated']),
        } satisfies Record<keyof BvnComponentProps['BForm'], PropertyReference>,
      },
      emits: [
        {
          event: 'submit',
          description: 'Emitted when the form is submitted',
          args: [
            {
              arg: 'submit',
              type: 'Event',
              description: 'Native submit event',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Contet to place in the form',
        },
      ],
    },
    {
      component: 'BFormDatalist',
      styleSpec: {kind: StyleKind.Tag, value: 'datalist'},
      sourcePath: '/BForm/BFormDatalist.vue',
      props: {
        '': {
          ...pick(
            buildCommonProps({
              options: {
                type: 'readonly (unknown | Record<string, unknown>)[]',
                description:
                  'Array of items to render in the component. Note that BFormDatalist only supports Options, not OptionsGroups',
              },
            }),
            ['disabledField', 'id', 'options', 'textField', 'valueField']
          ),
        } satisfies Record<keyof BvnComponentProps['BFormDatalist'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the from datalist',
        },
        {
          name: 'first',
          description: "Slot to place options above options provided via the 'options' prop",
        },
        {
          name: 'option',
          description:
            'Use this slot to have finer control over the content render inside each data item',
          scope: [
            {
              prop: 'value',
              type: 'any (T)',
              description: 'The value of the option',
            },
            {
              prop: 'text',
              type: 'string',
              description: 'The text of the option',
            },
            {
              prop: 'disabled',
              type: 'boolean',
              description: 'Is the option disabled',
            },
          ],
        },
      ],
    },

    {
      component: 'BFormFloatingLabel',
      styleSpec: {kind: StyleKind.OverrideClass, value: 'floating-label'},
      sourcePath: '/BForm/BFormFloatingLabel.vue',
      props: {
        '': {
          label: {
            type: 'string',
            default: undefined,
            description: 'The text of the floating label',
          },
          labelFor: {
            type: 'string',
            default: undefined,
            description: 'The id of the input control that the floating label is for',
          },
        } satisfies Record<keyof BvnComponentProps['BFormFloatingLabel'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'The input control that contains the floating label',
        },
        {
          name: 'label',
          description: 'The content to display in the floating label',
        },
      ],
    },
    {
      component: 'BFormInvalidFeedback',
      styleSpec: {kind: StyleKind.OverrideClass, value: 'invalid-feedback, invalid-tooltip'},
      sourcePath: '/BForm/BFormInvalidFeedback.vue',
      props: {
        '': {
          forceShow: {
            type: 'boolean',
            default: false,
            description: "Shows the feedback text, regardless of the value of the 'state' prop",
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'The feedback text to display',
          },
          ...pick(buildCommonProps(), ['ariaLive', 'id', 'role', 'state', 'tag', 'tooltip']),
        } satisfies Record<keyof BvnComponentProps['BFormInvalidFeedback'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the form invalid feedback',
        },
      ],
    },
    {
      component: 'BFormRow',
      styleSpec: {kind: StyleKind.OverrideClass, value: 'row'},
      sourcePath: '/BForm/BFormRow.vue',
      props: {
        '': {
          ...pick(buildCommonProps(), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BFormRow'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the form row',
        },
      ],
    },
    {
      component: 'BFormText',
      sourcePath: '/BForm/BFormText.vue',
      props: {
        '': {
          inline: {
            type: 'boolean',
            default: false,
            description:
              'When set, renders the help text as an inline element, rather than a block element',
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'The text to display',
          },
          ...pick(buildCommonProps(), ['id', 'tag', 'textVariant']),
        } satisfies Record<keyof BvnComponentProps['BFormText'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          description: '',
          name: 'Content to place in the form text',
        },
      ],
    },
    {
      component: 'BFormValidFeedback',
      styleSpec: {kind: StyleKind.OverrideClass, value: 'valid-feedback, valid-tooltip'},
      sourcePath: '/BForm/BFormValidFeedback.vue',
      props: {
        '': {
          forceShow: {
            type: 'boolean',
            default: false,
            description: "Shows the feedback text, regardless of the value of the 'state' prop",
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'The feedback text to display',
          },
          ...pick(buildCommonProps(), ['ariaLive', 'id', 'role', 'state', 'tag', 'tooltip']),
        } satisfies Record<keyof BvnComponentProps['BFormValidFeedback'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the form invalid feedback',
        },
      ],
    },
  ],
}
