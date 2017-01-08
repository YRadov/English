//МАССИВ СЛОВ
var WordsLength = Words.length;

var home_app = new Vue({
    el: '.home_app',
    data: {
        lang:{
            ru: true,
            en: true
        },
        wordCnt: 0,
        category: Category[0].name,
        //category: 'it',
        options: Category,
        word: {
            ru: Words[0].ru,
            en: Words[0].en,
            tr: Words[0].tr
        },
        page: {
            home: true,
            search: false,
            add: false,
            info: false
        }
    },
    computed: {
        internalWords: function () {
            if (this.category === 'Все') {
                return Words
            }
            return _.where(Words, {category: this.category});
        }
    },
    methods: {
        switchEn: function () {
            this.lang.en = !this.lang.en;
            console.log(this.category);
            console.log(this.internalWords);
        },
        switchRu: function () {
            this.lang.ru = !this.lang.ru;
        },
        switchEnRu: function () {
            this.lang.en = true;
            this.lang.ru = true;
        },
        // переход к предыдущему слову
        prevWord: function () {
            this.wordCnt--;
            if (this.wordCnt < 0) {
                this.wordCnt = WordsLength - 1;
            }
            this.changeWord();
        },
        // переход к следующему слову
        nextWord: function () {
            this.wordCnt++;
            if (this.wordCnt >= WordsLength) {
                this.wordCnt = 0;
            }
            this.changeWord();
        },
        // переход в начало списка
        startWord: function () {
            this.wordCnt = 0;
            this.changeWord();
        },
        // изменение одного слова
        changeWord: function() {
            this.word.ru =  this.internalWords[this.wordCnt].ru;
            this.word.en =  this.internalWords[this.wordCnt].en;
            this.word.tr =  this.internalWords[this.wordCnt].tr;
        },
        // смена категории
        changeCat: function (event) {
            this.startWord();
        },
        // скрыть все страницы
        pagesHide: function  () {

        },
        // переключение страниц
        pageHome: function (event) {
            this.startWord();
        }
    }
});