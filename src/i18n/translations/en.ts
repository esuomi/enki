import { MessagesKey } from 'i18n/translations/translationKeys';

export const messages: MessagesKey = {
  exportsLoadExportByIdErrorHeader: 'Load export',
  exportsLoadExportByIdErrorMessage:
    'An error occurred while loading export: {details}',
  exportsLoadExportsErrorHeader: 'Load exports',
  exportsLoadExportsErrorMessage:
    'An error occurred while loading exports: {details}',
  exportsSaveExportErrorHeader: 'Save export',
  exportsSaveExportErrorMessage:
    'An error occurred while saving export: {details}',
  exportsSaveExportSuccessHeader: 'Saving export',
  exportsSaveExportSuccessMessage: 'Export was saved.',
  deleteLineErrorHeader: 'Delete line',
  deleteLineErrorMessage: 'An error occured while deleting the line: {details}',
  deleteLineSuccessHeader: 'Delete line',
  deleteLineSuccessMessage: 'The line was deleted',
  loadLineByIdErrorHeader: 'Load line',
  loadLineByIdErrorMessage:
    'An error occurred while loading the line: {details}',
  loadLinesErrorHeader: 'Load lines',
  loadLinesErrorMessage: 'An error occurred while loading lines: {details}',
  saveLineErrorHeader: 'Save line',
  saveLineErrorMessage: 'An error occurred while saving the line: {details}',
  saveLineSuccessHeader: 'Save line',
  saveLineSuccessMessage: 'The line was successfully saved!',
  modalSaveLineSuccessHeader: 'The line was created!',
  modalSaveLineSuccessMessage:
    'was successfully created and saved. You can view or make changes to it in the overview for flexible lines. Remember to do an export including the line to make it visible in travel searches.',
  flexibleLinesSaveLineSuccessButton: 'Ok',
  flexibleStopPlacesDeleteStopPlaceErrorHeader: 'Delete stop place',
  flexibleStopPlacesDeleteStopPlaceErrorMessage:
    'An error occurred while deleting stop place: {details}',
  flexibleStopPlacesDeleteStopPlaceSuccessHeader: 'Delete stop place',
  flexibleStopPlacesDeleteStopPlaceSuccessMessage: 'Stop place was deleted',
  flexibleStopPlacesLoadStopPlaceErrorHeader: 'Load stop place',
  flexibleStopPlacesLoadStopPlaceErrorMessage:
    'An error occurred while loading stop place: {details}',
  flexibleStopPlacesLoadStopPlacesErrorHeader: 'Load stop places',
  flexibleStopPlacesLoadStopPlacesErrorMessage:
    'An error occurred while loading stop places: {details}',
  flexibleStopPlacesSaveStopPlaceErrorHeader: 'Save stop place',
  flexibleStopPlacesSaveStopPlaceErrorMessage:
    'An error occurred while saving stop place: {details}',
  flexibleStopPlacesSaveStopPlaceSuccessHeader: 'Save stop place',
  flexibleStopPlacesSaveStopPlaceSuccessMessage: 'Stop place was saved.',
  navBarIntroduction: 'Introduction',
  navBarExportsMenuItemLabel: 'Exports',
  navBarLinesMenuItemLabel: 'Lines',
  navBarFlexibleOffersSubMenuHeaderLabel: 'Flexible offers',
  navBarFlexibleLinesMenuItemLabel: 'Flexible lines',
  navBarNetworksMenuItemLabel: 'Networks',
  navBarRootLinkLogoAltText: 'Logo',
  navBarRootLinkText: '',
  navBarStopPlacesMenuItemLabel: 'Flexible stop places',
  userMenuLogoutLinkText: 'Log out',
  userMenuMenuItemTextEnglish: 'English',
  userMenuMenuItemTextLanguage: 'Language',
  userMenuMenuItemTextNorwegian: 'Norsk',
  languagePickerAriaLabel: 'Choose language',
  navBarDataProvider: 'Choose data provider',
  redirectTitle: 'Unsaved changes!',
  redirectMessage:
    'You have unsaved changes which will be lost if you navigate away. Do you want to proceed?',
  redirectYes: 'Yes, leave this page',
  redirectNo: 'No, stay on this page',
  appTitle: 'Nplan',
  exportsCreateExportButtonLabel: 'Create export',
  exportCreatorDryRunFormLabel: 'Dry run',
  exportCreatorDryRunFormLabelTooltip:
    'Will not export the service to travel search, but creates a NeTEx-file to look at',
  exportCreatorFromDateFormLabel: 'From date *',
  exportCreatorHeader: 'Create export',
  exportCreatorDescription:
    'Export services so that they are available in travel search',
  exportCreatorNameFormLabel: 'Name *',
  exportCreatorSaveButtonLabelText: 'Create export',
  exportCreatorSavingOverlayLoaderText: 'Saving export...',
  exportCreatorToDateFormLabel: 'To date *',
  exportCreatorDateForExport: 'Date for export',
  exportCreatorDateForExportDesc:
    'Export services with availability within the selected time span',
  exportCreatorLinesForExportHeader: 'Choose lines to export',
  exportCreatorLinesForExportTableLineHeader: 'Line',
  exportCreatorLinesForExportTableStatusHeader: 'Status',
  exportCreatorLinesForExportTableAvailabilityHeader: 'Availability',
  defaultOption: 'Select an option',
  validateFormErrorExportFromDateIsAfterToDate:
    'To-date must be after from-date',
  validateFormErrorExportNameIsEmpty: 'Name must be provided.',
  exportsDownloadLinkText: 'Download',
  exportsDryRunNo: 'No',
  exportsDryRunYes: 'Yes',
  exportsHeader: 'Exports',
  exportsLoadingExportsText: 'Loading exports...',
  exportsNoExportsFoundText: 'No exports found.',
  exportsTableHeaderLabelDownload: 'Download',
  exportsTableHeaderLabelDryrun: 'Dry run',
  exportsTableHeaderLabelFromDate: 'From date',
  exportsTableHeaderLabelName: 'Name',
  exportsTableHeaderLabelStatus: 'Status',
  exportsTableHeaderLabelCreated: 'Time',
  exportsTableHeaderLabelToDate: 'To date',
  viewerDownloadLabel: 'Download exported files',
  viewerDownloadLinkText: 'Download',
  viewerDryRunLabel: 'Dry run',
  viewerDryRunNo: 'No',
  viewerDryRunYes: 'Yes',
  NO_VALID_FLEXIBLE_LINES_IN_DATA_SPACE:
    'No valid flexible lines in data space',
  failed: 'Failed',
  in_progress: 'In progress',
  success: 'Success',
  viewerFromDateLabel: 'From date',
  viewerHeader: 'Export',
  viewerLoadingText: 'Loading export...',
  viewerMessagesLabel: 'Messages',
  viewerNameLabel: 'Name',
  viewerStatusLabel: 'Status',
  viewerToDateLabel: 'To date',
  uttuErrorCONSTRAINT_VIOLATION: 'Ikke unikt navn',
  uttuErrorCONSTRAINT_VIOLATION_SERVICE_JOURNEY_UNIQUE_NAME:
    'Service journey must have a unique name',
  uttuErrorCONSTRAINT_VIOLATION_LINE_UNIQUE_NAME:
    'Line must have a unique name',
  uttuErrorCONSTRAINT_VIOLATION_JOURNEY_PATTERN_UNIQUE_NAME:
    'The journey pattern must have a unique name',
  uttuErrorENTITY_IS_REFERENCED:
    'Entity cannot be deleted because {noOfLines, number} other {noOfLines, plural, one {entity has a reference} other {entities have references}} to it.',
  uttuErrorFROM_DATE_AFTER_TO_DATE: 'From date cannot be after to date',
  uttuErrorMINIMUM_POINTS_IN_SEQUENCE:
    'Journey pattern must have minimum 2 sequential stop points.',
  uttuErrorMISSING_OPERATOR: 'Service journey or line must have an operator',
  uttuErrorORGANISATION_NOT_VALID_OPERATOR: 'Invalid operator',
  uttuErrorNO_VALID_LINES_IN_DATA_SPACE:
    'Found no valid lines in data space, while exporting',
  uttuErrorNO_EMPTY_NOTICES: 'Empty notices are not allowed.',
  uttuErrorFLEXIBLE_LINE_REQUIRES_BOOKING:
    'Flexible lines require booking information on line, journey pattern or stop point',
  uttuErrorUNKNOWN: 'Unknown error',
  linesCreateFlexibleLineIconButtonLabel: 'Create flexible line',
  linesCreateLineIconButtonLabel: 'Create line',
  linesFlexibleDataCell: 'Flexible',
  bookingInfoHeader: 'Booking information',
  bookingInfoHelpText: `Booking information can be added to a flexible line, to a
  stop point in a journey pattern, or to a service journey.
  When you define booking information at several levels, stop points
  take precendence over service journeys, which in turn takes precedence
  over the flexible line.`,
  bookingInfoAddButtonText: 'Add',
  bookingInfoRemoveButtonText: 'Remove',
  bookingInfoShowEditButtonText: 'Show / Edit',
  bookingInfoSaveButtonText: 'Save',
  bookingInfoCancelButtonText: 'Cancel',
  bookingInfoText: 'Information about how the service can be booked.',
  bookingLabel:
    'To make the booking process easier, we recommend filling out Phone, URL and Booking note.',
  bookingAccessAuthorisedPublic: 'Authorised public',
  bookingAccessPublic: 'Public',
  bookingAccessStaff: 'Staff',
  bookingAccessSelectionTitle: 'Booking access',
  bookingLimitTypeNoneRadioButtonLabel: 'None',
  bookingLimitFieldsBookingLimitTypePeriodRadioButtonLabel:
    'The minimum period prior to the departure the booking has to be placed',
  bookingLimitFieldsBookingLimitTypeTimeRadioButtonLabel:
    'Latest possible booking time',
  bookingLimitFieldsHeaderLabel: 'Booking limit',
  bookingMethodCallDriver: 'Call driver',
  bookingMethodCallOffice: 'Call office',
  bookingMethodOnline: 'Online',
  bookingMethodPhoneAtStop: 'Phone at stop',
  bookingMethodText: 'Text',
  bookingMethodSelectionTitle: 'Booking method',
  bookingNoteFieldTitle: 'Booking note',
  bookingNoteRequiredFeedback: 'Booking note is required.',
  bookingNoteTooltip:
    'Information that can be presented along with the travel detail.',
  purchaseWhenAdvanceAndDayOfTravel: 'Advance and day of travel',
  purchaseWhenDayOfTravelOnly: 'Day of travel only',
  purchaseWhenUntilPreviousDay: 'Until previous day',
  contactFieldsContactPersonTitle: 'Contact person',
  contactFieldsEmailTitle: 'E-mail',
  contactFieldsFurtherDetailsTitle: 'Further details',
  contactFieldsPhoneTitle: 'Phone',
  contactFieldsUrlTitle: 'URL',
  urlOrPhoneMustBeFilled: 'At least URL or Phone must be filled',
  purchaseMomentAfterBoarding: 'After boarding',
  purchaseMomentBeforeBoarding: 'Before boarding',
  purchaseMomentOnCheckOut: 'On checkout',
  purchaseMomentOnReservation: 'On reservation',
  paymentSelectionTitle: 'Payment',
  bookingTimeSelectionTitle: 'Booking time',
  editorBookingTabLabel: 'Booking',
  bookingValidationError:
    'Booking information must have booking time or minimum booking period',
  editorCreateLineHeader: 'Create line',
  editorDeleteButtonText: 'Delete',
  editorCopyButtonText: 'Copy',
  editorDeleteConfirmationDialogCancelButtonText: 'No',
  editorDeleteConfirmationDialogConfirmButtonText: 'Yes',
  editorDeleteLineConfirmationDialogMessage:
    'Are you sure you want to delete this line?',
  editorDeleteLineConfirmationDialogTitle: 'Delete line',
  editorDeleteLineLoadingText: 'Deleting line...',
  editorDeleteStopPlaceConfirmationDialogMessage:
    'Are you sure you want to delete this flexible stop place?',
  editorDeleteStopPlaceConfirmationDialogTitle: 'Delete flexible stop place',
  editorDeleteNetworkConfirmationDialogMessage:
    'Are you sure you want to delete this network?',
  editorDeleteNetworkConfirmationDialogTitle: 'Delete network',
  editorEditLineHeader: 'Edit line',
  generalDescriptionFormGroupTitle: 'Description',
  generalNameFormGroupTitle: 'Name *',
  generalNetworkFormGroupTitle: 'Network *',
  generalOperatorFormGroupTitle: 'Operator *',
  transportModeTitle: 'Transport mode *',
  transportSubModeTitle: 'Transport submode *',
  generalPrivateCodeFormGroupTitle: 'Private code',
  generalPrivateCodeInputLabelTooltip:
    'Private code is what identifies the line internally for the operator',
  generalPublicCodeFormGroupTitle: 'Public code *',
  generalPublicCodeInputLabelTooltip:
    'Public code is what identifies the line externally towards travellers',
  generalTypeFormGroupTitle: 'Flexible line type *',
  typeFormGroupTitleTooltip: 'Read more about the line types',
  editorGeneralTabLabel: 'General',
  generalDrawer: 'Underneath is a short description of each line type.',
  drawerAria: 'Read more about the different line types.',
  generalDrawerTitle: 'Flexible line types.',
  drawerFixed:
    'Fixed route at fixed times, has to be booked beforehand for the bus to drive.',
  drawerMainRouteWithFlexibleEnds:
    'Fixed route at fixed times, with the possibility to book boarding or alighting at stop points outside the designated route.',
  drawerFixedStopAreaWide:
    'Flexible route defined by one or more areas, where each area can have different pre-defined stops.',
  drawerFlexibleAreasOnly:
    'Pickup and dropoff anywhere within a defined area and given opening hours.',
  drawerHailAndRideSections:
    'The route is defined, but along selected streches there is the possibility for boarding/alighting at any time.',
  journeyPatternsAddJourneyPatternIconButtonLabel: 'Add journey pattern',
  journeyPatternsUnsavedChanges: 'You have unsaved changes.',
  journeyPatternsSaveAndContinue: 'Save and continue',
  editorAbout: 'About the line',
  editorFillInformation:
    'A Journey Pattern describes the line pattern or area of the service, consisting of the stops along the line or the area(s) the service operates within.',
  stepperAbout: 'General',
  stepperJourneyPattern: 'Journey Patterns',
  stepperServiceJourney: 'Service Journeys',
  stepperBooking: 'Booking info',
  editorStopPoints: 'Add stop points defining the service',
  editorStopPointFlexibleAreaOnly:
    'Add flexible stop place defining the service',
  stopPointsInfo:
    'You have to add at least two stop points; one for start and one for stop. Choose between flexible stop places and quay IDs from the National stop place registry.',
  stopPointsInfoFixed:
    'You have to add at least two stop points; one for start and one for stop. Enter quay id from the National stop place registry.',
  deleteStopPointDialogTitle: 'Delete stop point',
  deleteStopPointDialogMessage:
    'Are you sure you want to delete this stop point?',
  selectCustom: 'Flexible stop place',
  selectNsr: 'Stop place',
  editorServiceJourneys: 'Service Journeys',
  newServiceJourneyModalTitle: 'New service journey',
  newServiceJourneyModalSubTitle:
    'Enter a name, choose a journey pattern and press Create',
  newServiceJourneyModalCancel: 'Cancel',
  newServiceJourneyModalCreate: 'Create',
  newServiceJourneyModalNameLabel: 'Name',
  newServiceJourneyModalPlaceholder: 'E.g "Milk-route weekend"',
  newServiceJourneyModalJourneyPatternLabel: 'Choose journey pattern',
  serviceJourneysInfo:
    'Create different Service Journeys for different opening hours. For instance one for weekdays and one for the weekend.',
  dayTypesEditorSelectLabel: 'Choose day types for this service journey',
  dayTypesModalTitle: 'Edit day types',
  dayTypesModalAddNewButtonLabel: 'Add day type',
  dayTypesModalIdHeader: 'NeTEx ID',
  dayTypesModalNameHeader: 'Name',
  dayTypesModalUsedByHeader: 'In use',
  dayTypeNoName: 'No name',
  dayTypeInUse: 'Yes',
  dayTypeNotInUse: 'No',
  dayTypeAssignmentAvailableLabel: 'Available',
  dayTypeEditorWeekdays: 'Weekdays for availability',
  weekdaysError: 'Please fill in the availability.',
  dayTypeEditorNameFieldLabel: 'Name',
  dayTypeEditorNameFieldLabelTooltip:
    'To help identify day type entities within Nplan',
  dayTypeEditorDateAvailability: 'Availability for the service',
  dayTypeEditorDateTooltip: 'Specify the validity of the service',
  dayTypeEditorAddDayTypeAssignment: 'Add date',
  dayTypeEditorNoDayTypeAssignments: 'No dates are defined.',
  dayTypeEditorDate: 'Date',
  dayTypeEditorFromAndToDate: 'Use from- and to-date',
  dayTypeEditorFromDate: 'From *',
  dayTypeEditorToDate: 'To *',
  dayTypeEditorToDateValidation: 'Not before from-date',
  dayTypesEditButton: 'Edit day types',
  deleteDayTypesErrorTitle: 'Error deleting day types',
  deleteSelectedDayTypesButtonLabel: 'Delete selected day types',
  passingTimesEditorError: 'You need valid passing times.',
  editorAddStopPoint: 'Add stop point',
  editorAddServiceJourneys: 'Create more Service Journeys',
  editorAddJourneyPatterns: 'Create more Journey Patterns',
  editorEdit: 'Edit',
  editorCreate: 'Create new ',
  editorDetailedCreate: 'Create new {details}',
  stopPointsAtleastTwoPoints: 'At least two stop points',
  stopPointsAtleastTwoPointsDetailed:
    'A journey pattern requires at least two stop points.',
  generalDescriptionLabel: 'Description',
  generalDirectionLabel: 'Direction',
  generalNameLabel: 'Name *',
  generalPrivateCodeLabel: 'Private code',
  generalPrivateCodeLabelTooltip:
    'Private code is what identifies the journey pattern internally for the operator',
  generalValidationName: 'You must enter a name.',
  tableDeleteConfirmDialogCancelButtonText: 'No',
  tableDeleteConfirmDialogConfirmButtonText: 'Yes',
  tableDeleteConfirmDialogMessage:
    'Are you sure you want to delete this journey pattern?',
  tableDeleteConfirmDialogTitle: 'Delete  journey pattern',
  tableDirectionTableHeaderCellLabel: 'Direction',
  tableNameTableHeaderCellLabel: 'Name',
  tableNewJourneyPatternDefaultText: '- New journey pattern -',
  tableNoJourneyPatternsText: 'No journey patterns.',
  tableServiceJourneysTableHeaderCellLabel: 'Service journeys',
  tableStopPlacesTableHeaderCellLabel: 'Stop places and Areas',
  editorJourneyPatternsTabLabel: 'Journey Patterns',
  newJourneyPatternModalTitle: 'New journey pattern',
  newJourneyPatternModalSubTitle: 'Enter a name and press Create',
  newJourneyPatternModalCancel: 'Cancel',
  newJourneyPatternModalCreate: 'Create',
  newJourneyPatternModalLabel: 'Name',
  newJourneyPatternModalPlaceholder: 'E.g "Local route"',
  editorLoadingLineText: 'Loading line',
  editorLoadingNetworkAndStopsText: 'Loading network and stop places',
  editorSaveButtonText: 'Save',
  editorSaveAndCreateLine: 'Save and create the line',
  editorSaveLineLoadingText: 'Saving line...',
  fixErrorsInTheFollowingSteps:
    'You must fix the errors in the following steps: ',
  navigationNext: 'Next',
  navigationCancel: 'Cancel',
  navigationPrevious: 'Previous',
  linesHeader: 'Lines',
  labelForAlighting: 'For alighting',
  labelForBoarding: 'For boarding',
  labelForBoardingAndAlighting: 'Boarding and alighting',
  labelFrontText: 'Front text',
  labelFrontTextRequired: 'Front text *',
  labelBoarding: 'On/off-boarding',
  labelQuayRef: 'Quay id *',
  flexibleStopPlaceRefAndQuayRefBothValues:
    'Choose either stop place or platform, not both.',
  flexibleStopPlaceRefAndQuayRefNoValues: 'You must select a place',
  flexibleStopPlaceNoValue: 'You must select a stop place',
  frontTextNoValue: 'You must enter a front text',
  frontTextAlighting: 'First stop can only be for boarding',
  frontTextBoarding: 'Last stop can only be for alighting',
  quayRefInvalid: 'Invalid platform ID',
  quaySearchResults_loadingLabel: 'Searching...',
  quaySearchResults_quayNotFoundLabel: 'Quay not found',
  yes: 'Yes',
  no: 'No',
  tableName: 'Name',
  tableFrontText: 'Front text',
  frontTextTooltip: 'The text that is shown at the front of the vehicle',
  tableBoarding: 'Boarding',
  tableAlighting: 'Alighting',
  tableDefaultValue: '- New stop point -',
  tableNoStopPoints: 'No stop points.',
  tableDeleteTitle: 'Delete stop point',
  tableDeleteMessage: 'Are you sure you want to delete this stop point?',
  serviceJourneyAvailability: 'Availability',
  serviceJourneyPassingTimes: 'Passing times',
  serviceJourneyBusinessHours: 'Business hours',
  passingTimesInfo:
    'Enter the passing times for the different stops. For an area based service, you should specify the opening hours, with start time on the first stop and end time on the last.',
  serviceJourneyBooking: 'Booking',
  generalName: 'Name *',
  nameIsRequired: 'Name is required.',
  generalDescription: 'Description',
  generalAvailability: 'Availability',
  generalPrivateCode: 'Private code',
  generalPrivateCodeTooltip:
    'Private code is what identifies the service journey internally for the operator',
  generalPublicCode: 'Public code',
  generalPublicCodeTooltip:
    'Public code is what identifies the service journey externally towards travellers',
  generalOperator: 'Operator',
  journeyPatternDeleteDialogTitle: 'Delete journey pattern',
  journeyPatternDeleteDialogMessage:
    'Are you sure you want to delete this journey pattern?',
  serviceJourneyDeleteTitle: 'Delete service journey',
  serviceJourneydeleteMessage:
    'Are you sure you want to delete this service journey?',
  linesLoadingText: 'Loading lines...',
  linesNameTableHeaderLabel: 'Name',
  linesNoLinesFoundText: 'No lines found.',
  linesOperatorTableHeader: 'Operator',
  linesPublicCodeTableHeaderLabel: 'Public code',
  linesPrivateCodeTableHeaderLabel: 'Private code',
  nameEmpty: 'Name is required.',
  publicCodeEmpty: 'Public code is required.',
  networkRefEmpty: 'You must select a network.',
  operatorRefEmpty: 'You must select an operator.',
  transportModeEmpty: 'You must select a transport mode.',
  transportSubModeEmpty: 'You must select a transport submode.',
  flexibleLineTypeEmpty: 'You must select a type.',
  homePage: 'Home page',
  networkAuthorityMissing: 'Network is missing',
  networkAuthorityMissingDetails:
    'There are no authorities created for this data provider. Please contact the administrators for help.',
  networksAuthorityTableHeaderLabel: 'Authority',
  editorNetworkAuthorityLabelText: 'Authority *',
  editorCreateNetworkHeaderText: 'Create network',
  editorNetworkDescription:
    'At least one network is necessary. Networks can be used to group lines.',
  editorNetworkValidationAuthority: 'Authority is required',
  editorNetworkValidationName: 'Name is required',
  editorDeleteNetworkConfirmDialogCancelText: 'No',
  editorDeleteNetworkConfirmDialogConfirmText: 'Yes',
  editorDeleteNetworkConfirmDialogMessage:
    'Are you sure you want to delete this network?',
  editorDeleteNetworkConfirmDialogTitle: 'Delete network',
  editorDeletingNetworkLoadingText: 'Deleting network...',
  editorNetworkDescriptionLabelText: 'Description',
  editorEditNetworkHeaderText: 'Edit network',
  editorLoadingNetworkText: 'Loading network...',
  editorNetworkNameLabelText: 'Name *',
  editorNetworkPrivateCodeLabelText: 'Private code',
  editorSavingNetworkLoadingText: 'Saving network...',
  network: 'network',
  networksHeaderText: 'Networks',
  networksLoadingNetworksText: 'Loading networks...',
  networksNameTableHeaderLabel: 'Name',
  networksNoNetworksFoundText: 'No networks found',
  networksPrivateCodeTableHeaderLabel: 'Private code',
  stopPlacesCreateStopPlaceLinkIconLabelText: 'Create flexible stop place',
  stopPlaceText: 'flexible stop place',
  stopPlace: 'Flexible stop place *',
  editorDescription:
    'Enter a list of coordinates in GeoJSON format, or click on the map to create a polygon.',
  editorCreateHeader: 'Create flexible stop place',
  delete: 'Delete',
  editorDeleteStopPlaceDialogCancelButtonText: 'No',
  editorDeleteStopPlaceDialogConfirmButtonText: 'Yes',
  editorDeleteStopPlaceDialogMessage:
    'Are you sure you want to delete this stop place?',
  editorDeleteStopPlaceDialogTitle: 'Delete stop place',
  editorDeletingOverlayLoaderText: 'Deleting stop place...',
  editorDescriptionFormLabelText: 'Description',
  editorEditHeader: 'Edit flexible stop place',
  errorCoordinates: 'The coordinates are in an invalid format',
  editorLoadingDependenciesText: 'Loading dependencies',
  editorLoadingStopPlaceText: 'Loading stop place',
  editorNameFormLabelText: 'Name *',
  editorPrivateCodeFormLabelText: 'Private code',
  editorCoordinatesFormLabelText: 'Coordinates in GeoJson order [Long, Lat]',
  editorDrawPolygonButtonText: 'Draw coordinates on map',
  save: 'Save',
  editorSavingOverlayLoaderText: 'Saving stop place...',
  validateFormErrorFlexibleAreaNotEnoughPolygons:
    'You must add more map points',
  validateFormErrorNameEmpty: 'You must enter a name',
  stopPlacesHeader: 'Flexible stop places',
  stopPlacesLoadingStopPlacesText: 'Loading stop places...',
  stopPlacesNameTableHeaderLabelText: 'Name',
  stopPlacesNoStopPlacesFoundText: 'No stop places found.',
  stopPlacesNumberOfPointsTableHeaderLabelText: 'Number of points',
  stopPlacesPrivateCodeTableHeaderLabelText: 'Private code',
  passingTimeTypeDrawerTitle: 'Passing times',
  passingTimeTypeDrawerSubTitle:
    'Choose correct representation for passing times',
  passingTimeTypeDrawerFixedText: `
    A route-based service journey with fixed passing times, as defined by 
    an arrival time and departure time for each stop in the pattern.
  `,
  passingTimeTypeDrawerFlexibleText1: `
    A service journey with flexible passing times is used to define the opening
    hours for an area-based service, or the time window available for boarding/alighting
    at each stop along a route.
  `,
  passingTimeTypeDrawerFlexibleText2: `
    Opening hours or time window for boarding/alighting is defined by
    “earliest departure” and “latest arrival”:
  `,
  passingTimeTypeDrawerEarliestDepartureText: `
    Journeys cannot begin from this stop or area before the given time.
  `,
  passingTimeTypeDrawerLatestARrivalText: `
    Journeys cannot end at this stop or area after the given time.
  `,
  passingTimesTypeFixed: 'Fixed',
  passingTimesTypeFlexible: 'Flexible',
  passingTimesArrivalTime: 'Arrival time',
  passingTimesDepartureTime: 'Departure time',
  passingTimesLatestArrivalTime: 'Latest arrival time',
  passingTimesEarliestDepartureTime: 'Earliest departure time',
  passingTimesDayOffset: 'Day offset',
  passingTimesDayOffsetTooltip:
    'Set day offset if the passing time is a day or more after the departure of the service',
  errorAllPassingTimesMustBeFilled: 'All passing times must be set.',
  errorDepartureAfterArrival: 'Departure time cannot be before arrival time.',
  errorDepartureAfterEarliest:
    'Departure time cannot be before earliest departure time.',
  errorArrivalBeforeLatest:
    'Arrival time cannot be later than latest arrival time.',
  errorLaterThanPrevious:
    "All specified times must be later than previous stop point's times.",
  errorLastArrivalMustBeSet:
    'Arrival time or latest arrival time for last stop place must be set.',
  errorStopPoints: 'You have to create at least two stop points.',
  errorARowIsMissingData: 'At least one of the rows is missing passing times.',
  weekdaysMonday: 'Monday',
  weekdaysTuesday: 'Tuesday',
  weekdaysWednesday: 'Wednesday',
  weekdaysThursday: 'Thursday',
  weekdaysFriday: 'Friday',
  weekdaysSaturday: 'Saturday',
  weekdaysSunday: 'Sunday',
  requiredInputMarker: 'The fields marked with * are required',
  air: 'Air',
  bus: 'Bus',
  cableway: 'Cableway',
  coach: 'Coach',
  funicular: 'Funicular',
  metro: 'Metro',
  rail: 'Rail',
  tram: 'Tram',
  water: 'Water',
  domesticFlight: 'Domestic flight',
  helicopterService: 'Helicopter service',
  internationalFlight: 'International flight',
  airportLinkBus: 'Airport link bus',
  expressBus: 'Express bus',
  localBus: 'Local bus',
  nightBus: 'Night bus',
  railReplacementBus: 'Rail replacement bus',
  regionalBus: 'Regional bus',
  schoolBus: 'School bus',
  shuttleBus: 'Shuttle bus',
  sightseeingBus: 'Sightseeing bus',
  sightseeingService: 'Sightseeing service',
  telecabin: 'Telecabin',
  internationalCoach: 'International coach',
  nationalCoach: 'National coach',
  touristCoach: 'Tourist coach',
  airportLinkRail: 'Airport link rail',
  international: 'International',
  interregionalRail: 'Interregional rail',
  local: 'Local',
  longDistance: 'Long distance',
  nightRail: 'Night rail',
  regionalRail: 'Regional rail',
  touristRailway: 'Tourist railway',
  cityTram: 'City tram',
  localTram: 'Local tram',
  highSpeedPassengerService: 'High speed passenger service',
  highSpeedVehicleService: 'High speed vehicle service',
  internationalCarFerry: 'International car ferry',
  internationalPassengerFerry: 'International passenger ferry',
  localCarFerry: 'Local car ferry',
  localPassengerFerry: 'Local passenger ferry',
  nationalCarFerry: 'National car ferry',
  timeUnitPickerYearsLabel: 'Years',
  timeUnitPickerMonthsLabel: 'Months',
  timeUnitPickerDaysLabel: 'Days',
  timeUnitPickerHoursLabel: 'Hours',
  timeUnitPickerMinutesLabel: 'Minutes',
  timeUnitPickerSecondsLabel: 'Seconds',
  timeUnitPickerResetLabel: 'Reset',
  timeUnitPickerDoneLabel: 'Done',
  copyServiceJourneyDialogTitle: 'Copy Service Journey',
  copyServiceJourneyDialogNameTemplateLabel: 'Name template',
  copyServiceJourneyDialogDepartureTimeLabel: 'Departure time',
  copyServiceJourneyDialogLatestPossibleDepartureTimelabel:
    'Latest possible departure time',
  copyServiceJourneyDialogCancelButtonText: 'Cancel',
  copyServiceJourneyDialogSaveButtonText: 'Create copies',
  copyServiceJourneyDialogValidationUntilTimeBeforeInitialTimeError:
    "Last possible departure time can't be before initial departure time",
  copyServiceJourneyDialogMultipleSwitchLabel: 'Create multiple copies',
  copyServiceJourneyDialogIntervalLabel: 'Choose an interval',
  noticesHeader: 'Notices',
  newNoticeLabel: 'New notice',
  deleteNoticeTooltip: 'Delete notice',
  addNoticeTooltip: 'Add notice',
  flexibleStopAreaType: 'Stop place type',
  flexibleStopAreaTypeNotSet: 'Not set',
  flexibleStopAreaTypeUnrestrictedRoadNetwork: 'Anywhere within polygon',
  flexibleStopAreaTypeUnrestrictedPublicTransportAreas:
    'Only on stop places within polygon',
  openBulkDeleteDialogButtonLabel: 'Bulk delete',
  bulkDeleteDialogTitle: 'Bulk delete',
  bulkDeleteDialogFilterSearchLabel: 'Filter by Name',
  bulkDeleteDialogNameHeader: 'Name',
  bulkDeleteDialogDepartureHeader: 'Departure',
  bulkDeleteDialogDepartureDayOffsetHeader: 'Day offset',
  bulkDeleteDialogValidityHeader: 'Validity',
  bulkDeleteDialogCancelButtonLabel: 'Cancel',
  bulkDeleteDialogConfirmButtonLabel: 'Delete',
  dayTypesValidationError:
    'At least one validity period does not have an available weekday',
  providersHeaderText: 'Providers',
  createProviderHeaderText: 'Create provider',
  providersLoading: 'Loading providers',
  provider: 'provider',
  navBarProvidersMenuItemLabel: 'Providers',
  providersNameTableHeaderLabel: 'Name',
  providersCodeTableHeaderLabel: 'Code',
  providersCodespaceXmlnsHeaderLabel: 'XML namespace',
  providersCodespaceXmlnsUrlHeaderLabel: 'XML namespace url',
  editorEditProviderHeaderText: 'Edit provider',
  editorCreateProviderHeaderText: 'Create provider',
  editorProviderNameLabelText: 'Name *',
  editorProviderCodeLabelText: 'Code *',
  editorProviderCodespaceXmlnsLabelText: 'XML namespace *',
  editorProviderCodespaceXmlnsUrlLabelText: 'XML namespace url *',
  editorProviderValidationField: 'Required field',
  editorSavingProviderLoadingText: 'Saving provider...',
  editorLoadingProviderText: 'Loading provider',
  saveProviderError: 'Error saving provider',
  saveProviderErrorFallback: 'Unknown error saving provider',
  noProvidersDescriptionText:
    'Your Nplan installation needs at least one provider',
};
