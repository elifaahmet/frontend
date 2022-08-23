/**@format */

import { Meta, Story } from '@storybook/react';
import { MxScanIdPageView } from './scan-id-view';

export default {
  component: MxScanIdPageView,
  title: 'Flows/Views/Onboarding/Invex/Step 9 - Scan Id',
} as Meta;

const Template: Story = () => <MxScanIdPageView />;

export const baseView = Template.bind({});
