import React, { useState, useEffect } from 'react';
import firebaseDb from '../../config/firebase.js';
import './styles.css';

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    firebaseDb.child("ranking").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  return (
    <div className="home">
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>PONTOS</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((ID) => {
            return (
              <tr key={ID}>
                <th scope="row">{ID}</th>
                <td>{data[ID].Nome}</td>
                <td>{data[ID].Pontos}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;