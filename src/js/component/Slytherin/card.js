import React from "react"

export const Card = ({ character }) => {

  return (

    <div className="card container border-none"
    >
      <div className="card">
        <img src={character.image} className="card-img-top m-none p-none" />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">{character.house}.</p>
          <a href="#" className="btn btn-outline-dark">Ver Perfil</a>
          <buttom>agregar favorito</buttom>
        </div>
      </div>
    </div>

  )
}