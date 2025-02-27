import banner from '../../images/banner.png'
const Banner = () => {
    return (
        // <div className="bg-[#131a26]  max-w-[1900px]  mx-auto  px-[10%]">

        //     <div className="  mx-auto">
        //         <div
        //             className="relative  bg-cover bg-center bg-no-repeat"
        //         >
        //             {/* <div
        //                 className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        //             ></div> */}
            <div className="  mx-auto">
                {/* <div
                    className="relative  bg-cover bg-center bg-no-repeat"
                > */}
                    {/* <div
                        className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    ></div> */}

        //             <div className="flex flex-col md:flex-row items-center">
        //                 <div
        //                     className="relative  mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center "
        //                 >
        //                     <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        //                         <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
        //                             The world's leading
        //                             <strong className="block font-extrabold text-teal-600"> uptime monitoring <span className="text-white">service.</span> </strong>
        //                         </h1>

        //                         <p className="mt-4 md:font-bold max-w-lg text-white sm:text-xl/relaxed">
        //                             Get 50 monitors with 5-minute checks <span className="text-teal-600">totally FREE.</span>
        //                         </p>

        //                         <div className="mt-8 flex flex-wrap gap-4 text-center">
        //                             <a
        //                                 href="#"
        //                                 className="block w-full rounded-4xl bg-teal-600 hover:bg-blue-400 md:px-12 md:py-4 px-3 py-2 text-xl font-medium text-white shadow-sm  focus:ring-3 focus:outline-hidden sm:w-auto"
        //                             >
        //                                 Start monitoring in 30 seconds
        //                             </a>


        //                         </div>
        //                     </div>
        //                 </div>
        //                 {/* image div */}
        //                 <div className=' w-[450px]'>
        //                     <img className='h-[350px]' src={banner} alt="" />
        //                 </div>
        //             </div>
        //         </div>
        //         <p className="text-center text-white relative text-xl bottom-[80px]">Currently, we keep an eye on <strong>7,570,000</strong> monitors for more than <strong>2,100,000</strong> users and companies.                </p>

        //     </div>
        // </div>
        <div className=''>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <section
                className="relative max-w-[1900px] px-[10%] mx-auto bg-[url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMVFRUXFRcVFhYXFxcVFhcVFxUXFhUVFRcYHSggGBolGxUXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0fHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tKy0tLf/AABEIAKwBJQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgEABwj/xABEEAABAwIDBAcGBAMGBQUAAAABAAIRAyEEEjEFQVFhEyJxgZGh0QYjMlKxwRRCYpJy4fAVU6KywvEHM0NzgiQ0o7PD/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIxEAAgICAgIDAQEBAAAAAAAAAAECERIhAzETQSIyUWEE4f/aAAwDAQACEQMRAD8Az+2Pb2ticRUfUc40i89HTBgMZMNAG8xck6kndAAzSyvOSo5jpsMxv3SsvhMPnJEgQJuuUq5CoAe4rCV6ckucW8Q4+qWuqOdpUeDwzO9UVQ269rYmREXv5pRVfJlGxWg/DbRrUjBc4tOoLj5HcjMbtsPphgL8waOtmIIcNQeISmjiyLO6w5qfQsfdhg8CnxT6Eya+xLD4+oCIqPF79YkRzE3TqhjalKBWLqlFxIDg498HiOCRUGhj29I05ZuBv7Nyd7WpsFIXh2YkNvBEwY4W7dFk2gSipbA9q4h0syvfHRiOs7SXRN002LhXVjl6R4PRS3rG7hFjftSXHNnogN9Jo/xOReFxTqL2x1XNAHYbgrGL8bTrNOVz3yLRmNuWvNCdJUAPXfqPzHg7mtbgMYzEuptqNbIa5pOmYR1Y5gygNsbINORqCbHSbeWqKMyPstiHdNTl7viG8rSbWrObjKRzEB2SbmDD7z3ALI7FdlrM5Pb/AJgtd7VsgUqo1a+PG/8Ap81n2I+maV1Q8T4rI+1eMOcMDnWE6mwc1lvKe9PDtCWUXkQHuE8G9VxMnuIWR9pK4Nd0breHDklith5JWhTiMQ+fjd+4oY4h/wA7v3H1Xa5uqZVSJeK7/nd+4+qsGIf87vEqhiuaEQNlorv+d3iVIVn/ADO/cVABTaERGy8dLlLpdAiTm46b1UK7/nd+4o0Vm9C9s3JbAg7jdAwiBnemf87v3FcNZ/zu/cUy2Xsd9YS3dOpgACLntJjuSX2hwFakc0iAdxt2Qklyxi6Kw4ZyVouNZ/zu/cVw13/O79x9VVhqwe0O47uehC682VFTIO0E4bEPmczoFz1j6pXitsEOMOcRJuHHyW42xsCjTwrWumcoLnAxLiLxynivnWM2a5rrfCTYnhzUJ8+8Ud3F/n+NsZNxbnAOa90H9R9VB+If87v3H1QuzmFrn0zuv6/ZEPCpB2rIckcZUQdiX/3jv3H1VTsS/wDvH/uPqpuCqcERUyJxFTc9/wC53qo1MTUB+OoCI/M4HTtRGFAzCSFDbJBrVCDPWiRyAH2QZRM33sD/AMUn4ak+ljHPrtBb0TiS57RfO1zjJcPhibiTugDy+ZFeUnBMqpshTpuJhoJPLguXVlDEOY7M3WI8V7pp1Cmzpgk+3REtI1BC8Go44oPblMC1iVQ3Cu3X7EJNeho8U3/wHheCa0NnveYa0ugeCEq0AOXalU0B8Z6ljDEOGYc0YKxdT6Nj+rIOR24j5TuSxzCFZQc0TmBNrQYIPFXUv053CtrQxxbgOiDh/wBMXGoIe/doRZEdA6tVYS4HPlBeBaSYuNyBx1xS/wC3/remGEwz20xWHwgFnPNBIkbx6LALatB9B+V4g/UTEjwT6ntwPouZUuY6rt8yDfw1Waxe0DWIzuhwEAn4SJJify3J5diGcXAOBkGR4dbxRMGNqdey2ftZUPQ0+bpPc0+qweFJla/2vxFqTOALufD7I/hOXsIxeLy4PD9p/wAIe0/ULLYyQ+HTJa035tBTnap/9Fh43Z/Nx+6V7fHvydxDSN1soH1kIom+xdXddQaVGsbrjCiEKYrmqmmr2IissCm0KLVa1Emy0YZ2Qv3Aga8dFSmTWk0HAXJewAcSSYCHq7OqNmW6TIls21tKIGjU+yP/ALWoW/Fmi+mk/QrK+1jKrWMztaOlzOPFuUwB3zKdbDrOwrHvqCM4Ba3UkNsX2sAM7Rfis17XOeWsqkiBIAA4kjXf3+C5eXjeVnocHKsUgfBtim3snxupvClTbDQOAA8lwldcdI8+Tts1GBeyvTpmtmLgyJGhyPOVrjEAm1hchZba1Yl5dA1sN3ZCN2PixTc7M0uBEtAAs8Gzr7onTlwU/wAOx9N1dxIY0kGRfNEw0aExz7dFx8vFLO0tHo/5+ePjSb2ZNuKDKrnO/NaeHOExeUt2mdCRlGrW8uJ9T4BG4fEteJHeOCvxqtMhzVJ5I45VORDlUQqECgUyTABJ5BV12w4giCCQRwIMQm2y2+8b2hLtoH3jz+tx/wARSsdAhC8uleQHLcLimtaWubM7+5DWngrMLTa57Q4wDqVJ9AZiBpJjsXNKR2xi2QZRnQj6IzA0TmA4kDxKI2VgGPJD3ZYEjmUTszCEV2Nv8U9wvPkpSZSOhnjNqOZVFNsBjXNmNSLSClO2qLW1HtMjrHS9jcfVexji+s6Ly4xzvZE7dpyWOIILmCf4hY/RKNHQjdh9MpB8jrzUH0yNRHkiadAEi/inVXY7g1mQlxLZcLdUwHRf9JCqpizjB/wS434aX/b/AP0er6G0nMaxsnJZxbukFwmOxV7RZ1aX8B/+x6FrCzP4f9Tlc5GW1i3MQRlIJEi413jd3eCJoEtaQRnbmEAXH5tDuP8ARCGzZwMxaIsSdcu7mTr5K0vyMdBglwB5tl3lZMJYxNQVaoc0D8oLd4gBpnjpqEd7U15rRPwtaP8ADmI8SUo2eQaosQczTbSCQZjdruTDbGJY+uXuByk3Ld4a0Zu8wf5oCvYRjcSPwlBvEv7uu6/mPBA7Ta4dDm16Fp7i50JdUqOgAmWgw3eIkkx3lNNs1muFAgz7loPItJB806YrVMUVXdaOxca+FCuet4Ljktj0GMxI4FXNxreB8vVL2hWBqKYrihg3HN4Hy9VYMezg7wHqlwYi9mZRVYX/AAh7SewGUUxHFGv2Y11OmXZHGobhsAlo3EjcTKVsxj31DnkFragMgg3y5RftKdu2kIOWL3G/vPHsUBUe9g6O5dPX0a2CAe8STG+E4lW6B+m9xUcXBrWtI0BPWtlAPEgSsrjNlVHtBdU6u5pBmToAAdeXat47DUgGwwS0Nm5cC5t85B1PoEi22/oZqhuYR1eDXTw5/aEL1sZRrrsRspvpBrarmknQfnjdbeoux1MGC6/YfRRxGArdGXva7pH9YzlBI3C505BJxhyBBBB3g7kMvwPj9s0WzK7KlVjGuuSBobDebqrb+1A51OhSkU2EMHM2c95j8xJB7CEvw9IsEx1jZs8Y1PIC/wDMJfjDFRjWmcpAk73Ey5x7SUW3RoxV6O7WdLnE/wBToPBC7Nr5agnQ2P280RtO3fe+p5nt4bggKLZcO36KU/sXgrhsfnFM+YeagcSz5ggDSnz8hKryJnJk1xxHOAx7GPa4uEAgoCtXaSTOpJ8ShC1RIQcmMoIINUcVxUVWfQfQLyXJjYIJoMlzRMTAlaDDYjDtAY+nLm2Lhv56rMzopB6jKJ1xmqpmpbjsOHDLS3yDzVNT2gffS8wYuAeCRYfEuY4OGo4+Crc8kyl8bBlEYUsWcwOhEQeYT6ntOk9k1hmcCRa1nRJHZCy9bEZg0ZQMrYtv5nmpfiBkDQ3rAkl06jcIRcGbNGkw2z6L3DJUmLkObHVBGa/Yh6m2XB7yIhxmHCY1AjhYwk34kZQADmvJ3Ebo81yo8EjLOgmfm3xyQjxOzS5EOP7OdVpscC2zSIM/O48Oaqfsyq2CGzDYtleNSdL8eCe+zwBYwHTrfVyYY2iGkAcN911JLo5JSe2YitSj46WXmJYfAyPJRdTaQ6HkXb8Q3da0ifoFsgqqmEpu1Y3wAPiLp8SfkRk6THjLFyCILYcAJndpfirTipl+8ySNe7yT5+xaRMgOaRwPrKpqbDJ0qTye2eWuo7kKNaYjonKJaR8U8Ra4kHfZQebjW0iNR8U2PC51TOrsOoBZoN56j+3c/wBUDWwlRs5muAmSSLagC4keaGLGTBK3xH+tyiF2tqohK+x/QRTV7AhWEc0dRIAkaz4IoSR5gCsDFAOtHfqOSvwtFz3ho/MQBy4k+Z7kRGNdk4Jz6FaBNsrNxLjBdfkACiPZvHVWzQrAgizHHQjXLO8pgxrGUxSYZLevzMOEk8JuO7kk228SQ5oIOkgtBtfiNDosoPKw+ROOPs0VRyoqQRBuEuwe26bm9dwa4WINp5gaoWptcNJc12aRPWBgHfaxiITSlXoaMMvYs2nhTTque+o6YzNe4zmvfwsCBe4SiptQl5c5hItFo0AF+2EwxVapWv0xLe5oB7ALpdthrmtp/D189wJPVcBqSeKjGk9FpJtVLZW/GEzOoEDvu895+iGwxBqgm4BnwBjzhDMHMq+k8MMg3IOt94T5N9iYJdHMe8kmdZVmyaMlx4CPH/ZCV3yU52QyKYPEk/b7ILcjT+MCTqCqdSRb53IZ1WNdb/VUZBNlRpKp1NFqioQLkgJWhk2VVGX8PIQuKJxDePkV1LofZdh8C94kCUQNkVPlKu2btTogLTqjX+0hizQtQ1sVjZVTgpDZFT5VYdsO3JkKrYBOIGm4I/FCryMWDYlXh5qbdh1eA8Ux/EUv7957GjyspuqsDS4ivlBgkwNdFsohx5BaNg1P0+Kup+z9SdW/uVVXabJdlD4MZZebcdNV6vSfkNTpQbjqguJg38kbQtTvYZVxT6DWskWzTvuHneoO2/U4jwQdVjnspASSQ7mT1yjKfs9W0LO8kAdsoZDY2R/t+p+nwXRt+pwb4H1Vf9li5c+m3W2bMey0oj+z6AMB7qnVJ6jN/aTp3I5AwON29U4M8D6qY25U+VvgfVEYbBMETTA1vVqZTrvA07FbtXDDI1zQ0AGOoxzW3/U74tPNDI2JV/aVcuFPohmdoIcCfEoTFY+o5pa5rQHWtrLXNka20TTH4N2ek6tVnNbMDBAbGhPalGIdSDAGgl4e4l24ssBF+N9EcmbBCrEC6rGv9FTxT5cq21IIMA8jMeSR9lEtBWHwlRzgwNuRmv8ALxPBNdhuY5uVzQbyZHHKBfxQ7faF/SdLkp58uT82WJnSde9Kq2JMZRYTNvXVG0I4tj6tTph1mggE8QfFM9i0QxprW6whg4N36gb7d3NYkVjIkkiRInVbDCbQZVAa0gGPhtYDcOITRaZOcGhxMMBsCd/JLKL2GrUDnWADYJ/NYuidNGiOSv2zjRRp5rSBDRxcdPU9ixWAJzknrTmzSYPWa4EzBvedE9iKOrNBtzCUiA5pGvW3mBwWTc83IJ1O/ciKToDxaCJ56tETwuh0rdloqgzA4nKx0iYcPP8A2UMfWNRotlFMkX1zPkx/8ZQ9I6jjH1/mra7uoRxqkn/xBj/OUv8AA1TsAdZQLkTWYqHBCaplIu0VkpngK5DQJMfzSwpvsBxD2OgEB1wdLgoQ7ByL4jChWadQiMQxmQkNE2v3hKK0tr1CdC98HsN48R4o2vXApEwHCW2mx6w4Kt6Odwpg5co4jKWGQAQDFjJO46x/uiK9WkaZysyvsR1nOtqQLa7ldhtjF9IVHGC74W6djnHcO7hxSNNqkPFqLtmcxrQHkAhwgQRfcOWsry2FH2apR1uueJlo7gPuvJfFIfzwWjLbk0odEWA5OtIBJNuaXYelmIbMSYlPKdJrWhvVkObcCTrwStlKfoo2lTDmgtYGhovF55lKC5aHatatldA93ETEG+tlnCgZJrt2E4MEvaBrI7r62T/Ftbkc6o4gFxAADiJyiCJ3rO4ao9plkg6SEQaVV/xE8bnfxTKLYJOPsGbrey0eIhtB2QMIgXdYxAEskzO/RJDh2D4n9wU6TmkxTplx5/VNj+i5X0g6hpRh2T4+tJEdbiLpuW0ZvWqVJHwtmTpaT/VkkNYBtJzxIl8gGN4tKYDb7tKTGs/hEntlAyDcNR6ji2g0CHdeq6+mgFrqGMxrW2dWJ6pGWiAxsyLTvCR4ypUFn5hPWg8zrHcgXVCUUjNjhu2A0+7Y1v6iM7vEqqptF9R0ucT2mUsLSNbInCU7o0KO8SXisG15qERLWuk3EhojQ6aILaDpa1wgNJflYPywW79Tr5I3aFMYeq3KcxAkzxIOsIH8IG0zUqauEU2793WPLhx8JyCxPXN1WApVzdRCRlF0WtYqnjVWtqKRrBYAMWpngMNmc0AwZFwbjmD2INtQJtsNw6SdYaXT5fdGPYnI9F21Ouc9RxOWcomBHJI6uK1y2sR9kdtnEuNt3JJmUySY3CT2SPVUlKtITjhathmHpmM0iD1fERJ74KohHCqBTylBYSM8nQX79yEtUNHdhGzKDXvyuBIIPwkNMi9iQRxV2MotacjQ6xdOaJvA3W3bkVsZ81HR8v3XvaCMwj4ouZOm4R4+KaK9k5SeVCqu1BVAi68tJFoQdRxS8jK8aKynmx8OejD5A6x5kxYW7TxCT0aTnuDWiSbALa7Mo0KdPo3vrUjqc7AWyQJhzQYEjekh3YeV6ozO03++f/ETF9+v9clDO57IAEDfIHkVqcS2hJmsHNm3Vpub3EiUNUw+CI+IDsOXyBTUJn/DO0cOS8AkAbzmbYb7TqtR+PAsBZrQAOG8DyHgEvds7B/3h8QVbUZh91fxAKMFQs3kF0ceXk30A859F5BNfTb8NZv7Y+68nsniJKbCdBvTfCYfEFoaAGjieRlAYBzh8IvIjtToYHEP+MwO2FznZsXYgvJLajyeIGipljfyynzNm0WXqPk8P6ulG1qlMk9GICKZsQV2OP5QAqH1nHUlQK6GI22LUUeyGJgxpMWntXmq0zAEmBoN11KnhybAb7cT2BbE2RdWPuqfa/8A0+qa+z9Yw5rQwG7jUd+VsRA8UsxLCKbAdQ+oOejFDB1crgYmCDB0MGYKIB5tXCBzS9uZ0fFUdYG8AMHCT2JG12Qgtu4GZ3A8gde9PcTtBtnH3jyJjRjCQIgbyLhL8Js/N1nHK2CQYu4iOqwbzdazNHMDg31nEkzvc5xsBxcU22nhBTY0MbYG7jZxJFgR+URfLrvKvoOawCYaGzA1ymd259TnoLcFKk3pfe1bUmzlbJve8nU31OpNuzdg9AeDwgDemrfCLtB/Od3dPj4pXtPGGo4uPhwHBF7V2gah4NFmjgEmqvTdC9uypwuvCmutaSr2UClofIrbS5jzUhQ5jz9EVTw5VzcMeCFGyAhhzxHn6JlsqnlD3SNAPE/yXG4bku4p2RkcT9B/NMlsSTsVbSqSVLC4Yik53EE90f14oVwL3ADUmPFaOvR6jh+g/RDthfxSQir/AABc2fhy7MewLmIs0c0z2LRHRSd5J+32Rl2C6iW7KoZXHs+6X7UrS9x5x4W+ydAhsmdBPgsxiHprpCRVys7i3yZ5IN5V73S0HlHhZDuU5uzoiqGvsw3347HfSPutjVPUd/Cfosj7Kj33/g76t9Vq8Wfdv/gd9Cn4+jn5vsZzGn3I4l7r77NZ6pY0cymG0D7pna8+bB9kAxZ9jx6OFnMqJYrFxakG2ce2A3vPnH2XlLEH4f4R9SVxIxkW4OvluNQQQn+AqurzncQ0RZtp7VlaNzExpdGVcRktTebjrJSg1242mzKGRN5vPZKRPdKg6oSrKVIlFIDdHaNMkwE7wuxndbN1S1uaNSZmOzRU4DAuAFSwaHDXU9YLSVXgPfJj3Q+rvVN0S7FuP2YwAZSGgUy4zck8lYzJTJDBo6mcxu6+t9ypx2ODgI/uSPoluJxmsfoPgqRjrZJu3o5jJcOM1an+hMcFshrG9JXOVu5v5nb+5A4R5im4CT0ziBxMUyAn1P4pkVKsST/06Vrnhb7KTey6WgSng2EueWm5dkpCztNT8oCJxFTL1i4fC5stENFx7ujzG9yHGIDWvvZznA1B8VTk3g2bkqOFpOxDpd1WNtAsANzW8z/NAJPAYU1Tnfam3QbuOUfcqra+0M5ytswaAWnnH0Cu2xjxHRMgNFjH+X14lI3vT9CdkKr0JqVOs9SwzJK3bM9ILw1FFUaMl3bHgB9ypUWq7Bt6s8ST4mUWLEkylCtFIK1tNWtppGylFApBK9u1AIbvF43fzT3o1n/aNvXbzb9yshaA9h0s1YEnQF32jzWlqthruw66ab1n/Z0e+/8AB31C0ONMU3k/KfO33QRp9mPrvkQFotiU/cs7/wDMVmnla3ZlHLSYP0g+N/ui3s0l8SjbL8tI8XEN+58gsrWK1m28PmpHi3reGvkSsjVKzeg8aLG0HdHn/LmyjtiUOU8ZDsH1R8Dut2zr4OSRwSvopF7Y79lGe8cf0Ef4m+i0ePPun/w/WyUeyx92eIcR4wU02mfdO7v8wVYdHNyfYzu0D7umOTj41HD7INqL2jpTH6B5ucfuhAt7HXR5cXiVFxWCexbvh/gb9F1Qxx63cP8AKF5SfY8VopZvVzsO4AE2nRUMKubVJMkyjFWFh1HZzuqXDK1zgJPPem+HpMpVgG36h14zqEPtHEktYZ/M0qutW96D+kqqic7lfRdVxJyVL/nJ8wVHFYwl8uP5Etq4mzxxKqxB0OYEkXjd2pm0jKDZe+qSzMNAAznfkhxVMETrEjs0lVSvBScrLKKQ0wxmm2TbpDJ5ZWJ+arW0wSMlOJaz81UxYvjRp+6ztB8UgdYq79PhGvgjcOypXfcyd5OgA+gQCW4ag6vUnQb/AJWt4AcNwCZbSxgpMFOna3eAdSf1H+tyliMQyhTyt7uLnfMeSzdasSSSZJTJUI3Z571RUcvOcqKjkGE5qUxwVNAUWyU4wzU0UJJlz7NceAP0RmGZAA4AIPFfCBxc0ecnyCNaUJBiEtCtaUMxytaUjHRYkHtQLs7D9RH3TzMs/wC0lY5gBEZZB1MyfBZGKfZv/nH+A/Vqb7efFF19S0Dxn6BJvZph6YncGme8hMfaOoMgBzTqLdW9iCVkaS2ZymzM4NG8geJhboDcFk9gNaazZmwJHCQN/n5LWFyyBM44cVhcbRyuc3gSPA2W3zrLe0NOKpPzAHyj7LMHG9hHsv1m1aZ0IHmCD9kkrMgwm3svUio4cWz4EeqW49sPcODiPAlD0UX2Y49lKn/Mb/CfqD9k62g0uplrbmRy0PNZ/wBlx1nnkPqfRaEuTxeiPJ9hDtDC1CWgMcYa0G1pAvftQv4Sp8hWnzKJcmBkzLnDP+Uqqth3kaeYWneqKjeS1WZTZncVTcXWB8F5O3NHBeSuAy5WjOMRNdrABlMnfwQjSvAKaZZoa4qr1G9yrLy90yBDSgnVCbKMqsuT8Jx46JzxXiVGV1TspRIKQU8Nh3PMNElE4PCOc4NAkzEJkAL2fhy9oYLnPPdluTwC0GZlGnA03ne47gOSro020WEAjTru/wBI5fVItoY0vPIaD79qZL2Sk7dIji8SXuJP+3IIYuUC5RLkGxkjrnKpecV1gS9jPSC8KxNaIQOFamFJWRA5XPXpjtd4CPui2uQbTNU8mgd5M+iLakZRFzSrM9lU0KTwCCNxEFIMDVtp0xInSxn03rMYqtmcTECZhPv7Ep8XeI9FdT2RSH5fG6WmPkkK/Z2qGvdO9tvFMtsDOxvAOv4G6t/s1m4DwVeKwhLS0GOHcjWhLuVivYeJbTLs1piD2TbzTxmLadCktHZj84LsoEzZMjhmgExoJtqsgTq9BmdJPaRnwO7QfIj7q3C45rnQS1o4ud5Qj69amGHrNdI4iEJSoaHG7M/7OtPSyAYggndfT6ILGul7jxcfqU62XjAHlguXaAcQCY/rgkjqL3OjKc3CPFZPQ1VJjb2bbZ55geEn7p1nS3YNIsYQ4QS4m/CAPsmDiqRWiE3s7nUDUUSVBxTCEnOVbnKDlDOiY88ri4XhdWMZt1MtcWuEOaS0g6ggkEHvC4DaNy+0/wDGL2JwrHfjaYeypVeeka0t6NzvzPylshxm8GCbxJJPyg7Obxd5ei510dgtldTEbObxd5ei6NnN4u8vRYwuV+GoF5hv9bkYNnN4u8vRO6mymU6XVLpeGSbTdt4smAL6ZyDoqXWe6xcOe4JvhqAotyi7z8TuH6Qj9i7FptomqC7OTlmRYcrITa+CDWgBzr66eieEb2R5Z1pCPaWOzHKPhHmeKXFyYu2e3i7y9FE7Pbxd5eiMmaMaFxKiSmJ2e3i7y9FF2Abxd5eiRsokLVfQCLbs9vF3l6Iuhs9vF3l6IwF5OiFAI1iuo7Pbxd5eiJbgG8XeXoqkhRhTLnu/VHgIRrSu7OwLcky65J3eiNGBbxPl6KY6BWlTa5FtwLeJ8vRdOCbxPl6JRgSV0FFfgm8T5eim3Bt4ny9EDAwK8TKJ/CDifL0Um4QcT5eiIoA5iiAmf4NvE+XovHBN4ny9FjCavg2O+JoJ4xfxQlTY1I6CCdIJ8lonYNvE+XosxtPD+9JzOBBtcWjSLWQY0bCcNs1mHJeTLogTunXvSr8X74QfikHv/wBkTiKj3iHPd3ZR5wo4bY7DfM+e0eiSKd2Wk1jQQXO4qDnu4qRwIH5n+I9Fz8N+p3l6K2RzYEDWKicSr/wo4ny9FE4JvE+XojZsCg4hQdiER+BbxPl6KdDZzXOAJdcgbt/chkbAqweFq1Z6Jjn5YmBMTMT4HwXl+jfYb2Xw+Bw4FEOLqga+o95DnuMWBIAAAkwABqd5JPFN8hRcSP/Z)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-rose-500"> Forever Home. </strong>
                        </h1>
                    <div className="flex flex-col md:flex-row items-center md:gap-15">
                        <div
                            className="lg:ml-[10%] py-32 sm:px-6 lg:flex lg:h-screen lg:items-center "
                        >
                            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                                <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                                    The world's leading
                                    <strong className="block font-extrabold text-teal-600"> uptime monitoring <span className="text-white">service.</span> </strong>
                                </h1>

                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                            >
                                Learn More
                            </a>
                                <div className="mt-8 flex flex-wrap gap-4 text-center">
                                    <a
                                        href="#"
                                        className="block w-full rounded-4xl bg-teal-600 hover:bg-blue-400 md:px-12 md:py-4 px-3 py-2 text-xl font-medium text-white shadow-sm  focus:ring-3 focus:outline-hidden sm:w-auto"
                                    >
                                        Start monitoring in 30 seconds
                                    </a>


                                </div>
                            </div>
                        </div>
                        {/* image div */}
                        <div className='md:w-[450px]'>
                            <img className='h-[350px]' src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
                <p className="text-center  text-white relative text-xl py-8 md:py-0 md:bottom-[80px]">Currently, we keep an eye on <strong>7,570,000</strong> monitors for more than <strong>2,100,000</strong> users and companies.                </p>

            </div>
        // </div>
    );
};

export default Banner;