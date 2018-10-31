var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'https://via.placeholder.com/100x200',
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'https://via.placeholder.com/100x200',
    },
    {
        id: 3,
        title: 'Mała Stopa',
        desc: 'Film przedstawia legendę o Wielkiej Stopie z zupełnie innej perspektywy',
        image: 'https://via.placeholder.com/100x200',
    },
    {
        id: 4,
        title: 'Hotel Transylwania 3',
        desc: 'Paka Draka wybiera się na wakacje ekskluzywnym statkiem',
        image: 'https://via.placeholder.com/100x200',
    }

];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', { src: movie.image })
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));

