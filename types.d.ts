export interface Player {
  responseContext: ResponseContext;
  playabilityStatus: PlayabilityStatus;
  streamingData: StreamingData;
  playbackTracking: PlaybackTracking;
  captions: Captions;
  videoDetails: VideoDetails;
  annotations?: AnnotationsEntity[] | null;
  playerConfig: PlayerConfig;
  storyboards: Storyboards;
  microformat: Microformat;
  cards: Cards;
  trackingParams: string;
  attestation: Attestation;
  endscreen: Endscreen;
  frameworkUpdates: FrameworkUpdates;
}

export interface YTNode {
  id: string;
  thumbnail: string;
  next: string[];
}

interface ResponseContext {
  visitorData: string;
  serviceTrackingParams?: ServiceTrackingParamsEntity[] | null;
  mainAppWebResponseContext: MainAppWebResponseContext;
  webResponseContextExtensionData: WebResponseContextExtensionData;
}

interface ServiceTrackingParamsEntity {
  service: string;
  params?: ParamsEntity[] | null;
}

interface ParamsEntity {
  key: string;
  value: string;
}

interface MainAppWebResponseContext {
  loggedOut: boolean;
  trackingParam: string;
}

interface WebResponseContextExtensionData {
  hasDecorated: boolean;
}

interface PlayabilityStatus {
  status: string;
  playableInEmbed: boolean;
  miniplayer: Miniplayer;
  contextParams: string;
}

interface Miniplayer {
  miniplayerRenderer: MiniplayerRenderer;
}

interface MiniplayerRenderer {
  playbackMode: string;
}

interface StreamingData {
  expiresInSeconds: string;
  formats?: FormatsEntity[] | null;
  adaptiveFormats?: AdaptiveFormatsEntity[] | null;
}

interface FormatsEntity {
  itag: number;
  url: string;
  mimeType: string;
  bitrate: number;
  width: number;
  height: number;
  lastModified: string;
  quality: string;
  fps: number;
  qualityLabel: string;
  projectionType: string;
  audioQuality: string;
  approxDurationMs: string;
  audioSampleRate: string;
  audioChannels: number;
}

interface AdaptiveFormatsEntity {
  itag: number;
  url: string;
  mimeType: string;
  bitrate: number;
  width?: number | null;
  height?: number | null;
  initRange: InitRangeOrIndexRange;
  indexRange: InitRangeOrIndexRange;
  lastModified: string;
  contentLength: string;
  quality: string;
  fps?: number | null;
  qualityLabel?: string | null;
  projectionType: string;
  averageBitrate: number;
  approxDurationMs: string;
  colorInfo?: ColorInfo | null;
  highReplication?: boolean | null;
  audioQuality?: string | null;
  audioSampleRate?: string | null;
  audioChannels?: number | null;
  loudnessDb?: number | null;
}

interface InitRangeOrIndexRange {
  start: string;
  end: string;
}

interface ColorInfo {
  primaries: string;
  transferCharacteristics: string;
  matrixCoefficients: string;
}

interface PlaybackTracking {
  videostatsPlaybackUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl;
  videostatsDelayplayUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl;
  videostatsWatchtimeUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl;
  ptrackingUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl;
  qoeUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl;
  atrUrl: AtrUrl;
  videostatsScheduledFlushWalltimeSeconds?: number[] | null;
  videostatsDefaultFlushIntervalSeconds: number;
}

interface VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl {
  baseUrl: string;
}

interface AtrUrl {
  baseUrl: string;
  elapsedMediaTimeSeconds: number;
}

interface Captions {
  playerCaptionsTracklistRenderer: PlayerCaptionsTracklistRenderer;
}

interface PlayerCaptionsTracklistRenderer {
  captionTracks?: CaptionTracksEntity[] | null;
  audioTracks?: AudioTracksEntity[] | null;
  translationLanguages?: TranslationLanguagesEntity[] | null;
  defaultAudioTrackIndex: number;
}

interface CaptionTracksEntity {
  baseUrl: string;
  name: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss;
  vssId: string;
  languageCode: string;
  kind: string;
  isTranslatable: boolean;
}

interface NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss {
  simpleText: string;
}

interface AudioTracksEntity {
  captionTrackIndices?: number[] | null;
}

interface TranslationLanguagesEntity {
  languageCode: string;
  languageName: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss;
}

