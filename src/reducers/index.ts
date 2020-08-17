import notification, { NotificationState } from 'reducers/notification';
import user, { UserState } from './user';
import organisations, { OrganisationState } from './organisations';
import providers, { ProvidersState } from './providers';
import exports, { ExportsState } from './exports';
import networks, { NetworksState } from './networks';
import flexibleLines, { FlexibleLinesState } from './flexibleLines';
import flexibleStopPlaces, {
  FlexibleStopPlacesState,
} from './flexibleStopPlaces';
import editor, { EditorState } from './editor';
import { AppIntlState } from 'i18n';
import lines, { LinesState } from './lines';

export type GlobalState = {
  notification: NotificationState;
  user: UserState;
  organisations: OrganisationState;
  providers: ProvidersState;
  exports: ExportsState;
  networks: NetworksState;
  lines: LinesState;
  flexibleLines: FlexibleLinesState;
  flexibleStopPlaces: FlexibleStopPlacesState;
  editor: EditorState;
  intl: AppIntlState;
};

const reducers = {
  notification,
  user,
  organisations,
  providers,
  exports,
  networks,
  lines,
  flexibleLines,
  flexibleStopPlaces,
  editor,
};

export default reducers;
