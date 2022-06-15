import * as React from 'react';
import { PiletApi } from 'my-appshell';
import { SomePage } from "./somePage";

export function setup(app: PiletApi) {
  // app.showNotification('Hello from Piral!', {
  //   autoClose: 2000,
  // });
  // app.registerMenu(() =>
  //   <a href="https://docs.piral.io" target="_blank">Documentation</a>
  // );
  // app.registerTile(() => <div>Welcome first pilet!</div>, {
  //   initialColumns: 2,
  //   initialRows: 1,
  // });

  app.registerPage("/some-page", SomePage)

  app.registerExtension("topbar-left", () => {
    return <li style={{order: 1}}>First</li>; 
  });
}
