//@flow
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'

declare interface IEngine {
  destroy(): void;
  attach(): void;
  detach(): void;
  play(): void;
  pause(): void;
  load(): Promise<Object>;
  ready(): void;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: TextTrack): void;
  enableAdaptiveBitrate(): void;
  getVideoElement(): HTMLVideoElement;
  currentTime: number;
  +duration: number;
  volume: number;
  +paused: boolean;
  +seeking: boolean;
  +played: TimeRanges;
  +buffered: TimeRanges;
  muted: boolean;
  +defaultMuted: boolean;
  src: string;
  poster: string;
  preload: string;
  autoplay: boolean;
  controls: boolean;
  loop: boolean;
  +error: ?MediaError;
  +seekable: TimeRanges;
  +ended: boolean;
  playbackRate: number;
  defaultPlaybackRate: number;
  +networkState: number;
  +readyState: number;
  +videoWidth: number;
  +videoHeight: number;
}
