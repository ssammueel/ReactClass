## tailwind css
to use it in the react u install

1. install

       npm install -D tailwindcss
        npx tailwindcss init
   
2. Configure your template paths
- Add the paths to all of your template files in your tailwind.config.js file.

        /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
          extend: {},
        },
        plugins: [],
      }

3. add in index.css
        
           @tailwind base;
        @tailwind components;
        @tailwind utilities;

   
