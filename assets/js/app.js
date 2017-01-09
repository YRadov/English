//МАССИВ СЛОВ
var WordsLength = Words.length;

var home_app = new Vue({
    el: '.home_app',
    data: {
        allWords: [
            {en: 'a', tr: 'a', ru: 'a'},
            {en: 'b', tr: 'a', ru: 'b'}
        ],
        //allWords: Words,
        search: 'test',

        lang: {
            ru: true,
            en: true
        },
        wordCnt: 0,
        category: Category[0].name,
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
        },
        login: localStorage.getItem('login')? localStorage.getItem('login') : '',
        email: localStorage.getItem('email')? localStorage.getItem('email') : '',
        pass: localStorage.getItem('pass')? localStorage.getItem('pass') : '',
        persondata: false
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
        changeWord: function () {
            this.word.ru = this.internalWords[this.wordCnt].ru;
            this.word.en = this.internalWords[this.wordCnt].en;
            this.word.tr = this.internalWords[this.wordCnt].tr;
        },
        // смена категории
        changeCat: function (event) {
            this.startWord();
        },
        // скрыть все страницы
        pagesHide: function () {
            this.page = _.mapObject(this.page, function (val, key) {
                return val = false;
            });
        },
        // переключение страниц
        pageHome: function (event) {
            this.pagesHide();
            this.page.home = true;
        },
        pageSearch: function (event) {
            this.pagesHide();
            this.page.search = true;
        },
        pageAdd: function (event) {
            this.pagesHide();
            this.page.add = true;
        },
        pageInfo: function (event) {
            this.pagesHide();
            this.page.info = true;
            console.log(this.allWords);

        },
        // показать/скрыть учетные данные
        personData: function () {
            this.persondata = this.persondata? false : true;
        },
        // установить учетные данные
        setPersonData: function (event) {
            localStorage.setItem('login', this.login);
            localStorage.setItem('email', this.email);
            localStorage.setItem('pass', this.pass);
        },
        clearPersonData: function (event) {
            localStorage.setItem('login', '');
            localStorage.setItem('email', '');
            localStorage.setItem('pass', '');
            this.login = localStorage.getItem('login');
            this.email = localStorage.getItem('email');
            this.pass = localStorage.getItem('pass');
        }
    }
});

