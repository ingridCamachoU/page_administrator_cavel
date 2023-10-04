import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            textColor:{
                skin: {
                    ligth: 'var(--color-text-ligth)',
                    base: 'var(--color-text-base)',
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
});

