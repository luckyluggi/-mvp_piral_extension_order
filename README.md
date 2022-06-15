# Repro Steps
- `cd ./my-appshell` and run `npm i` and then `npm run build`
- `cd ../blazor-pilet` and run `dotnet build`
- `cd ../second-pilet` and run `npm i`
- `cd ../first-pilet` and run `npm i` and then `npm start` which will start all 3 pilets

# Problem
When you click `Example` in the top right you will be redirected to `/some-page`.  
This page shows a headline followed by an extension called `topbar-left`.  
Each pilet adds an item to that extension and defines an order css property.  
The desired order would be Blazor, First, Second.  
The problem now is that the blator extension content is wrapped inside 2 div's which makes the order property useless.  
See the result here:
``` html
<piral-extension name="topbar-left" params="{}">
  <li style="order: 1">First</li>
  <div data-portal-id="70g8" data-blazor-pilet-root="true">
    <div>
      <!--!--><!--!-->
      <li style="order: 0">Blazor</li>
    </div>
  </div>
  <li style="order: 2">Second</li>
</piral-extension>

```  
  
So the question is: "Does it need to be wrapped in 2 div's?".  
If yes. how could we add a custom order that is not dependend on the load time of the pilets?