interface VideoDetails {
  videoId: string;
  title: string;
  lengthSeconds: string;
  keywords?: string[] | null;
  channelId: string;
  isOwnerViewing: boolean;
  shortDescription: string;
  isCrawlable: boolean;
  thumbnail: ThumbnailOrWatermarkOrImage;
  allowRatings: boolean;
  viewCount: string;
  author: string;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  isLiveContent: boolean;
}

interface ThumbnailOrWatermarkOrImage {
  thumbnails: ThumbnailsEntity[];
}

interface ThumbnailsEntity {
  url: string;
  width: number;
  height: number;
}

interface AnnotationsEntity {
  playerAnnotationsExpandedRenderer: PlayerAnnotationsExpandedRenderer;
}

interface PlayerAnnotationsExpandedRenderer {
  featuredChannel: FeaturedChannel;
  allowSwipeDismiss: boolean;
  annotationId: string;
}

interface FeaturedChannel {
  startTimeMs: string;
  endTimeMs: string;
  watermark: ThumbnailOrWatermarkOrImage;
  trackingParams: string;
  navigationEndpoint: NavigationEndpointOrEndpoint;
  channelName: string;
  subscribeButton: SubscribeButtonOrHovercardButton;
}

interface NavigationEndpointOrEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  browseEndpoint: BrowseEndpoint;
}

interface CommandMetadata {
  webCommandMetadata: WebCommandMetadata;
}

interface WebCommandMetadata {
  url: string;
  webPageType: string;
  rootVe: number;
  apiUrl: string;
}

interface BrowseEndpoint {
  browseId: string;
}

interface SubscribeButtonOrHovercardButton {
  subscribeButtonRenderer: SubscribeButtonRenderer;
}

interface SubscribeButtonRenderer {
  buttonText: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonText;
  subscribed: boolean;
  enabled: boolean;
  type: string;
  channelId: string;
  showPreferences: boolean;
  subscribedButtonText: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonText;
  unsubscribedButtonText: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonText;
  trackingParams: string;
  unsubscribeButtonText: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonText;
  serviceEndpoints?: ServiceEndpointsEntity[] | null;
  subscribeAccessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibility;
  unsubscribeAccessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibility;
  signInEndpoint: SignInEndpoint;
}

interface DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonText {
  runs?: RunsEntity[] | null;
}

interface RunsEntity {
  text: string;
}

interface ServiceEndpointsEntity {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata1;
  subscribeEndpoint?: SubscribeEndpointOrUnsubscribeEndpoint | null;
  signalServiceEndpoint?: SignalServiceEndpoint | null;
}

interface CommandMetadata1 {
  webCommandMetadata: WebCommandMetadata1;
}

interface WebCommandMetadata1 {
  sendPost: boolean;
  apiUrl?: string | null;
}

interface SubscribeEndpointOrUnsubscribeEndpoint {
  channelIds?: string[] | null;
  params: string;
}

interface SignalServiceEndpoint {
  signal: string;
  actions?: ActionsEntity[] | null;
}

interface ActionsEntity {
  clickTrackingParams: string;
  openPopupAction: OpenPopupAction;
}

interface OpenPopupAction {
  popup: Popup;
  popupType: string;
}

interface Popup {
  confirmDialogRenderer: ConfirmDialogRenderer;
}

interface ConfirmDialogRenderer {
  trackingParams: string;
  dialogMessages?:
    | DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonText[]
    | null;
  confirmButton: ConfirmButton;
  cancelButton: CancelButton;
  primaryIsCancel: boolean;
}

interface ConfirmButton {
  buttonRenderer: ButtonRenderer;
}

interface ButtonRenderer {
  style: string;
  size: string;
  isDisabled: boolean;
  text: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonText;
  serviceEndpoint: ServiceEndpointOrUnsubscribeCommand;
  accessibility: AccessibilityOrAccessibilityData;
  trackingParams: string;
}

interface ServiceEndpointOrUnsubscribeCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  unsubscribeEndpoint: SubscribeEndpointOrUnsubscribeEndpoint1;
}

interface CommandMetadata2 {
  webCommandMetadata: WebCommandMetadata2;
}

interface WebCommandMetadata2 {
  sendPost: boolean;
  apiUrl: string;
}

