/**@format */
import { VerifyStatusState } from './verify-status.types';

export function isContinueDisabled(state: VerifyStatusState): boolean {
  const {
    applicantHoldsGovernmentPosition,
    relativeHoldsGovernmentPosition,
    applicant,
    relative,
  } = state;
  if (applicantHoldsGovernmentPosition === null) return true;

  const applicantMinimumInfoFilled =
    !!applicant.position && !!applicant.association;
  if (applicantHoldsGovernmentPosition === false) return false;
  if (applicantHoldsGovernmentPosition && !relativeHoldsGovernmentPosition) {
    return !applicantMinimumInfoFilled;
  } else {
    if (!relative) return true;
    const {
      firstName,
      paternalLastName,
      position,
      phone,
      address,
      participationPercent,
    } = relative;
    const relativeMinimumInfoFilled =
      !!firstName &&
      !!paternalLastName &&
      !!position &&
      !!phone &&
      !!address &&
      !!participationPercent;
    return !applicantMinimumInfoFilled || !relativeMinimumInfoFilled;
  }
}
