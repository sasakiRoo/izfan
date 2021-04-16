const jumbotron = document.querySelector('.jumbotron');
const hyewon = document.querySelector('.hyewon');
const yena = document.querySelector('.yena');
const yujin = document.querySelector('.yujin');
const wony = document.querySelector('.wonyoung');
const chaey = document.querySelector('.chaeyeon');
const sakura = document.querySelector('.sakura');
const chaewon = document.querySelector('.chaewon');
const yuri = document.querySelector('.yuri');
const minju = document.querySelector('.minju');
const hitomi = document.querySelector('.hitomi');
const nako = document.querySelector('.nako');
const eunbi = document.querySelector('.eunbi');
const hvrMe = document.querySelector('.hvr');



jumbotron.addEventListener('mousemove', function(event){
    const xPos = Math.round((event.clientX / window.innerWidth)*100);
    console.log(`x = > ${xPos}`);

    const yPos = Math.round((event.clientY / window.innerHeight)*100);
    console.log(`y= > ${yPos}`);

    // hyewon
    if ((xPos >= 27&&xPos <= 30)){
        if (yPos > 15 && yPos< 25){
            console.log('kang hyewon');
            hyewon.style.visibility = 'visible';
        }else{
            hyewon.style.visibility = 'hidden';
        }

    }else{
        hyewon.style.visibility = 'hidden';
    }

    // yena
    if ((xPos >= 36&&xPos <= 39)){
        if (yPos > 12 && yPos < 28){
            console.log('choi yena');
            yena.style.visibility = 'visible';
        }else{
            yena.style.visibility = 'hidden';
        }

    }else{
        yena.style.visibility = 'hidden';
    }

    // yujin
    if ((xPos >= 47&&xPos <= 50)){
        if (yPos > 10 && yPos <25){
            console.log('ahn yujin');
            yujin.style.visibility = 'visible';
        }else{
            yujin.style.visibility = 'hidden';
        }

    }else{
        yujin.style.visibility = 'hidden';
    }

    // wonyoung
    if((xPos >= 56 && xPos < 59)){
        if((yPos > 17 && yPos < 24)){
            console.log('wonyoung');
            wony.style.visibility = 'visible';
        }else{
            wony.style.visibility = 'hidden';
        }
    }else{
        wony.style.visibility = 'hidden';
    }

    // chaeyeon
    if((xPos >= 65 && xPos < 69)){
        if(yPos > 14 && yPos < 24){
            console.log('chaey');
            chaey.style.visibility = 'visible';
        }else{
            chaey.style.visibility = 'hidden';
        }
    }else{
        chaey.style.visibility = 'hidden';
    }

    // sakura
    if(xPos >= 75 && xPos < 78){
        if(yPos > 16 && yPos < 26){
            sakura.style.visibility = 'visible';
        }else{
            sakura.style.visibility = 'hidden';
        }
    }else{
        sakura.style.visibility = 'hidden';
    }

    // chaewon
    if(xPos >= 22 && xPos < 26){
        if(yPos > 32 && yPos < 42){
            chaewon.style.visibility = 'visible';
        }else{
            chaewon.style.visibility = 'hidden';
        }
    }else{
        chaewon.style.visibility = 'hidden';
    }

    // yuri
    if(xPos >= 33 && xPos < 37){
        if (yPos > 32 && yPos < 42){
            yuri.style.visibility = 'visible';
        }else{
            yuri.style.visibility = 'hidden';
        }
    }else{
        yuri.style.visibility = 'hidden';
    }

    // minju
    if(xPos >43 && xPos < 47){
        if(yPos > 37 && yPos < 42){
            minju.style.visibility ='visible';
        }else{
            minju.style.visibility = 'hidden';
        }
    }else{
        minju.style.visibility = 'hidden';
    }

    // hitomi
    if(xPos > 53 && xPos < 60){
        if(yPos > 37 && yPos < 43){
            hitomi.style.visibility = 'visible';
        }else{
            hitomi.style.visibility = 'hidden';
        }
    }else{
        hitomi.style.visibility = 'hidden';
    }

    // nako
    if(xPos > 65 && xPos < 69){
        if(yPos > 39 && yPos < 45){
            nako.style.visibility = 'visible';
        }else{
            nako.style.visibility = 'hidden';
        }
    }else{
        nako.style.visibility = 'hidden';
    }

    // eunbi
    if(xPos >= 74 && xPos < 80){
        if(yPos > 34 && yPos < 42){
            eunbi.style.visibility = 'visible';
        }else{
            eunbi.style.visibility = 'hidden';
        }
    }else{
        eunbi.style.visibility = 'hidden';
    }
    // hover text
    if(xPos >= 15 && xPos <= 83){
        if(yPos >= 10 && yPos <= 64){
            hvrMe.style.visibility = 'collapse';
        }else{
            hvrMe.style.visibility = 'visible';
        }
    }else{
        hvrMe.style.visibility = 'visible';
    }


});
