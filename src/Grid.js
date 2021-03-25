import React from 'react';

const Grid = ({ config, data }) => {
  return (
    <table>
      <thead>
      <tr>
        {
          config.map( c => (
            <th  key={ c.title }>{c.title}</th>
            )
          )
        }
      </tr>
      </thead>
      <tbody>
        {
          data.map( movie  => (
            <tr key={ movie.id }>
              {
                config.map( c => 
                  {
                    if (c.title === "trailer") {
                      let Trailer = c.component;
                      return (
                         <td key={ c.title }>
                           <Trailer data={movie}/>
                         </td>
                         )
                    } else {
                      return ( <td key={ c.title }>{movie[c.fieldName]}</td>)
                    }
                  }
                ) 
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
};

export default Grid;