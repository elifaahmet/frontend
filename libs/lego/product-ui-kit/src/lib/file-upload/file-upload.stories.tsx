/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from '@tend/lego/product-ui-kit';
import { FileUpload, FileUploadProps } from './file-upload';

export default {
  component: FileUpload,
  title: 'FileUpload',
} as Meta;

const Template: Story<FileUploadProps> = (args) => (
  <Layout>
    <FileUpload {...args} />
  </Layout>
);

export const genericUpload = Template.bind({});
genericUpload.args = {
  onFileSelect: () => null,
  id: 'file-upload',
  caption: 'Scan Utility Bill',
  onUpload: (e) => Promise.resolve({ success: true }),
};
