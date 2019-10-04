import { UttuQuery } from '../graphql';
import {
  getFlexibleLineByIdQuery,
  getFlexibleLinesQuery
} from '../graphql/uttu/queries';
import { FlexibleLine } from '../model';
import {
  showErrorNotification,
  showSuccessNotification
} from '../components/Notification/actions';
import {
  deleteFlexibleLine,
  flexibleLineMutation
} from '../graphql/uttu/mutations';
import { getInternationalizedUttuError } from '../helpers/uttu';
import { getIntl } from '../i18n';
import messages from './flexibleLines.messages';

export const REQUEST_FLEXIBLE_LINES = 'REQUEST_FLEXIBLE_LINES';
export const RECEIVE_FLEXIBLE_LINES = 'RECEIVE_FLEXIBLE_LINES';

export const REQUEST_FLEXIBLE_LINE = 'REQUEST_FLEXIBLE_LINE';
export const RECEIVE_FLEXIBLE_LINE = 'RECEIVE_FLEXIBLE_LINE';

const requestFlexibleLinesActionCreator = () => ({
  type: REQUEST_FLEXIBLE_LINES
});

const receiveFlexibleLinesActionCreator = lines => ({
  type: RECEIVE_FLEXIBLE_LINES,
  lines
});

const requestFlexibleLineActionCreator = () => ({
  type: REQUEST_FLEXIBLE_LINE
});

const receiveFlexibleLineActionCreator = line => ({
  type: RECEIVE_FLEXIBLE_LINE,
  line
});

export const loadFlexibleLines = () => async (dispatch, getState) => {
  dispatch(requestFlexibleLinesActionCreator());

  try {
    const data = await UttuQuery(getState().providers.active, getFlexibleLinesQuery, {});
    const flexibleLines = data.flexibleLines.map(fl => new FlexibleLine(fl));
    dispatch(receiveFlexibleLinesActionCreator(flexibleLines));
  } catch (e) {
    const intl = getIntl(getState());
    dispatch(
      showErrorNotification(
        intl.formatMessage(messages.loadLinesErrorHeader),
        intl.formatMessage(messages.loadLinesErrorMessage, {
          details: getInternationalizedUttuError(intl, e)
        })
      )
    );
    throw e;
  }
};

export const loadFlexibleLineById = id => async (dispatch, getState) => {
  dispatch(requestFlexibleLineActionCreator());

  try {
    const data = await UttuQuery(getState().providers.active, getFlexibleLineByIdQuery, { id });
    dispatch(receiveFlexibleLineActionCreator(new FlexibleLine(data.flexibleLine)));
  } catch (e) {
    const intl = getIntl(getState());
    dispatch(
      showErrorNotification(
        intl.formatMessage(messages.loadLineByIdErrorHeader),
        intl.formatMessage(messages.loadLineByIdErrorMessage, {
          details: getInternationalizedUttuError(intl, e)
        })
      )
    );
    throw e;
  }
};

export const saveFlexibleLine = flexibleLine => async (dispatch, getState) => {
  const activeProvider = getState().providers.active;
  const intl = getIntl(getState());
  try {
    await UttuQuery(activeProvider, flexibleLineMutation, {
      input: flexibleLine.toPayload()
    });
    dispatch(showSuccessNotification(
      intl.formatMessage(messages.saveLineSuccessHeader),
      intl.formatMessage(messages.saveLineSuccessMessage)
    ));
  } catch (e) {
    dispatch(
      showErrorNotification(
        intl.formatMessage(messages.saveLineErrorHeader),
        intl.formatMessage(messages.saveLineErrorMessage, {
          details: getInternationalizedUttuError(intl, e)
        })
      )
    );
    throw e;
  }
};

export const deleteFlexibleLineById = id => async (dispatch, getState) => {
  const activeProvider = getState().providers.active;
  const intl = getIntl(getState());

  try {
    await UttuQuery(activeProvider, deleteFlexibleLine, { id });
    dispatch(
      showSuccessNotification(
        intl.formatMessage(messages.deleteLineSuccessHeader),
        intl.formatMessage(messages.deleteLineSuccessMessage)
      )
    );
  } catch (e) {
    dispatch(
      showErrorNotification(
        intl.formatMessage(messages.deleteLineErrorHeader),
        intl.formatMessage(messages.deleteLineErrorMessage, {
          details: getInternationalizedUttuError(intl, e)
        })
      )
    );
    throw e;
  }
};
