import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, Navigate } from 'react-router-dom';

import Card from './Card';

function Deck() {
  const [cards, setCards] = useState( {} )
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const location = useLocation()

  useEffect(() => {
    async function verifyToken() {
      const token = localStorage.getItem('token')
      if (!token) {
        return <Navigate to="/login" replace />
      }

      try {
        const response = await axios.post('http://localhost:3001/verify-token', { token })
        if (response.data.isValid) {
          setIsAuthenticated(true)
        } else {
          localStorage.removeItem('token')
          return <Navigate to="/login" replace />
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem('token')
        return <Navigate to="/login" replace />
      }
    }

    verifyToken()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      async function getCards() {
        try {
          const response = await axios.get('http://localhost:3001/deck/', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
          setCards(response.data)
        } catch (error) {
          console.error(error)
        }
      }

      getCards();
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
      <Link to="/home">View more cards.</Link>
    </div>
  )
}

export default Deck