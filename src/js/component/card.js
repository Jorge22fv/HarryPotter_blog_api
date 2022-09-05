import React from "react"

export const Card = ({character}) => {

    return (

      <div>
        <div className="card">
          <img src={character.image} className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">{character.house}.</p>
            <a href="#" className="btn btn-primary">Ver Perfil</a>
          </div>
        </div>
      </div>

    )
}