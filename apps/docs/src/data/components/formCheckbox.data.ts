import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'
import type {BvnComponentProps} from 'bootstrap-vue-next'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormCheckbox',
      sourcePath: '/BFormCheckbox/BFormCheckbox.vue',
      props: {
        '': {
          button: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the checkbox with the appearance of a button',
          },
          buttonGroup: {
            type: 'boolean',
            default: false,
            description:
              "When set, renders the checkbox as part of a button group (it doesn't enclose the checkbox and label with a div). It is not necessary to set this to true if this is part of a CheckboxGroup as it is handled internally",
          },
          buttonVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
            description: "Applies one of Bootstrap's theme colors when in `button` mode",
          },
          indeterminate: {
            type: 'boolean',
            default: false,
            description:
              'Set to true to show the checkbox as indeterminate, false to show its normal checked/unchecked.',
          },
          inline: {
            type: 'boolean',
            default: false,
            description:
              'When set, renders the checkbox as an inline element rather than as a 100% width block',
          },
          inputClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class to be applied to the body of the checkbox item',
          },
          modelValue: {
            type: 'CheckboxValue | readonly CheckboxValue[]',
            default: undefined,
            description:
              'The current value of the checkbox(es). Must be an array when there are multiple checkboxes bound to the same v-model. Looking for `value` - use `modelValue` instead.',
          },
          reverse: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the checkbox or switch on the opposite side',
          },
          switch: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the checkbox with the appearance of a switch',
          },
          uncheckedValue: {
            type: 'CheckboxValue',
            default: false,
            description:
              'Value returned when this checkbox is unchecked. Note not applicable when multiple checkboxes bound to the same v-model array',
          },
          value: {
            type: 'CheckboxValue',
            default: true,
            description: 'Value returned when this checkbox is checked',
          },
          ...pick(buildCommonProps(), [
            'ariaLabel',
            'ariaLabelledby',
            'autofocus',
            'disabled',
            'form',
            'id',
            'name',
            'plain',
            'required',
            'size',
            'state',
            'wrapperAttrs',
          ]),
        } satisfies Record<keyof BvnComponentProps['BFormCheckbox'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Emitted when the checked value is changed',
          args: [
            {
              arg: 'value',
              description:
                'Value of the checkbox. Value will be an array for grouped checkboxes or a single value for standalone checkboxes. Looking for the `input` or `change` event - use `update:model-value` instead.',
              type: 'CheckboxValue | readonly CheckboxValue[]',
            },
          ],
        },
        {
          event: 'update:indeterminate',
          description: 'Emitted when the indeterminaate state of the checkbox is changed',
          args: [
            {
              arg: 'value',
              description:
                'Value of the indeterminate state - true for indeterminate, false for determinstic state.',
              type: 'boolean',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the label of the form checkbox',
        },
      ],
    },
    {
      component: 'BFormCheckboxGroup',
      sourcePath: '/BFormCheckbox/BFormCheckboxGroup.vue',
      props: {
        '': {
          buttonVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
            description:
              'Specifies the Bootstrap contextual color theme variant to apply to the button style checkboxes',
          },
          buttons: {
            type: 'boolean',
            default: false,
            description: 'When set, renderes the checkboxes in this group with button styling',
          },
          modelValue: {
            type: 'readonly CheckboxValue[]',
            default: '() => []',
            description:
              'The current value of the checked checkboxes in the group. Must be an array when there are multiple checkboxes. . Looking for `value` - use `modelValue` instead.',
          },
          options: {
            type: 'readonly CheckboxOptionRaw[]',
            default: '() => []',
          },
          reverse: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the checkboxes and switches on the opposite side',
          },
          stacked: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the checkbox group in stacked mode',
          },
          switches: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the checkboxes in the group with switch styling',
          },
          validated: {
            type: 'boolean',
            default: false,
            description: 'When set, adds the Bootstrap class `was-validated` to the group wrapper',
          },
          ...pick(buildCommonProps(), [
            'ariaInvalid',
            'autofocus',
            'disabled',
            'disabledField',
            'form',
            'id',
            'name',
            'plain',
            'required',
            'size',
            'state',
            'textField',
            'valueField',
          ]),
        } satisfies Record<keyof BvnComponentProps['BFormCheckboxGroup'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:model-value` instead.',
          args: [
            {
              arg: 'value',
              type: 'CheckboxValue[]',
              description: 'Value of the checkboxes. Value will be an array.',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content (form checkboxes) to place in the form checkbox group',
        },
        {
          name: 'first',
          description:
            'Slot to place for checkboxes so that they appear before checks generated from options prop',
        },
        {
          name: 'option',
          description:
            'Use this slot to have finer control over the content render inside each checkbox button.',
          scope: [
            {
              prop: 'value',
              type: 'string | number | undefined',
              description: 'The value of the checkbox button',
            },
            {
              prop: 'disabled',
              type: 'boolean | undefined',
              description: 'Whether the checkbox button is disabled',
            },
            {
              prop: 'text',
              type: 'string | undefined',
              description: 'The text to display for the checkbox button',
            },
          ],
        },
      ],
    },
  ],
}
