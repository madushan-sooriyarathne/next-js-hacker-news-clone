const Error = ({ statusCode }) => {
  return (
    <div className="error">
      <figure className="error-figure">
        <img
          alt={`A cat for your ${statusCode}`}
          src={`https://http.cat/${statusCode}`}
          width="100%"
        ></img>
      </figure>

      <style jsx>{`
        .error {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          width: 100%;
          height: 100%;
        }

        .error-figure {
          width: 50%;
        }
      `}</style>
    </div>
  );
};

export default Error;
