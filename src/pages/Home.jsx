import Header from "../components/Header";
import hero from "../assets/hero.jpg";
import welcome from "../assets/welcome.png";
import "../styles/home.css";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <Header />
      <div className="hero-section">
        <img src={hero} alt="Hero" className="hero-img" />
        <h1>
          <span className="left">Welcome to</span> <br />
          <span className="right">AnimeMangaToon</span>
        </h1>
      </div>

    <Carousel />

      <section id="section-content">
        <h2>Lore Olympus Webtoon: Jaw Dropping Seen on Media</h2>
        <p>
          Dive into the intricate world of "Lore Olympus," where ancient myths
          collide with modern story, exploring power, love, trauma, and identity
          in captivating ways.
        </p>
        <img src={welcome} alt="" className="img"  loading="lazy"/>
        <div className="info-part">
          <p>by Gyanesh Kumar</p>
          <p>August 17, 2024</p>
        </div>
        <p>
          Rachel Smith’s Lore Olympus webtoon is a modern retelling of the
          ancient Greek myth of Hades and Persephone, has taken the digital
          comics world by storm. This article explores the complex world of
          “Lore Olympus,” providing details on the Lore Olympus characters,
          major themes, and the impact this beloved series has on readers.
        </p>
        <div>
          <h3>Major Characters in Lore Olympus Webtoon</h3>

          <div className="characters">
            <div>
              <h4>Hades</h4>
              <img
                src="https://animemangatoon.com/wp-content/uploads/2024/05/64u47lg4-360x504.png.webp"
                alt="Hades" loading="lazy"
              />
            </div>
            <div className="right-side-content">
              <p className="content-text">
                In the Lore Olympus webtoon, Hades, the God of the underworld,
                takes center stage. Often depicted as a handsome blue man in a
                business suit, Hades runs the Underworld Corporation, serves as
                the older brother of Zeus and Poseidon, and plays a role in the
                Six Traitor Dynasty. His character takes on the burden of
                leadership and pursuing personal interests.
              </p>
              <button>Learn More...</button>
            </div>
          </div>

          <div className="characters">
            <div>
              <h4>Persephone</h4>
              <img
                src="https://animemangatoon.com/wp-content/uploads/2024/05/myq53tdb-360x504.png.webp"
                alt="Persephone" loading="lazy"
              />
            </div>
            <div className="right-side-content">
              <p className="content-text">
              Persephone, the goddess of spring, is the story’s heroine alongside the underworld. Initially portrayed as an innocent and naive young woman, her character develops dramatically as she faces more challenges.  Persephone is depicted with pink skin and a generous heart, a stark contrast to the harsh reality of Olympus. Her journey included discovering her strength, and she dealt with the trauma of being raped by Apollo, as well as her strong feelings about the underworld.
              </p>
              <button>Learn More...</button>
            </div>
          </div>

          <div className="characters">
            <div>
              <h4>Zeus</h4>
              <img
                src="https://animemangatoon.com/wp-content/uploads/2024/05/ilzxkblr-350x350.png.webp"
                alt="Zeus" loading="lazy"
              />
            </div>
            <div className="right-side-content">
              <p className="content-text">
              Zeus, the king of the gods, is depicted as a yellow-skinned man with long, straight hair. Known for his promiscuity and egotism, Zeus’ actions often brought chaos to Olympus. A member of the Six Realms of Lies, he has intimate relationships with many characters, including his brothers Hades and Poseidon, and many lovers. His character provides a lens through which to examine issues of power and corruption.
              </p>
              <button>Learn More...</button>
            </div>
          </div>
         
          <div className="characters">
            <div>
              <h4>Poseidon</h4>
              <img
                src="https://animemangatoon.com/wp-content/uploads/2024/05/ccgqrffp-360x504.png.webp"
                alt="Poseidon" loading="lazy"
              />
            </div>
            <div className="right-side-content">
              <p className="content-text">
              Poseidon, the God of the sea, is Zeus’s brother from the underworld. He is usually characterized by a carefree and quick temperament, portrayed with green skin and long, wavy hair. Despite being slightly less witted, Poseidon is very loyal to his family. His relationship with his wife Amphitrite and their polygamous arrangement add an intriguing dynamic to his character.
              </p>
              <button>Learn More...</button>
            </div>
          </div>
         
          <div className="characters">
            <div>
              <h4>Eros</h4>
              <img
                src="https://animemangatoon.com/wp-content/uploads/2024/05/p682kcd9-360x504.png.webp"
                alt="Eros" loading="lazy"
              />
            </div>
            <div className="right-side-content">
              <p className="content-text">
              Eros, the God of love and the son of Aphrodite and Ares is a strong, maroon young man. He is one of Persephone’s best friends and knows the depression she is enduring. Eros is supportive and loving, often helping to nurture other romantic relationships as he deals with his challenges, including his relationship with Psyche.
              </p>
              <button>Learn More...</button>
            </div>
          </div>
         
          <h3>Minor Lore Olympus Characters</h3>

          <div className="characters">
            <div>
              <h4>Hermes</h4>
              <img
                src="https://animemangatoon.com/wp-content/uploads/2024/05/zo3dwfwa-360x504.png.webp"
                alt="Hermes" loading="lazy"
              />
            </div>
            <div className="right-side-content">
              <p className="content-text">
              Hermes, the God of speed travel, is depicted as an athletic man in red. He works as a soul collector for Hades and is an old friend of Persephone. His character adds lightness and realism to the story.
              </p>
              <button>Learn More...</button>
            </div>
          </div>

          <div className="characters">
            <div>
              <h4>Apollo</h4>
              <img
                src="https://animemangatoon.com/wp-content/uploads/2024/05/e255xaho-474x375.png.webp"
                alt="Apollo" loading="lazy"
              />
            </div>
            <div className="right-side-content">
              <p className="content-text">
              Apollo, the sun, God of music and prophecy, is a dark red, strong man known for arrogance. He becomes an essential antagonist after Persephone is raped, bringing severe issues of power abuse and trauma into play.
              </p>
              <button>Learn More...</button>
            </div>
          </div>

          <div className="characters">
            <div>
              <h4>Artemis</h4>
              <img
                src="https://animemangatoon.com/wp-content/uploads/2024/05/6g6fq36m-360x504.png.webp"
                alt="Artemis" loading="lazy"
              />
            </div>
            <div className="right-side-content">
              <p className="content-text">
              Artemis, the goddess of the hunt, is Persephone’s best friend and roommate. She is a robust, dark-red tomboy fiercely protective of Persephone. Her relationship with her brother Apollo grows as he realizes his true nature.
              </p>
              <button>Learn More...</button>
            </div>
          </div>

          <div className="characters">
            <div>
              <h4>Demeter</h4>
              <img
                src="https://animemangatoon.com/wp-content/uploads/2024/05/hlymlxkd-360x504.png.webp"
                alt="Demeter" loading="lazy"
              />
            </div>
            <div className="right-side-content">
              <p className="content-text">
              Demeter, the harvest goddess, is Persephone’s overprotective mother. She is a tall, green woman with long red hair. Her stern and controlling nature stemmed from a deep-seated fear of what her daughter could do and the dangers she faced.
              </p>
              <button>Learn More...</button>
            </div>
          </div>

          <div className="characters">
            <div>
              <h4>Ares</h4>
              <img
                src="https://animemangatoon.com/wp-content/uploads/2024/05/6gjen5jm.png.webp"
                alt="Ares" loading="lazy"
              />
            </div>
            <div className="right-side-content">
              <p className="content-text">
              Ares, the God of war, seems like a chubby man with red eyes. He has a tumultuous relationship with Aphrodite and a brief history with Persephone, which adds to his character’s involvement in the plot.
              </p>
              <button>Learn More...</button>
            </div>
          </div>


          <h4>Final Words for Lore Olympus</h4>
          <p>
            “Lore Olympus” is not a retelling of modern Greek mythology; It is a
            beautiful tapestry of interlocking stories that explore deep themes
            of power, love, trauma, and identity. Rachel Smith’s vibrant art and
            nuanced storytelling have created a world that deeply affects
            readers, offering entertainment and insight. Let us know in the
            comments below what you think about the modern re-telling of Greek
            mythology.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
