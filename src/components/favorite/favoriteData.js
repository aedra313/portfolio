
import disney from './../../media/favorite/disney.png';
import animation from './../../media/favorite/2dAnimation.png';
import sw from './../../media/favorite/sw.png';
import scifi from './../../media/favorite/sci-fi.png';
import kittensAndPuppies from './../../media/favorite/kittens&puppies.png';
import nike from './../../media/favorite/nike.png';
import unnecessary from './../../media/favorite/unnecessary.png';


const data = [
  {
    title: 'Kittens and puppies',
    img: kittensAndPuppies,
  },
  {
    title: '2D animation',
    img: animation,
  },
  {
    title: 'Star Wars',
    img: sw,
  },
  {
    title: 'Disney songs in German',
    img: disney,
    link: 'https://meta.ua/uk/',
  },
  {
    title: 'Sci-fi books',
    img: scifi,
  },
  {
    title: 'Nike commercials.\n' +
        'This one is \n' +
        'soooo powerful',
    img: nike,
    link: 'https://meta.ua/uk/',
  },
  {
    title: 'Unnecessary extra sections on my portfolio website',
    img: unnecessary,
    long: 'true',
  },
];

export default data;