interface SubscribeEndpointOrUnsubscribeEndpoint1 {
  channelIds?: string[] | null;
  params: string;
}

interface AccessibilityOrAccessibilityData {
  label: string;
}

interface CancelButton {
  buttonRenderer: ButtonRenderer1;
}

interface ButtonRenderer1 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: DialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonText;
  accessibility: AccessibilityOrAccessibilityData;
  trackingParams: string;
}

interface SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibility {
  accessibilityData: AccessibilityOrAccessibilityData;
}

interface SignInEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata3;
}

interface CommandMetadata3 {
  webCommandMetadata: WebCommandMetadataOrThumbnailsEntityOrCommonConfig;
}

interface WebCommandMetadataOrThumbnailsEntityOrCommonConfig {
  url: string;
}

interface PlayerConfig {
  audioConfig: AudioConfig;
  streamSelectionConfig: StreamSelectionConfig;
  mediaCommonConfig: MediaCommonConfig;
  webPlayerConfig: WebPlayerConfig;
}

interface AudioConfig {
  loudnessDb: number;
  perceptualLoudnessDb: number;
  enablePerFormatLoudness: boolean;
}

interface StreamSelectionConfig {
  maxBitrate: string;
}

interface MediaCommonConfig {
  dynamicReadaheadConfig: DynamicReadaheadConfig;
}

interface DynamicReadaheadConfig {
  maxReadAheadMediaTimeMs: number;
  minReadAheadMediaTimeMs: number;
  readAheadGrowthRateMs: number;
}

interface WebPlayerConfig {
  useCobaltTvosDash: boolean;
  webPlayerActionsPorting: WebPlayerActionsPorting;
}

interface WebPlayerActionsPorting {
  getSharePanelCommand: GetSharePanelCommand;
  subscribeCommand: SubscribeCommand;
  unsubscribeCommand: ServiceEndpointOrUnsubscribeCommand;
  addToWatchLaterCommand: AddToWatchLaterCommand;
  removeFromWatchLaterCommand: RemoveFromWatchLaterCommand;
}

interface GetSharePanelCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  webPlayerShareEntityServiceEndpoint: WebPlayerShareEntityServiceEndpoint;
}

interface WebPlayerShareEntityServiceEndpoint {
  serializedShareEntity: string;
}

interface SubscribeCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  subscribeEndpoint: SubscribeEndpointOrUnsubscribeEndpoint1;
}

interface AddToWatchLaterCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  playlistEditEndpoint: PlaylistEditEndpoint;
}

interface PlaylistEditEndpoint {
  playlistId: string;
  actions?: ActionsEntity1[] | null;
}

interface ActionsEntity1 {
  addedVideoId: string;
  action: string;
}

interface RemoveFromWatchLaterCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  playlistEditEndpoint: PlaylistEditEndpoint1;
}

interface PlaylistEditEndpoint1 {
  playlistId: string;
  actions?: ActionsEntity2[] | null;
}

interface ActionsEntity2 {
  action: string;
  removedVideoId: string;
}

interface Storyboards {
  playerStoryboardSpecRenderer: PlayerStoryboardSpecRenderer;
}

interface PlayerStoryboardSpecRenderer {
  spec: string;
  recommendedLevel: number;
}

interface Microformat {
  playerMicroformatRenderer: PlayerMicroformatRenderer;
}

interface PlayerMicroformatRenderer {
  thumbnail: ThumbnailOrWatermarkOrImage;
  embed: Embed;
  title: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss;
  description: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss;
  lengthSeconds: string;
  ownerProfileUrl: string;
  externalChannelId: string;
  isFamilySafe: boolean;
  availableCountries?: string[] | null;
  isUnlisted: boolean;
  hasYpcMetadata: boolean;
  viewCount: string;
  category: string;
  publishDate: string;
  ownerChannelName: string;
  uploadDate: string;
}

interface Embed {
  iframeUrl: string;
  width: number;
  height: number;
}

interface Cards {
  cardCollectionRenderer: CardCollectionRenderer;
}

interface CardCollectionRenderer {
  cards?: CardsEntity[] | null;
  headerText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss;
  icon: IconOrCloseButton;
  closeButton: IconOrCloseButton;
  trackingParams: string;
  allowTeaserDismiss: boolean;
  logIconVisibilityUpdates: boolean;
}

