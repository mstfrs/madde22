import localFont from "@next/font/local"

const GalanoGrotesque=localFont({
    variable:"--galano-grotesque",
    fallback:["system-ui"],
    src:[
        {
            path:"../assets/fonts/GalanoGrotesqueRegular.otf",
            weight:"400",
            style:"normal",
        },
        {
            path:"../assets/fonts/GalanoGrotesqueMedium.otf",
            weight:"500",
            style:"normal",
        },
        {
            path:"../assets/fonts/GalanoGrotesqueBold.otf",
            weight:"700",
            style:"normal",
        },
        {
            path:"../assets/fonts/GalanoGrotesqueExtraBold.otf",
            weight:"900",
            style:"normal",
        },
    ]
});

export {GalanoGrotesque};