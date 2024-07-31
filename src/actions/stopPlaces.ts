import { AppThunk, sentryCaptureException } from '../store/store';
import { StopPlace, UttuQuery } from '../api';
import { getStopPlacesQuery } from '../api/uttu/queries';
import { RECEIVE_STOP_PLACES } from './constants';

const receiveStopPlacesActionCreator = (stopPlaces: StopPlace[]) => ({
  type: RECEIVE_STOP_PLACES,
  stopPlaces,
});

export const getStopPlaces =
  (transportMode?: string): AppThunk =>
  async (dispatch, getState) => {
    const activeProvider = getState().userContext.activeProviderCode ?? '';
    const uttuApiUrl = getState().config.uttuApiUrl;
    const token = await getState().auth.getAccessToken();

    try {
      const data = await UttuQuery(
        uttuApiUrl,
        activeProvider,
        getStopPlacesQuery,
        { transportMode },
        token,
      );
      dispatch(receiveStopPlacesActionCreator(data.stopPlaces));
    } catch (e) {
      sentryCaptureException(e);
    }
  };
