/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'galaxy': "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9178c8b8-b0b0-4e26-8fb7-63ae3ff5aebf/d9lb7db-972dfb99-2953-47ef-88ea-2c8c76fdac5c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxNzhjOGI4LWIwYjAtNGUyNi04ZmI3LTYzYWUzZmY1YWViZlwvZDlsYjdkYi05NzJkZmI5OS0yOTUzLTQ3ZWYtODhlYS0yYzhjNzZmZGFjNWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hpKkfCIA6UZZdCWRJ08rFKvF21oU4N4DwvKQymjLW1Y')"
      }
    },
  },
  plugins: [],
}
