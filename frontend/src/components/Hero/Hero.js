import './Hero.module.css'
import customer1 from '../../images/customers/customer-1.jpg'
import customer2 from '../../images/customers/customer-2.jpg'
import customer3 from '../../images/customers/customer-3.jpg'
import customer4 from '../../images/customers/customer-4.jpg'
import customer5 from '../../images/customers/customer-5.jpg'
import customer6 from '../../images/customers/customer-6.jpg'
import hero from '../../images/hero.png'

const Hero = () => {
  return (
    <section className="section-hero">
        <div className="hero">
            <div clas="hero-text-box">
                <h1 className="heading-primary">A healthy meal delivered to your door, every single day</h1>
                <p className="hero-description">The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. We have delivered 250,000+ meals last year!</p>
                <a href="#cta-text" className="btn btn--full margin-right-sm">Start eating well</a>
                <a href="#" className="btn btn--outline">Learn more &darr;</a>
                <div className="delivered-meals"><div className="delivered-imgs"><img src={customer1} alt="Customer photo"/><img src={customer2} alt="Customer photo"/><img src={customer3} alt="Customer photo"/>
                        <img src={customer4} alt="Customer photo"/>
                        <img src={customer5} alt="Customer photo"/>
                        <img src={customer6} alt="Customer photo"/>
                    </div>
                    <p className="delivered-text" > <span> 250,000+</span> meals delivered last year!</p>
                </div>
            </div>
            <div className="hero-img-box">
                <img src={hero}className="hero-img" alt="Woman enjoying food"/>
            </div>
        </div>
    </section>
  )
}

export default Hero