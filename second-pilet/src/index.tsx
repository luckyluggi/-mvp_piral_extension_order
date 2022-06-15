import * as React from 'react';
import { PiletApi } from 'my-appshell';

export function setup(app: PiletApi) {
  // app.showNotification('Hello from Piral!', {
  //   autoClose: 2000,
  // });
  // app.registerMenu(() =>
  //   <a href="https://docs.piral.io" target="_blank">Documentation</a>
  // );
  // app.registerTile(() => <div>Welcome second Pilet!</div>, {
  //   initialColumns: 2,
  //   initialRows: 1,
  // });

  app.registerExtension("topbar-left", () => {
    return <li style={{order: 2}}>Second</li>; 
  });
}
