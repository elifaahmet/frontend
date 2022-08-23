/**@format */

import React, { ChangeEventHandler, useState, useEffect } from 'react';
import { Input, InputProps, SVGIcon } from '@tend/shared/design/ui-kit';
import { EmailInputWrapper } from './input.styled';

const EmailInviteInput: React.FC<InputProps> = (props) => {
  const [numEmailInvites, setNumEmailInvites] = useState<number>(1);
  const [emails, setEmails] = useState<string[]>(['']);

  useEffect(() => {
    if (emails.length < numEmailInvites) {
      setEmails((prevState) => [...prevState, '']);
    }
  }, [numEmailInvites, emails.length]);

  useEffect(() => {
    props.captureEmailInvites(emails);
  }, [emails, emails.length, props, props.captureEmailInvites]);

  const changeHandler: (number) => ChangeEventHandler<HTMLInputElement> = (
    index
  ) => (e) => {
    const { value } = e.target;
    setEmails((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = value;
      return updatedState;
    });
  };
  return (
    <EmailInputWrapper>
      {emails.map((v, i) => (
        <Input
          type="email"
          label="email"
          name={`email-invite-${i + 1}`}
          key={`email-invite-${i + 1}`}
          onChange={changeHandler(i)}
        />
      ))}

      <button onClick={() => setNumEmailInvites(numEmailInvites + 1)}>
        <span>Invite More Friends</span>
        <SVGIcon iconName="tend-plus" boxSize={20} />
      </button>
    </EmailInputWrapper>
  );
};

export default EmailInviteInput;