interface CardsEntity {
  cardRenderer: CardRenderer;
}

interface CardRenderer {
  teaser: Teaser;
  cueRanges?: CueRangesEntity[] | null;
  trackingParams: string;
}

interface Teaser {
  simpleCardTeaserRenderer: SimpleCardTeaserRenderer;
}

interface SimpleCardTeaserRenderer {
  message: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss;
  trackingParams: string;
  prominent: boolean;
  logVisibilityUpdates: boolean;
  onTapCommand: OnTapCommand;
}

interface OnTapCommand {
  clickTrackingParams: string;
  changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction;
}

interface ChangeEngagementPanelVisibilityAction {
  targetId: string;
  visibility: string;
}

interface CueRangesEntity {
  startCardActiveMs: string;
  endCardActiveMs: string;
  teaserDurationMs: string;
  iconAfterTeaserMs: string;
}

interface IconOrCloseButton {
  infoCardIconRenderer: InfoCardIconRenderer;
}

interface InfoCardIconRenderer {
  trackingParams: string;
}

interface Attestation {
  playerAttestationRenderer: PlayerAttestationRenderer;
}

interface PlayerAttestationRenderer {
  challenge: string;
  botguardData: BotguardData;
}

interface BotguardData {
  program: string;
  interpreterSafeUrl: InterpreterSafeUrl;
  serverEnvironment: number;
}

interface InterpreterSafeUrl {
  privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
}

interface Endscreen {
  endscreenRenderer: EndscreenRenderer;
}

interface EndscreenRenderer {
  elements?: ElementsEntity[] | null;
  startMs: string;
  trackingParams: string;
}

interface ElementsEntity {
  endscreenElementRenderer: EndscreenElementRenderer;
}

interface EndscreenElementRenderer {
  style: string;
  image: ThumbnailOrWatermarkOrImage;
  icon?: Icon | null;
  left: number;
  width: number;
  top: number;
  aspectRatio: number;
  startMs: string;
  endMs: string;
  title: TitleOrText;
  metadata: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss;
  callToAction?: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss1 | null;
  dismiss?: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss2 | null;
  endpoint: Endpoint;
  hovercardButton?: SubscribeButtonOrHovercardButton1 | null;
  trackingParams: string;
  isSubscribe?: boolean | null;
  id: string;
  thumbnailOverlays?: ThumbnailOverlaysEntity[] | null;
}

interface Icon {
  thumbnails?: WebCommandMetadataOrThumbnailsEntityOrCommonConfig[] | null;
}

interface TitleOrText {
  accessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibility;
  simpleText: string;
}

interface NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss1 {
  simpleText: string;
}

interface NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismiss2 {
  simpleText: string;
}

interface Endpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata4;
  browseEndpoint?: BrowseEndpoint1 | null;
  watchEndpoint?: WatchEndpoint | null;
}

interface CommandMetadata4 {
  webCommandMetadata: WebCommandMetadata3;
}

interface WebCommandMetadata3 {
  url: string;
  webPageType: string;
  rootVe: number;
  apiUrl?: string | null;
}

interface BrowseEndpoint1 {
  browseId: string;
}

interface WatchEndpoint {
  videoId: string;
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

interface WatchEndpointSupportedOnesieConfig {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig;
}

interface Html5PlaybackOnesieConfig {
  commonConfig: WebCommandMetadataOrThumbnailsEntityOrCommonConfig;
}

interface SubscribeButtonOrHovercardButton1 {
  subscribeButtonRenderer: SubscribeButtonRenderer;
}

interface ThumbnailOverlaysEntity {
  thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer;
}

interface ThumbnailOverlayTimeStatusRenderer {
  text: TitleOrText;
  style: string;
}

interface FrameworkUpdates {
  entityBatchUpdate: EntityBatchUpdate;
}

interface EntityBatchUpdate {
  mutations?: MutationsEntity[] | null;
  timestamp: Timestamp;
}

interface MutationsEntity {
  entityKey: string;
  type: string;
  payload: Payload;
}

interface Payload {
  offlineabilityEntity: OfflineabilityEntity;
}

interface OfflineabilityEntity {
  key: string;
  addToOfflineButtonState: string;
}

interface Timestamp {
  seconds: string;
  nanos: number;
}
