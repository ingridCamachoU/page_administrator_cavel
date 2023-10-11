/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            textColor:{
                skin: {
                    ligth: 'var(--color-text-ligth)',
                    base: 'var(--color-text-base)',
                    red: 'var(--color-tex-red)'
                }
            },
            backgroundColor:{
                skin: {
                    ligth: 'var(--color-background-ligth)',
                    base: 'var(--color-background-base)'
                }
            },
            borderColor: {
                skin:{
                    base: 'var(--color-background-base)'
                }
                
            },
            accentColor:{
                skin:{
                    base: 'var(--color-background-base)'
                }
            },
            
        },
    },
    plugins: [],
};

