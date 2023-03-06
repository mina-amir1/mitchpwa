import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryPage() {
    const {cat} = useParams()
  return (
    <div>Category: {cat}</div>
  )
}
