/**
 * Server representation
 */
export interface Server {
  /**
   * Server name
   * Server services
   */
  name: string;
  services: object;
}

export interface ServerModuleState {
  /**
   * Servers list
   */
  list: Server[];
}