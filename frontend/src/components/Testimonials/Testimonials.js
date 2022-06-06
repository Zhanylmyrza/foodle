import gallery1 from '../../images/gallery/gallery-1.jpg'
import gallery2 from '../../images/gallery/gallery-2.jpg'
import gallery3 from '../../images/gallery/gallery-3.jpg'
import gallery4 from '../../images/gallery/gallery-4.jpg'
import gallery5 from '../../images/gallery/gallery-5.jpg'
import gallery6 from '../../images/gallery/gallery-6.jpg'
import gallery7 from '../../images/gallery/gallery-7.jpg'
import gallery8 from '../../images/gallery/gallery-8.jpg'
import gallery9 from '../../images/gallery/gallery-9.jpg'
import gallery10 from '../../images/gallery/gallery-10.jpg'
import gallery11 from '../../images/gallery/gallery-11.jpg'
import gallery12 from '../../images/gallery/gallery-12.jpg'
import dave from '../../images/customers/dave.jpg'
import ben from '../../images/customers/ben.jpg'
import steve from '../../images/customers/steve.jpg'
import hannah from '../../images/customers/hannah.jpg'

const Testimonials = () => {
  return (
    <section className="section-testimonials" id='section-testimonials'>
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>
      
      <div className="testimonials">
        <figure className="testimonial">
          <img className="testimonial-img" src={dave} alt="Photo of customer Dave Bryson"/>
          <blockquote>Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.</blockquote>
          <p className="testimonial-name">&mdash; Dave Bryson</p>
        </figure>

        <figure className="testimonial">
          <img className="testimonial-img" src={ben} alt="Photo of customer Ben Hadley"/>
          <blockquote>The AI algorithm is crazy good, it chooses the right meals for me every time. it's amazing not to worry about food anymore!</blockquote>
          <p className="testimonial-name">&mdash; Ben Hadley</p>
        </figure>

        <figure className="testimonial">
          <img className="testimonial-img" src={steve} alt="Photo of customer Steve Miller"/>
          <blockquote>Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!</blockquote>
          <p className="testimonial-name">&mdash; Steve Miller</p>
        </figure>

        <figure className="testimonial">
          <img className="testimonial-img" src={hannah} alt="Photo of customer Hannah Smith"/>
          <blockquote>I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</blockquote>
          <p className="testimonial-name">&mdash; Hannah Smith</p>
        </figure>
      </div>
      </div>
      <div className="gallery">
        <figure className="gallery-item">
          <img src={gallery1} alt="Photo of beautifully arranged food"/>
         

        </figure>

        <figure className="gallery-item">
          <img src={gallery2} alt="Photo of beautifully arranged food"/>
        </figure>

        <figure className="gallery-item">
          <img src={gallery3} alt="Photo of beautifully arranged food"/>
        </figure>

        <figure className="gallery-item">
          <img src={gallery4} alt="Photo of beautifully arranged food"/>
        </figure>

        <figure className="gallery-item">
          <img src={gallery5} alt="Photo of beautifully arranged food"/>
        </figure>

        <figure className="gallery-item">
          <img src={gallery6} alt="Photo of beautifully arranged food"/>
        </figure>

        <figure className="gallery-item">
          <img src={gallery7} alt="Photo of beautifully arranged food"/>
        </figure>

        <figure className="gallery-item">
          <img src={gallery8} alt="Photo of beautifully arranged food"/>
        </figure>

        <figure className="gallery-item">
          <img src={gallery9} alt="Photo of beautifully arranged food"/>
        </figure>

        <figure className="gallery-item">
          <img src={gallery10} alt="Photo of beautifully arranged food"/>
        </figure>

        <figure className="gallery-item">
          <img src={gallery11} alt="Photo of beautifully arranged food"/>
        </figure>

        <figure className="gallery-item">
          <img src={gallery12} alt="Photo of beautifully arranged food"/>
        </figure>
      </div>
    </section>
  )
}

export default Testimonials