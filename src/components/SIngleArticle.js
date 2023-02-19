import React from 'react'
import { useParams } from 'react-router'

export default function SIngleArticle() {
    const {id} = useParams()
  return (
    <div>
        <h1>SIngleArticle</h1>
        <h3>{id}</h3>
    </div>
  )
}
