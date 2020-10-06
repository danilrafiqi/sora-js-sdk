import ConnectionBase from "./base";
import ConnectionPublisher from "./publisher";
import ConnectionSubscriber from "./subscriber";
import { AudioCodecType, Callbacks, ConnectionOptions, Json, Role, SimulcastQuality, VideoCodecType } from "./types";
declare class SoraConnection {
    signalingUrl: string;
    debug: boolean;
    constructor(signalingUrl: string, debug?: boolean);
    publisher(channelId: string, metadata?: Json, options?: ConnectionOptions): ConnectionPublisher;
    subscriber(channelId: string, metadata?: Json, options?: ConnectionOptions): ConnectionSubscriber;
    sendrecv(channelId: string, metadata?: Json, options?: ConnectionOptions): ConnectionPublisher;
    sendonly(channelId: string, metadata?: Json, options?: ConnectionOptions): ConnectionPublisher;
    recvonly(channelId: string, metadata?: Json, options?: ConnectionOptions): ConnectionSubscriber;
}
declare const _default: {
    connection: (signalingUrl: string, debug?: boolean) => SoraConnection;
    version: () => string;
};
export default _default;
export { AudioCodecType, Callbacks, ConnectionBase, ConnectionOptions, ConnectionPublisher, ConnectionSubscriber, Role, SimulcastQuality, SoraConnection, VideoCodecType, };
