var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        img: 'http://1.fwcdn.pl/ph/69/69/396969/203223_2.1.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'http://samequizy.pl/wp-content/uploads/2015/09/filing_images_5072c8c117ef.jpg'
    },
    {
        id: 3,
        title: 'Game of Thrones',
        desc: 'Serial o wlace o tron:)',
        img: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/55977545/thrones-hardhome.0.0.jpg'
    }
];
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
    );
});
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(element, document.getElementById('app'));