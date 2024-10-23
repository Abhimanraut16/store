// Assuming Result is a class component
'use client'

class Result extends React.Component {
  render(SearchPage) {
    const { results } = this.props;
    return (
      <div>
        {results.map((result) => (
          <div key={result._id}>{result.name}</div>
        ))}
      </div>
    );
  }
}

export default Result;
