/**
 * Server representation
 */
export interface Server {
  /**
   * Server name
   */
  name: string;
}

export interface ServerModuleState {
  /**
   * Servers list
   */
  list: Server[]
}
