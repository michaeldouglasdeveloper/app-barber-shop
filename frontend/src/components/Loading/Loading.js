import React from 'react';
import ReactLoading from 'react-loading';

export default function Loading({ type, color }) {
  return (
    <section className="loading">
      <ReactLoading type={type} color={color} height={'10%'} width={'70px'} />
    </section>
  )
}

