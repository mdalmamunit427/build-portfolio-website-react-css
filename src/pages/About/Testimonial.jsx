
const Testimonial = ({ name, avatar, testimonial }) => {
  return (
    <li className="testimonials-item">
      <div className="content-card" data-testimonials-item>
        <figure className="testimonials-avatar-box">
          <img src={avatar} alt={name} width="60" data-testimonials-avatar />
        </figure>
        <h4 className="h4 testimonials-item-title" data-testimonials-title>{name}</h4>
        <div className="testimonials-text" data-testimonials-text>
          <p>{testimonial}</p>
        </div>
      </div>
    </li>
  );
}

export default Testimonial;