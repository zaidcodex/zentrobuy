import React from 'react';

const FeatureList = ({ features }) => {
  const rows = [];
  
  // Grouping the features into chunks of 7
  for (let i = 0; i < features.length; i += 7) {
    rows.push(features.slice(i, i + 7));
  }

  return (
    <div className="d-flex">
      {rows.map((row, rowIndex) => (
        <ul className="fa-ul" key={rowIndex}>
          {row.map((feature, index) => (
            <li key={index}>
              <b>
                <i
                  style={{ fontWeight: "bold", color: "#6699ff" }}
                  className="fa-li fa fa-check"
                ></i>
              </b>
              {feature}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

// Example Usage


// const App = () => <FeatureList features={features} />;

export default FeatureList;
