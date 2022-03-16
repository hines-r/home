import React from 'react'

function PersonalProject({ title, img, link, technologies, description, leftImg }) {
  return (
    <div>       
        <div className="row mb-5">
            <div className={`col-lg proj-img-container d-flex justify-content-center align-items-center 
                ${!leftImg ? 'order-lg-last' : ''}`}>
                <img className="img-fluid mb-lg-0 mb-4" 
                    style={{maxHeight: 500}} 
                    src={img} 
                    alt={title} 
                />
            </div>
            <div className='col-lg m-auto'>
                <h2>{title}</h2>
                <p>
                    {technologies.length > 1 ? 
                        "Technologies" : 
                        "Technology"}: {commaSepartedList(technologies)}
                </p>
                <p>
                    <a href={link}>{link}</a>
                </p>
                <p>{description}</p>
            </div>
        </div> 
    </div>    
  )
}

function commaSepartedList(technologies) {
    return <>
        {technologies.map((tech, i) => [
            i > 0 && ", ",
            <span key={i}>{tech}</span>
        ])}
    </>
}

PersonalProject.defaultProps = {
    leftImg: true
}

export default PersonalProject