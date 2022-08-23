/**@format */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ESign, ESignProps } from './e-sign';

export default {
  component: ESign,
  title: 'Flows/Views/Onboarding/nbkc/ESign',
} as Meta;

const Template: Story<ESignProps> = (args) => <ESign {...args} />;

const copyMarkup = `
<h2>LORUM IPSUM, this copy block is generated through API.</h2>

<p>e-Sign Disclosure</p>

<p>Disclosures can be provided in electronic form for the deposit account(s) you have selected to be opened online. Before obtaining products or services electronically, you must read and indicate your acceptance of the terms outlined below. If you do not consent, you will not be able to proceed with the online account opening process.</p>

<ol>
  <li>In this consent, “we”, “us”, and “our” are used to refer to nbkc bank. All of the disclosures being provided to you may, at our discretion, be in electronic form, and you will be able to review them online in addition to downloading and/or printing them. Your consent applies to the disclosures and notices applicable to the deposit accounts opened during this online session and any subsequent disclosures and notices we send to you regarding any accounts with us.</li>

  <li>Disclosures provided in electronic form will not be distributed in paper form. After consenting, if you wish to obtain a paper copy of the disclosure(s), you can do so free of charge by writing us at the address listed below.</li>

  <li>You have the right to withdraw your consent at any time, at no cost t</li>

  <li>writing us at the address below.</li>

  <li>
    The following lists the hardware and software requirements necessary for access to and retention of the information being provided to you in electronic form. By consenting to receive the disclosures online, you will also be verifying you meet the necessary hardware and software requirements to view the disclosures.

    A personal computer or other device capable of accessing the internet<br/>
    A web browser which support 128-bit SSL encrypted communications<br/>
    Software that permits you to receive and access Portable Document Format (PDF) files, such as Adobe Acrobat Reader version 6.0 or higher (available for downloading at http://get.adobe.com/reader/)
  </li>
</ol>

<p>
  NBKC Bank Contact Information:<br/>
  NBKC Bank<br/>
  8320 Ward Parkway Kansas City, MO 64114
</p>
`;

export const baseView = Template.bind({});
baseView.args = {
  copyMarkup,
};

export const alternateViewWithSmallCopy = Template.bind({});
alternateViewWithSmallCopy.args = {
  copyMarkup: `
    <h2>LORUM IPSUM, this copy block is generated through API.</h2>

    <p>e-Sign Disclosure</p>
  `,
};
