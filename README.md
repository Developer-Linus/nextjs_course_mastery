# NextJS Installation
npx create-next-app@latest

# Server Side Rendering
- This is a case where the client files are served in the server and sent to the client.
- Every component is served on the server in Next.js unless you explicitly use the "use client" keyword at the top of a <br/> 
component.
- Even if I use `use client`, Next.js will still serve the static parts in server and wait for the client(browser) to <br/> 
handle the interactive parts. This is called `Server pre-rendering`.
# Rule of Thumb for Using Client or Server Side Rendering
- Always maintain server side rendering until there is some kind of interactivity in any of the components. Ensure you <br/>
include `use client` for the frontend to handle the `interactivity for such components.

# Routing
- Next.js uses a file-based system to establish routes.
- To create a route, you create a folder with name of the route and inside it, create a component with the name `page.tsx`.
- What about if we have nested routes? Here, we create other different folders within the parent folder for the children.
- Then for every nested folder, it must have `page.tsx` for the specific page we want to render.
- Finally, we have `dynamic routing` where the information displayed changes based on the specific component clicked or 
interacted with.
- To achieve `dynamic routing`, we enclose folder name with square brackets `[]` within the parent folder where we want to implement dynamic routing and within it, create `page.tsx` for <br/>
for what we want to be rendered.