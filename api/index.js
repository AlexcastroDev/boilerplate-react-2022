/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createServer } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,
    
        routes() {
          this.namespace = "api"
         
          this.get("/", () => [{"Hello": "there"}], { timing: 800 })
        },
      })
    
    return server
}