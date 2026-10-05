import { Link } from 'react-router-dom'
import Seo from '../site/seo'
import { Button } from '../components/UI'

export default function NotFound() {
  return (
    <section className="section notfound">
      <Seo title="Page not found" description="This page does not exist. Try the home page, our services or products." path="/404" noindex />
      <div className="container narrow center">
        <p className="eyebrow">Error 404</p>
        <h1>We could not find that page.</h1>
        <p className="lead">It may have moved. Try one of these instead.</p>
        <div className="hero-actions dark-text">
          <Button to="/">Home</Button>
          <Button to="/services" variant="outline">Services</Button>
          <Button to="/products" variant="outline">Products</Button>
          <Link className="inline-link" to="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  )
}
