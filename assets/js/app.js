var home_app = new Vue({
    el: '.home_app',
    data: {
        lang:{
            ru: true,
            en: true
        },
        wordCnt: 0,
        //category: Category[1].name,
        category: 'it',
        options: Category,
        word: {
            ru: Words[0].ru,
            en: Words[0].en,
            tr: Words[0].tr
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
        prevWord: function () {
            this.wordCnt--;
            if (this.wordCnt < 0) {
                this.wordCnt = WordsLength - 1;
            }
            this.changeWord();
        },
        nextWord: function () {
            this.wordCnt++;
            if (this.wordCnt >= WordsLength) {
                this.wordCnt = 0;
            }
            this.changeWord();
        },
        startWord: function () {
            this.wordCnt = 0;
            this.category = 'it';
            this.changeWord();
        },
        changeWord: function() {
            this.word.ru =  this.internalWords[this.wordCnt].ru;
            this.word.en =  this.internalWords[this.wordCnt].en;
            this.word.tr =  this.internalWords[this.wordCnt].tr;
            //this.word.ru =  Words[this.wordCnt].ru;
            //this.word.en =  Words[this.wordCnt].en;
            //this.word.tr =  Words[this.wordCnt].tr;
        },
        changeCat: function (event) {
            this.startWord();
        }
    }
});