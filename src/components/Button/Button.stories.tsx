import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'EonUI 的基礎按鈕組件，支援多種樣式變體和大小。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: '按鈕的視覺樣式變體',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '按鈕的大小',
    },
    loading: {
      control: { type: 'boolean' },
      description: '是否顯示載入狀態',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用按鈕',
    },
    children: {
      control: { type: 'text' },
      description: '按鈕內容',
    },
  },
  includeStories: ['Docs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {
    variant: 'primary',
    children: '按鈕',
    size: 'sm',
  },
};
