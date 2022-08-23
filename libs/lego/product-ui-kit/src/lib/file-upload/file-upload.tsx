/**@format */

import React, { useState, InputHTMLAttributes, ChangeEvent } from 'react';
import { SVGIcon, CheckIcon } from '@tend/shared/design/ui-kit';
import {
  FileUploadInput,
  FileUploadLabelButton,
  FileUploadWrapper,
} from './file-upload.styled';

/**@todo: enhancements for error handling and ui */

export interface FileUploadProps {
  onFileSelect: () => void;
  id: string;
  caption?: string;
  htmlAccept?: string[] | string;
  forceReset?: boolean;
  onUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<{ success: boolean }>;
}

export const FileUpload: React.FC<FileUploadProps> = (props) => {
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false);

  const accept =
    typeof props.htmlAccept === 'string'
      ? [props.htmlAccept]
      : props.htmlAccept;
  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    type: 'file',
    id: props.id,
    accept: accept ? accept.join(', ') : 'image/png, image/jpeg',
    onChange: (e) =>
      props
        .onUpload(e)
        .then(({ success }) => setIsUploadSuccessful(success))
        .catch(() => setIsUploadSuccessful(false)),
  };

  return (
    <FileUploadWrapper>
      <FileUploadInput {...inputProps} />
      <FileUploadLabelButton htmlFor={props.id}>
        {isUploadSuccessful && !props.forceReset ? (
          <CheckIcon boxSize={45} />
        ) : (
          <SVGIcon iconName="tend-plus" boxSize={20} />
        )}
      </FileUploadLabelButton>
      {props.caption && <p>{props.caption}</p>}
    </FileUploadWrapper>
  );
};

export default FileUpload;
