import quots from '../img/quots.png';
import a02 from '../img/a02.jpg';
import a03 from '../img/a03.jpg';
import a04 from '../img/a04.jpg';
import a05 from '../img/a05.jpg';
import a06 from '../img/a06.jpg';
import a08 from '../img/a08.jpg';
import a10 from '../img/a10.jpg';
import a11 from '../img/a11.jpg';
import a12 from '../img/a12.jpg';
import a13 from '../img/a13.jpg';
import a16 from '../img/a16.jpg';

const quote = 'This is a truly amazing piece of work';

const items = [
  { id: 'a01', text: quote, image: quots },
  { id: 'a02', image: a02 },
  { id: 'a03', className: 'double', image: a03 },
  { id: 'a04', image: a04 },
  { id: 'a05', image: a05 },
  { id: 'a06', image: a06 },
  { id: 'a07', text: quote, image: quots },
  { id: 'a08', image: a08 },
  { id: 'a09', text: quote, image: quots },
  { id: 'a10', className: 'half', image: a10 },
  { id: 'a11', className: 'double', image: a11 },
  { id: 'a12', image: a12 },
  { id: 'a13', image: a13 },
  { id: 'a14', text: quote, image: quots },
  { id: 'a15', text: quote, image: quots },
  { id: 'a16', className: 'half', image: a16 },
];

export default function Main() {
  return (
    <main>
      <div className="container">
        {items.map(({ id, text, image, className }) => (
          <div
            key={id}
            id={id}
            className={className}
            style={{ backgroundImage: `url(${image})` }}
          >
            {text && <p>{text}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
