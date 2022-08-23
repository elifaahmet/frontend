import {gql} from '@apollo/client';

export const me = gql`
  query me {
    me {
        accountLevel
        accountStatus
        applicationProgress
        bank {
            shortName
        }
        bankId
        countryId
        customerId
        dwollaTncAccepted
        currencyCloudTncAccepted
        email
        id
        memberType
        phone
        tendId
        username
    }
  }
`;