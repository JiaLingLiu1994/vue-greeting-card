<template>
    <div>
        <div class="product-gallery bg-white pt-32px pb-4 mx-auto">
            <div class="row mx-0">
                <div class="col-3 block text-white font-weight-bold px-0 px-sm-2 mx-auto mt-3">
                    2019</div>
            </div>

            <div class="row mx-0 mt-2">
                <div class="col-6 title text-black font-weight-bold px-0 mx-auto">新年快樂</div>
            </div>

            <div class="row mx-0 px-32px">
                <div class="col-6 px-0 session-1">
                    <div class="product-name position-absolute font-weight-bold">
                        Happy new year</div>
                    <div class="pattern position-absolute"/>
                </div>

                <div class="col-4 px-0 ml-auto mr-40px product-2">
                    <div class="image-frame-2">
                        <div class="decribe position-absolute font-italic font-weight-bold">
                            豬年行大運</div>
                        <div class="square-stripe position-absolute"/>
                        <div class="square-box position-absolute"/>
                        <div class="company-name position-absolute font-italic font-weight-bold">
                            海潔克HIJACK</div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 px-32px mt-150px">
                <div class="col-6 px-0 image-frame-3">
                    <div class="product-name font-weight-bold text-white">SPECTRUM</div>
                    <span class="col-10 p-0 content-container position-absolute font-weight-bold">
                        在這個充滿喜悅的日子<br> 願新年的鐘聲<br>
                        能帶給您一份寧靜和喜悅<br> 以及我最真誠的祝福<br>
                        願您 歲歲平安 豬事如意<br><br>
                        <div class="text-right">劉宇峻 敬賀</div></span>
                    <div class="square-stripe position-absolute"/>
                    <div class="square-box position-absolute"/>
                </div>
                <div class="col-4 px-0 ml-auto text-right product-4">
                    <div class="image-frame-4">
                        <div class="product-name position-absolute font-weight-bold bg-white">
                            WATER TECH.</div>
                        <img class="img-4" src="../assets/spectrum.png"/>
                        <div class="pattern position-absolute"/>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang='scss' scoped>
    .product-gallery {
        min-height: 100vh;
        max-width: 425px;
        overflow-x: auto;

        .block {
            height: 27px;
            line-height: 27px;
            font-size: 14px;
            background-color: rgb(152, 49, 52);

            @media screen and (min-width: 525px) {
                max-width: 138px;
                font-size: 20px;
            }

            @media screen and (min-width: 340px) and (max-width: 524px) {
                max-width: 95px;
            }
        }

        .title {
            height: 85px;
            line-height: 85px;

            @media screen and (max-width: 524px) {
                font-size: 27px;
            }
        }

        .mt-150px {
            margin-top: 150px;
        }

        .mt-200px {
            margin-top: 200px;
        }

        .mt-83px {
            margin-top: 83px;
        }

        .square-stripe {
            width: 240px;
            height: 200px;
            border: 20px solid rgba(152, 49, 52, .5);
        }

        .square-box {
            width: 240px;
            height: 200px;
            background-color:  rgb(152, 49, 52);
        }

        .pattern {
            width: 240px;
            height: 100px;
            background: repeating-linear-gradient(
                -45deg,
                rgba(198, 207, 215, 1.0) 6px,
                rgba(198, 207, 215, 1.0) 26px,
                rgba(0, 0, 0, 0.0) 26px,
                rgba(0, 0, 0, 0.0) 42px
            );
        }

        .decribe {
            line-height: 28px;
            font-size: 24px;
        }

        .product-num {
            line-height: 48px;
            font-size: 48px;
        }

        .product-name {
            font-size: 25px;
            line-height: 25px;
            text-shadow: 0px -10px 3px rgba(0,0,0,0.30), 0px -30px 3px rgba(0,0,0,0.10);
        }

        .content-container {
            z-index: 8;
            top: 10px;
            left: 30px;
        }

        .session-1 {
            .product-name {
                z-index: 2;
            }
        }

        .image-frame-1 {
            position: relative;
            width: 100%;
            display: inline-block;

            &:before {
                content: "";
                display: block;
                width: 100%;
            }

            .img-1 {
                position: absolute;
                display: block;
                top: 0px;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: 1;
            }

            .product-name {
                top: -47px;
                left: 20px;
                z-index: 2;
            }

            .square-stripe {
                top: -27px;
                right: -60px;
                z-index: 0;
            }

            .pattern {
                left: 150px;
                bottom: -45px;
                z-index: 3;
                background: repeating-linear-gradient(-45deg,
                 #eff0f1 6px, #eff0f1 26px, rgba(0, 0, 0, 0) 26px, rgba(0, 0, 0, 0) 42px);
            }

            .img1 {
                z-index: 5;
            }

            .decribe {
                transform: rotate(-270deg);
                right: -95px;
                top: 0px;
            }
        }

        .product-2 {
            margin-left: 60px;

            .image-frame-2 {
                position: relative;
                width: 75%;
                display: inline-block;
                margin-right: 45%;

                &:before {
                    content: "";
                    display: block;
                    width: 100%;
                    padding: 83.33% 0 0 0;
                }

                .img-2 {
                    position:  absolute;
                    display: block;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 2;
                }

                .decribe {
                    left: 0px;
                    top: 16px;
                    z-index: 7;
                    font-size: 20px;
                }

                .product-num {
                    left: 302px;
                    bottom: 251px;
                    z-index: 4;
                }

                .square-box {
                    width: 100%;
                    height: 100%;
                    left: 20px;
                    bottom: 50px;
                    z-index: 6;
                }

                .square-stripe {
                    width: 100%;
                    height: 100%;
                    left: 80px;
                    bottom: 99px;
                    z-index: 0;
                }


                .company-name {
                    z-index: 7;
                    top: 100px;
                    left: -110px;
                    font-size: 26px;
                    width: 300px;
                }
            }

            .product-name {
                margin-top: 25px;
                margin-right: 32px;
                text-align: right;
                right: 0;
                bottom: -18px;
                font-size: 48px;
                line-height: 48px;
                text-shadow: 0px -18px 3px rgba(0,0,0,0.30), 0px -30px 3px rgba(0,0,0,0.10);
            }
        }

        .image-frame-3 {
            position: relative;
            width: 100%;
            display: inline-block;

            &:before {
                content: "";
                display: block;
                width: 100%;
                padding: 41.66% 0 0 0;
            }

            .img-3 {
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                width: 100%;
                height: 42.4%;
                object-fit: cover;
                z-index: 1;
            }

            .product-name {
                position: absolute;
                top: -48px;
                right: -25px;
                font-size: 40px;
                line-height: 48px;
                text-shadow: 0px -18px 3px rgba(0,0,0,0.30), 0px -30px 3px rgba(0,0,0,0.10);
                z-index: 2;
            }

            .square-stripe {
                left: 80px;
                top: 0px;
            }

            .square-box {
                top: -50px;
                left: 0;
                z-index: 1;
            }

            .pattern {
                top: -100px;
                left: 120px;
            }

            .decribe {
                left: 32px;
            }

            .product-num {
                left: 480px;
                z-index: 1;
            }
        }

        .product-4 {
                top: 150px;
                right: 200px;

            .image-frame-4 {
                position: relative;
                width: 75%;
                display: inline-block;

                &:before {
                    content: "";
                    display: block;
                    width: 100%;
                    padding: 200% 0 0 0;
                }

                .img-4 {
                    position:  absolute;
                    display: block;
                    top: 50px;
                    left: 0;
                    // width: 100%;
                    // height: 100%;
                    object-fit: cover;
                    z-index: 3;
                }

                .product-name {
                    transform: rotate(270deg);
                    left: -145px;
                    top: 75px;
                    z-index: 2;
                }

                .decribe {
                    // transform: rotate(-270deg);
                    // right: -32px;
                    top: -95px;
                    z-index: 1;
                    background-color: transparent !important;
                }

                .product-num {
                    left: -57px;
                    bottom: 0;
                }

                .square-stripe {
                    width: 100%;
                    height: 50%;
                    left: -48px;
                    top: -95px;
                    z-index: 0;
                }

                .pattern {
                    bottom: 95px;
                    left: 80px;
                }
            }
        }

        .product-5 {
            .image-frame-5 {
                position: relative;
                width: 75%;
                display: inline-block;
                margin-left: 240px;

                &:before {
                    content: "";
                    display: block;
                    width: 100%;
                    padding: 83.33% 0 0 0;
                }

                .img-5 {
                    position:  absolute;
                    display: block;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                }

                .product-name {
                    left: -245px;
                    top: 50px;
                    z-index: 2;
                    background-color: transparent !important;
                }

                .decribe {
                    right: -150px;
                    top: 0;
                }

                .product-num {
                    left: -104px;
                    bottom: 4px;
                    z-index: 1;
                }

                .square-stripe {
                    width: 100%;
                    height: 50%;
                    left: -104px;
                    bottom: -48px;
                    z-index: 0;
                }

                .pattern {
                    top: -54px;
                    left: -140px;
                    z-index: 1;
                }
            }
        }

        .image-frame-6 {
            position: relative;
            width: 100%;
            display: inline-block;

            &:before {
                content: "";
                display: block;
                width: 100%;
                padding: 83.33% 0 0 0;
            }

            .img-6 {
                position:  absolute;
                display: block;
                top: -6px;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: 1;
            }

            .product-name {
                top: -54px;
                right: 0;
            }

            .product-num {
                left: -60px;
                bottom: 52%;
            }

            .square-stripe {
                bottom: -50px;
                width: 100%;
                z-index: 0;
            }

            .square-box {
                bottom: 6px;
                left: -60px;
            }

            .decribe {
                left: 33%;
                bottom: -25px;
            }
        }

        .product-7 {
            .image-frame-7 {
                position: relative;
                width: 75%;
                display: inline-block;
                margin-top: 200px;

                &:before {
                    content: "";
                    display: block;
                    width: 100%;
                    padding: 166.66% 0 0 0;
                }

                .img-7 {
                    position:  absolute;
                    display: block;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 3;
                }

                .product-name {
                    transform: rotate(90deg);
                    background-color: transparent !important;
                    right: -50%;
                    top: 17%;
                    z-index: 2;
                }

                .decribe {
                    top: -28px;
                    z-index: 1;
                    background-color: transparent !important;
                }

                .product-num {
                    right: -120px;
                    bottom: 0;
                    z-index: 1;
                }

                .square-stripe {
                    width: 100%;
                    height: 100%;
                    left: 60px;
                    top: -50px;
                }

                .square-box {
                    bottom: 0;
                    right: -120px;
                }
            }
        }
    }
</style>
