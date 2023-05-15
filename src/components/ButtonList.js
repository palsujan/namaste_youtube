import React from 'react'
import Button from './Button'


const List = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Movies", "News", "Valentines", "Trailers", "Watched" ]
const ButtonList = () => {
  return (
    <div className="flex">
      {/* <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="Movies"/>
      <Button name="News"/>
      <Button name="Valentines"/> */}
      {List.map( (list, index) =>{
        return <Button key={index} name={list}/>
      })}
    </div>
  )
}

export default ButtonList