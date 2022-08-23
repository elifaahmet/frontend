/**@format */

export interface PostFundingInfoProps {
  captureEmailInvites: (emails: string[]) => void;
  country: 'us' | 'mx';
}

export interface PostFundingInfoSlideProps extends PostFundingInfoProps {
  onClickAdvance?: () => void;
}
