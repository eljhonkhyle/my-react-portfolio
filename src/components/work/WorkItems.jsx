import React from 'react'


const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img'/>
      <h3 className="work__title">{item.title}
      <span className="work__description">{item.description}</span>
      </h3>
      <a href={item.link} className="work__button">    
      Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <a href={item.github} className="work__button">    
      Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}

export default WorkItems