import { defineMessages } from 'react-intl';
import { MessagesKey } from 'i18n/translations/translationKeys';

export enum UttuCode {
  CONSTRAINT_VIOLATION = 'CONSTRAINT_VIOLATION',
  ENTITY_IS_REFERENCED = 'ENTITY_IS_REFERENCED',
  FROM_DATE_AFTER_TO_DATE = 'FROM_DATE_AFTER_TO_DATE',
  MINIMUM_POINTS_IN_SEQUENCE = 'MINIMUM_POINTS_IN_SEQUENCE',
  MISSING_OPERATOR = 'MISSING_OPERATOR',
  NO_VALID_LINES_IN_DATA_SPACE = 'NO_VALID_LINES_IN_DATA_SPACE',
  ORGANISATION_NOT_VALID_OPERATOR = 'ORGANISATION_NOT_VALID_OPERATOR',
  NO_EMPTY_NOTICES = 'NO_EMPTY_NOTICES',
  UNKNOWN = 'UNKNOWN',
}

export enum UttuSubCode {
  FLEXIBLE_STOP_PLACE_UNIQUE_NAME = 'FLEXIBLE_STOP_PLACE_UNIQUE_NAME',
  LINE_UNIQUE_NAME = 'LINE_UNIQUE_NAME',
  PROVIDER_UNIQUE_CODE = 'PROVIDER_UNIQUE_CODE',
  JOURNEY_PATTERN_UNIQUE_NAME = 'JOURNEY_PATTERN_UNIQUE_NAME',
  NETWORK_UNIQUE_NAME = 'NETWORK_UNIQUE_NAME',
  SERVICE_JOURNEY_UNIQUE_NAME = 'SERVICE_JOURNEY_UNIQUE_NAME',
  CODESPACE_UNIQUE_XMLNS = 'CODESPACE_UNIQUE_XMLNS',
}

export enum CombinedUttuCode {
  CONSTRAINT_VIOLATION_LINE_UNIQUE_NAME = 'CONSTRAINT_VIOLATION_LINE_UNIQUE_NAME',
  CONSTRAINT_VIOLATION_SERVICE_JOURNEY_UNIQUE_NAME = 'CONSTRAINT_VIOLATION_SERVICE_JOURNEY_UNIQUE_NAME',
  CONSTRAINT_VIOLATION_JOURNEY_PATTERN_UNIQUE_NAME = 'CONSTRAINT_VIOLATION_JOURNEY_PATTERN_UNIQUE_NAME',
}

const uttuMessages: {
  [key in UttuCode | CombinedUttuCode]: keyof MessagesKey;
} = {
  [UttuCode.CONSTRAINT_VIOLATION]: 'uttuErrorCONSTRAINT_VIOLATION',
  [UttuCode.UNKNOWN]: 'uttuErrorUNKNOWN',
  [UttuCode.ORGANISATION_NOT_VALID_OPERATOR]:
    'uttuErrorORGANISATION_NOT_VALID_OPERATOR',
  [UttuCode.MISSING_OPERATOR]: 'uttuErrorMISSING_OPERATOR',
  [UttuCode.FROM_DATE_AFTER_TO_DATE]: 'uttuErrorFROM_DATE_AFTER_TO_DATE',
  [UttuCode.ENTITY_IS_REFERENCED]: 'uttuErrorENTITY_IS_REFERENCED',
  [UttuCode.MINIMUM_POINTS_IN_SEQUENCE]: 'uttuErrorMINIMUM_POINTS_IN_SEQUENCE',
  [UttuCode.NO_VALID_LINES_IN_DATA_SPACE]:
    'uttuErrorNO_VALID_LINES_IN_DATA_SPACE',
  [UttuCode.NO_EMPTY_NOTICES]: 'uttuErrorNO_EMPTY_NOTICES',
  [CombinedUttuCode.CONSTRAINT_VIOLATION_LINE_UNIQUE_NAME]:
    'uttuErrorCONSTRAINT_VIOLATION_LINE_UNIQUE_NAME',
  [CombinedUttuCode.CONSTRAINT_VIOLATION_SERVICE_JOURNEY_UNIQUE_NAME]:
    'uttuErrorCONSTRAINT_VIOLATION_SERVICE_JOURNEY_UNIQUE_NAME',
  [CombinedUttuCode.CONSTRAINT_VIOLATION_JOURNEY_PATTERN_UNIQUE_NAME]:
    'uttuErrorCONSTRAINT_VIOLATION_JOURNEY_PATTERN_UNIQUE_NAME',
};

export const isOfUttuMessage = (
  key: string
): key is UttuCode | CombinedUttuCode =>
  key in UttuCode || key in CombinedUttuCode;

export default defineMessages(uttuMessages);
