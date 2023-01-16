# Varastonhallinta
Sovellus ladataan omalle koneelle
   git clone https://github.com/Ervin-Magi/varastonhallinta [kansio]
   cd [kansio]
Palvelin sovellukseen pitää lisätä .env tiedostoon tietokanta yhteystiedot

    MONGODB_URI = mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]

    TEST_MONGODB_URI = mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]

Palvelin  asennetaan yarn:lla

    yarn && yarn start
Front end asenetaan yarn:lla

    cd client && yarn && yarn start
    
JsDoc on "out" kanssiossa

    varastonhallinta/out

Alla miltä sovellus näyttää
[![Netlify Status](https://i.imgur.com/iF5Jhha.png)](varastonhallinta.netlify.app)
Netlify koontivaihe näkyy alapuolella

[![Netlify Status](https://api.netlify.com/api/v1/badges/6dd8310f-66b1-49a7-830f-5b58b8765485/deploy-status)](https://app.netlify.com/sites/varastonhallinta/deploys)
