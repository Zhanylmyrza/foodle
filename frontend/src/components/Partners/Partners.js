import './Partners.module.css'

import techCrunch from '../../images/logos/techcrunch.png'
import busnessInsider from '../../images/logos/business-insider.png'
import newYorkTimes from '../../images/logos/the-new-york-times.png'
import forbes from '../../images/logos/forbes.png'
import usaToday from '../../images/logos/usa-today.png'

import '../../index.css'

const Partners = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src={techCrunch} alt="Techcrunch logo"/>
          <img src={busnessInsider} alt="Business-insider logo"/>
          <img src={newYorkTimes}alt="The-new-york-times logo"/>
          <img src={forbes} alt="Forbes logo"/>
          <img src={usaToday} alt="USA-today logo"/>
        </div>
      </div>
    </section>
  )
}

export default Partners