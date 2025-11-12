let userWeight = document.querySelector('#weight');
let userHeight = document.querySelector('#height');
let userAge = document.querySelector('#age');
let result = document.querySelector('#description');
let btn = document.querySelector('button');
let indexRes = '';
let imt = 0;

function estimateIMT(age, weight, height){
    if(age<10||weight<25||height<80||height>250){
        return 'unbeliavely';
    }

    let index= Math.round(weight/(height/100)**2);
    if(age<25){
        if(index<19) {
            indexRes = 'low';
        } else if (index>18 && index<25) {
            indexRes = 'normal';
        } else if (index>24) {
            indexRes = 'hight';
    }
    }
    else if(age>24 && age<35) {
        if(index<20) {
            indexRes = 'low';
        } else if (index>19 && index<26) {
            indexRes = 'normal';
        } else if (index>25) {
            indexRes = 'hight';
    }
    }
    else if(age>34 && age<45) {
        if(index<21) {
            indexRes = 'low';
        } else if (index>20 && index<27) {
            indexRes = 'normal';
        } else if (index>26) {
            indexRes = 'hight';
    }
    }
    else if(age>44 && age<55) {
        if(index<22) {
            indexRes = 'low';
        } else if (index>21 && index<28) {
            indexRes = 'normal';
        } else if (index>27) 
            indexRes = 'hight';
    }
    
    else if(age>56 && age<65) {
        if(index<23) {
            indexRes = 'low';
        } else if (index>22 && index<29) {
            indexRes = 'normal';
        } else if (index>28) {
            indexRes = 'hight';
    }
    }
    else if(age>64) {
        if(index<24) {
            indexRes = 'low';
        } else if (index>23 && index<30) {
            indexRes = 'normal';
        } else if (index>29) {
            indexRes = 'hight';
    }
    }
    imt = index;
   return indexRes;
};


btn.addEventListener('click', ()=>{
    let estimation = estimateIMT(+userAge.value, +userWeight.value, +userHeight.value);
    if(estimation == 'low'){
        let realImt = imt;
        let counter = 0;
        while(estimation=='low'){
            estimation = estimateIMT(+userAge.value, +userWeight.value+counter, +userHeight.value);
            counter++;
        }
        result.textContent  = `Ваш ИМТ = ${realImt}, что ниже нормы для вашего возраста. Для нормализации значения ИМТ рекомендуется набрать ${counter} кг. На этом сайте вы найдёте рецепты блюд, которые помогут набрать и удержать здоровый вес. Сохраняйте понравившиеся рецепты в свой кабинет и предлагайте к публикации ваши собственные рецепты через меню сайта. Всё получится!`;
    } else if(estimation == 'normal'){
        let realImt = imt;
        result.textContent  = `Ваш ИМТ = ${realImt}, это отличный показатель для вашего возраста! На этом сайте собраны рецепты блюд для здорового питания, которые помогут сохранить  здоровье и стройность!`;
    } else if(estimation == 'hight'){
        let realImt = imt;
        let counter = 0;
        while(estimation=='hight'){
            estimation = estimateIMT(+userAge.value, +userWeight.value-counter, +userHeight.value);
            counter++;
        }
        result.textContent  = `Ваш ИМТ = ${realImt}, что выше нормы для вашего возраста. Для нормализации значения ИМТ рекомендуется сбросить ${counter} кг. На этом сайте вы найдёте рецепты блюд, которые помогут обрести и удержать здоровый вес. Сохраняйте понравившиеся рецепты в свой кабинет и предлагайте к публикации ваши собственные рецепты через меню сайта. Всё получится!`;
    } else {result.textContent  = `Похоже, вы ввели некорректные данные. Чтобы начать работу с калькулятором, введите в соответствующие поля значения вашего роста (см) и веса (кг). Чтобы получить наиболее точный результат, вводите значения с точностью до десятых`;}
         
   
});