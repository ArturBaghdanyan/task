import "./styles.scss";
import logo from "./im and vs/image.jpg";
import logo_2 from "./im and vs/image_2.jpg";
import logo_3 from "./im and vs/image_2.jpg";
import logo_4 from "./im and vs/image_3.jpg";
import React from "react";


function Gallery() {
    const src = "https://www.youtube.com/embed/mBD8TNuXKUU";

    return (
        <div className="gallery">

            <div className="video">
                <iframe
                    src = {src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>

                </iframe>
            </div>

            <div className="text">
                <p>
                    44-օրյա պատերազմ (նաև՝ Հայ-ադրբեջանական պատերազմ, Արցախյան երկրորդ պատերազմ),
                    պատերազմ Արցախի Հանրապետության և Ադրբեջանի Հանրապետության միջև, որը սկսվել է
                    սեպտեմբերի 27-ին Ադրբեջանի ռազմական ագրեսիայով և ավարտվել նոյեմբերի 9-ին Արցախի
                    կապիտուլացիոն համաձայնագրով։ Արցախի Հանրապետությանը ռազմական աջակցություն է
                    ցուցաբերել Հայաստանը, Ադրբեջանին՝ Թուրքիան։ Պատերազմը 1988 թվականին սկսված արցախյան
                    հակամարտության վերջին էսկալացիան է, և ամենաարյունալին՝ առաջին պատերազմից հետո։

                    Մարտական գործողությունները ընթացել են արցախա-ադրբեջանական շփման գծի ողջ երկայնքով,
                    ինչպես նաև հայ-ադրբեջանական շփման գծի որոշ հատվածներում։ Մարտական գործողություններն
                    սկսվել են սեպտեմբերի 27-ի առավոտյան ժամը 07:10։ Ի պատասխան պատերազմի՝ Հայաստանում և
                    Արցախում հայտարարվել է ռազմական դրություն և ընդհանուր զորահավաք։ Ադրբեջանի որոշ
                    շրջաններում սկզբում հայտարարվել է ռազմական դրություն և պարետային ժամ, ապա ընդհանուր զորահավաք։
                    Պատերազմը նշանակալի դարձավ ԱԹՍ-ների, նորագույն տեխնիկայի և ծանր հրետանու լայնամասշտաբ ռազմական
                    օգտագործմամբ և ինֆորմացիոն դաշտում պաշտոնական հակամարտությամբ՝ հանդես գալով ժամանակակից
                    պատերազմի օրինակ:
                </p>
              <span>
                 <img src={logo} alt="logo"/>
                 <img src={logo_2} alt="logo_2"/>
                 <img src={logo_3} alt="logo_3"/>
                 <img src={logo_4} alt="logo_4"/>
              </span>
            </div>

        </div>
    )
}
export default Gallery;