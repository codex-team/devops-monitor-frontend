export interface Server {
    serverHeader: string;
    other?: string;
}

export interface ServerState {
    server?: Server;
    error?: boolean;
}