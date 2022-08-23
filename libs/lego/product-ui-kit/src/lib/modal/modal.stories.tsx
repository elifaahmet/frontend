/** @format */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';
import Modal, { ModalProps } from './modal';
import { ButtonProduct, CONSTANTS } from '@tend/shared/design/ui-kit';

export default {
  component: Modal,
  title: 'Modal',
} as Meta;

const ShowButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const StyledP = styled.p`
  color: ${(props) => props.theme.colorScheme.primary.text};
  padding: 0 16px;
`;

const LoremIpsum = () => (
  <>
    <h2>What is Lorem Ipsum?</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>
    <h2>Where does it come from?</h2>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32. The standard chunk of Lorem
      Ipsum used since the 1500s is reproduced below for those interested.
      Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
      Cicero are also reproduced in their exact original form, accompanied by
      English versions from the 1914 translation by H. Rackham.
    </p>
    <h2>Why do we use it?</h2>
    <p>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </p>
    <h2>Where can I get some?</h2>
    <p>
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable. If you are
      going to use a passage of Lorem Ipsum, you need to be sure there isn't
      anything embarrassing hidden in the middle of text. All the Lorem Ipsum
      generators on the Internet tend to repeat predefined chunks as necessary,
      making this the first true generator on the Internet. It uses a dictionary
      of over 200 Latin words, combined with a handful of model sentence
      structures, to generate Lorem Ipsum which looks reasonable. The generated
      Lorem Ipsum is therefore always free from repetition, injected humour, or
      non-characteristic words etc.
    </p>
  </>
);

const Template: Story = (args: ModalProps) => {
  const [show, setShow] = useState(args.show);
  const props = {
    show,
    onClose: () => setShow(false),
    actions: undefined,
    title: null,
  };
  if (args.actions) props.actions = args.actions;
  if (args.title) props.title = args.title;
  return (
    <div style={{ width: '100%' }}>
      <ShowButtonWrapper>
        <ButtonProduct onClick={() => setShow(true)}>Show Modal</ButtonProduct>
      </ShowButtonWrapper>
      <StyledP>
        Clicking the above button toggles the "show" property from outside the
        Modal component, i.e. the container passes it as a prop.
      </StyledP>
      <Modal {...props}>{args.children}</Modal>
    </div>
  );
};

const { SECONDARY } = CONSTANTS;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFunction = () => {};

export const overflowingContent = Template.bind({});
overflowingContent.args = {
  show: true,
  children: <LoremIpsum />,
};

export const shortContent = Template.bind({});
shortContent.args = {
  show: true,
  children: (
    <div>
      <h3 style={{ margin: 0, paddingBlockEnd: 16 }}>
        Important Information About Procedures for Opening a New Account
      </h3>
      <p>
        To help the government fight the funding of terrorism and money
        laundering activities, Federal law requires all financial institutions
        to obtain, verify, and record information that identifies each person
        who opens an account.
      </p>
      <p>
        What this means for you: When you open an account, we will ask for your
        name, address, date of birth, and other information that will allow us
        to identify you. We may also ask to see your driver's license or other
        identifying documents.
      </p>
    </div>
  ),
};

export const shortContentWithTitle = Template.bind({});
shortContentWithTitle.args = {
  show: true,
  title: '1 USD = 19.7180 MXN',
  children: (
    <div>
      <h3 style={{ margin: 0, paddingBlockEnd: 16 }}>
        Important Information About Procedures for Opening a New Account
      </h3>
      <p>
        To help the government fight the funding of terrorism and money
        laundering activities, Federal law requires all financial institutions
        to obtain, verify, and record information that identifies each person
        who opens an account.
      </p>
      <p>
        What this means for you: When you open an account, we will ask for your
        name, address, date of birth, and other information that will allow us
        to identify you. We may also ask to see your driver's license or other
        identifying documents.
      </p>
    </div>
  ),
};

export const withSimpleActions = Template.bind({});
withSimpleActions.args = {
  show: true,
  children: <h3 style={{ margin: 0, paddingBlockEnd: 16 }}>Transfer Money</h3>,
  actions: [
    {
      type: 'cancel',
      buttonProps: { children: 'cancel', variant: SECONDARY },
    },
    {
      type: 'confirm',
      buttonProps: { children: 'confirm' },
    },
  ],
};

export const withManyActions = Template.bind({});
withManyActions.args = {
  show: true,
  children: <h3 style={{ margin: 0, paddingBlockEnd: 16 }}>Mine Crypto</h3>,
  actions: [
    {
      type: 'cancel',
      buttonProps: { children: 'cancel', variant: SECONDARY },
    },
    {
      type: 'confirm',
      buttonProps: { children: 'confirm' },
    },
    {
      type: 'custom',
      buttonProps: { children: 'what?', onClick: emptyFunction },
    },
    {
      type: 'custom',
      buttonProps: {
        children: 'throw hands in the air',
        onClick: emptyFunction,
      },
    },
    {
      type: 'custom',
      buttonProps: { children: 'roll eyes', onClick: emptyFunction },
    },
  ],
};

export const withComplexActions = Template.bind({});
withComplexActions.args = {
  show: true,
  children: <h3 style={{ margin: 0, paddingBlockEnd: 16 }}>Transfer Money</h3>,
  actions: [
    {
      type: 'cancel',
      buttonProps: { children: 'cancel', variant: SECONDARY },
    },
    {
      type: 'custom',
      buttonProps: {
        children: 'two gang',
        variant: SECONDARY,
        twoGang: {
          twoGangLabels: ['transfer $1,000', 'transfer $5,000'],
          twoGangOnClick: [emptyFunction, emptyFunction],
        },
      },
    },
  ],
};
